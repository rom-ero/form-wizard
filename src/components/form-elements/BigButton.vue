<template>
  <button :class="type" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Page',

  emits: ['click'],

  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  margin: 12px 0px;
  width: 100%;
  border-radius: 8px;
  padding: 13px;
  font: normal normal bold 28px/38px $font_family;
  cursor: pointer;
  color: $text-color;
  border: 2px solid;
}

.form-button:active {
  background: $blue-color !important;
  color: #ffffff;
}

.form-button:hover {
  background: $button-background-color-hover;
}
.default {
  background: $blue-color;
  border-color: $blue-color;
  color: #ffffff;
}
.clear {
  background: #ffffff;
  border-color: 1px solid $blue-color;
  color: $blue-color;
}
</style>
