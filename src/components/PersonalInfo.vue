<template>
  <Page title="Personal info">
    <Input
      :label="data.label"
      v-model="data.value"
      v-for="data in getTextEmailInputData"
      :key="data.name"
      @change="onChange"
    />

    <PhoneInput v-model="phones" @change="onChange" />

    <template v-slot:footer>
      <BigButton label="Contnue" @click="onNext" />
    </template>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Page from '@/views/Page.vue'
import Input from '@/components/form-elements/Input.vue'
import PhoneInput from '@/components/form-elements/PhoneInput.vue'
import BigButton from '@/components/form-elements/BigButton.vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  name: 'PersonalInfo',

  components: { Input, PhoneInput, Page, BigButton },

  emits: ['update:user-data'],

  data () {
    return {
      userData: [],
      phones: []
    }
  },

  created () {
    this.userData = this.getFormData
    this.phones = this.getPhoneInputData
  },

  computed: {
    ...mapGetters({ getFormData: 'getFormData' }),

    getTextEmailInputData () {
      return this.userData.filter(
        (data: any) => data.type === 'email' || data.type === 'text'
      )
    },

    getPhoneInputData () {
      const foundData: any = this.userData.find(
        (data: any) => data.type === 'phone'
      )
      return foundData?.value || []
    }
  },

  methods: {
    ...mapMutations({ setFormData: 'setFormData' }),

    onNext () {
      this.$router.push('/form/membership')
    },

    onChange () {
      this.setFormData(this.userData)
    }
  }
})
</script>
