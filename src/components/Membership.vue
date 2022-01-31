<template>
  <Page title="Membership">
    <template v-slot:footer>
      <BigButton label="Contnue" @click="onNext" />
      <BigButton label="Back" type="clear" @click="onBack" />
    </template>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Page from '@/views/Page.vue'
import BigButton from '@/components/form-elements/BigButton.vue'

export default defineComponent({
  name: 'Membership',

  components: { Page, BigButton },

  methods: {
    onBack () {
      this.$router.push('/form')
    },

    onNext () {
      this.$router.push('/form/overview')
    }
  }
})
</script>

<style scoped lang="scss"></style>
