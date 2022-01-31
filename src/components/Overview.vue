<template>
  <Page title="Overview">
    <Input
      :label="data.label"
      v-model="data.value"
      v-for="data in getTextEmailInputData"
      :key="data.name"
      mode="preview"
    />
    <PhoneInput v-model="getPhoneInputData" mode="preview" />
    <template v-slot:footer>
      <BigButton label="Submit" @click="onSubmit" />
      <BigButton label="Back" type="clear" @click="onBack" />
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
  name: 'Overview',

  components: { Input, PhoneInput, Page, BigButton },

  emits: [],

  data () {
    return {
      userData: []
    }
  },

  created () {
    this.userData = this.getFormData
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
    onSubmit () {
      console.log('submit')
    },

    ...mapMutations({ setFormData: 'setFormData' }),

    onBack () {
      this.$router.push('/form/membership')
    }
  }
})
</script>
