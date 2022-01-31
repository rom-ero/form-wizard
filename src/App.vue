<template>
  <div class="page-wrapper">
    <router-view name="Stepper"></router-view>
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  background-color: $page-background-color;
  width: 100%;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  color: $text-color;
}
#app {
  padding-top: $app-padding-top;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.label {
  text-align: left;
  font: normal normal bold 18px/48px $font_family;
  letter-spacing: 0px;
}
.form-button {
  background: $button-background-color;
  border: 2px solid $gray-color;
  border-radius: 8px;
  padding: 0px 18px;
  font: normal normal bold 18px/24px $font_family;
  cursor: pointer;
  color: $text-color;
}

.form-button:active {
  background: $blue-color !important;
  color: #ffffff;
}

.form-button:hover {
  background: $button-background-color-hover;
}

.link-button {
  display: inline-block;
  padding: 6px 0px;
  font: normal normal bold 18px/24px $font_family;
  color: $blue-color;
  text-decoration: none;
}

.link-button:hover {
  text-decoration: underline;
}
</style>
