<template>
  <div class="phone-wrapper">
    <div v-if="mode === 'preview'">
      <Input
        label="Phone"
        v-model="phone.value"
        v-for="(phone, index) in phones"
        :key="index"
        mode="preview"
      />
    </div>
    <div v-if="mode === 'edit'">
      <div v-for="(phone, index) in phones" :key="index">
        <label class="label">Phone</label>

        <div class="phone-item">
          <div class="select">
            <select v-model="phone.type">
              <option v-for="type in getPhoneType(phone.type)" :key="type">
                {{ type }}
              </option>
            </select>
          </div>
          <input type="text" v-model="phone.value" />
          <button class="form-button" @click="deleteHandler(index)">
            Delete
          </button>
        </div>
      </div>
      <a v-if="canAdd" class="link-button" href="#" @click.prevent="addPhone"
        >Add phone
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Input from '@/components/form-elements/Input.vue'

export default defineComponent({
  name: 'PhoneInput',

  emits: ['change', 'update:modelValue'],

  props: {
    mode: { type: String, default: 'edit' }, // edit / preview
    modelValue: {
      type: Array,
      default: () => []
    }
  },

  components: { Input },

  watch: {
    phones: {
      handler () {
        this.update()
      },
      deep: true
    }
  },

  computed: {
    canAdd () {
      return (
        this.mode === 'edit' &&
        this.getAvailableTypes().length &&
        this.phones.length < this.phoneType.length
      )
    }
  },

  methods: {
    update () {
      this.$emit('update:modelValue', this.phones)
      this.$emit('change', this.phones)
    },

    deleteHandler (idx: number) {
      this.phones.splice(idx, 1)
    },

    getAvailableTypes () {
      const typeInUse = this.phones.map((phone: any) => phone.type)

      return this.phoneType.reduce((acum: string[], type: string) => {
        if (typeInUse.includes(type)) return acum
        else return [...acum, type]
      }, [])
    },

    addPhone () {
      this.phones.push({ type: '', value: '' })
    },

    getPhoneType (currentType: string) {
      const types = this.getAvailableTypes()
      return [...types, currentType]
    }
  },

  data () {
    return {
      phones: this.modelValue,
      phoneType: ['home', 'work', 'mobile', 'main', 'other']
    }
  }
})
</script>

<style lang="scss" scoped>
.phone-item {
  display: flex;
  font: normal normal normal 14px/48px $font_family;

  select {
    background: #eeeeee 0% 0% no-repeat padding-box;
    border: 2px solid #c8d3db;
    border-radius: 8px 0px 0px 8px;
    line-height: 48px;
    margin: 2px 0px 2px 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    background-image: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 0 0 0.5em;
    text-align: left;
    font: normal normal bold 18px/24px $font_family;
    letter-spacing: 0px;
    color: $text-color;
    cursor: pointer;
  }

  .select {
    position: relative;
    display: block;
    width: 200px;
    overflow: hidden;
  }

  select::-ms-expand {
    display: none;
  }

  .select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1em;
    padding-top: 4px;
    pointer-events: none;
  }

  .select:hover::after {
    color: $blue-color;
  }

  input {
    margin-left: -2px;
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    border: 2px solid #c8d3db;
    border-radius: 0px 8px 8px 0px;
    padding: 0px 10px;
    font: normal normal normal 14px/48px $font_family;
    margin-right: 22px;
    z-index: 2;
  }
}
</style>
