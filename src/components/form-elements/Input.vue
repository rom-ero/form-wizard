<template>
  <div :class="{ preview: mode === 'preview' }">
    <label class="label" :for="name">{{ label }}</label>

    <input
      v-if="mode === 'edit'"
      :type="type"
      :value="modelValue"
      :name="name"
      @input="onInput"
    />

    <div v-if="mode === 'preview'">{{ modelValue }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',

  emits: ['change', 'update:modelValue'],

  props: {
    mode: { type: String, default: 'edit' }, // edit / preview
    modelValue: { type: String, default: '' },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    label: { type: String, default: '' }
  },

  methods: {
    onInput (e: any) {
      this.$emit('update:modelValue', e.target.value)
      this.$emit('change', e.target.value)
    }
  }
})
</script>

<style lang="scss" scoped>
.preview {
  display: flex;
  align-items: center;
  label {
    width: 200px;
  }
}

input {
  width: 100%;
  box-sizing: border-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid $gray-color;
  border-radius: 8px;
  padding: 0px 10px;
  font: normal normal normal 14px/48px $font_family;
}
</style>
