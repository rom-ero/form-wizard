<template>
  <section class="section">
    <h1>{{ title }}</h1>
    <slot></slot>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Page',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>
<style lang="scss" scoped>
.footer {
  padding: 20px 0px;
}
.section {
  width: 500px;
  background: #ffffff;
  box-shadow: 0px 3px 18px #00000029;
  border-radius: 16px;
  padding: 32px;
  margin: 80px 0px;
  h1 {
    text-align: left;
    font: normal normal bold 28px/38px $font_family;
    letter-spacing: 0px;
    color: $blue-color;
    margin: 0px 0px 16px 0px;
  }
}
</style>
