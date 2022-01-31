<template>
  <div class="stepper-wrapper" :style="setWidth">
    <div
      class="stepper-item"
      v-for="(item, index) in items"
      :key="item.id"
      :class="{ 'stepper-item__inactive': index > selectedIndex }"
    >
      <div class="stepper-line" v-if="index > 0"></div>
      <div class="stepper-content">{{ item.label }}</div>
      <div class="stepper-description">{{ item.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StepperItem from '@/types/StepperItem'

export default defineComponent({
  name: 'Stepper',

  props: {
    width: {
      type: Number,
      default: 700
    },

    selectedIndex: { type: Number, default: 0 }
  },

  computed: {
    setWidth () {
      return { width: this.width + 'px' }
    }
  },

  data () {
    return {
      items: [
        { id: 1, label: '1', description: 'Personal info' },
        { id: 2, label: '2', description: 'Membership' },
        { id: 3, label: '3', description: 'Overview' }
      ] as StepperItem[]
    }
  }
})
</script>

<style lang="scss">
.stepper-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  .stepper-item {
    position: relative;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.stepper-item__inactive .stepper-content {
      border-color: $gray-color;
      color: $gray-color;
    }

    &.stepper-item__inactive .stepper-line {
      border-bottom-color: $gray-color;
    }

    &.stepper-item__inactive .stepper-description {
      color: $gray-color;
    }
    .stepper-line {
      width: 100%;
      height: 2px;
      border-bottom: 2px solid $blue-color;
      position: absolute;
      right: 50%;
      top: 43px;
      z-index: 1;
    }

    .stepper-description {
      text-align: center;
      font: normal normal normal 24px/33px $font_family;
      letter-spacing: 0px;
      color: $text-color;
    }
    .stepper-content {
      background: $page-background-color;
      margin: 10px;
      border: 2px solid;
      border-color: $blue-color;
      border-radius: 50%;
      width: 65px;
      line-height: 65px;
      color: $blue-color;
      text-align: center;
      font: normal normal bold 48px/65px $font_family;
      letter-spacing: 0px;
      z-index: 2;
    }
  }
}
</style>
