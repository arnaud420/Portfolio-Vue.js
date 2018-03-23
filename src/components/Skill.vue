<template>
  <div class="column">
    <div class="d-flex justify-center align-center uppercase" :style="{ backgroundColor: bgColor, color: txtColor }">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "skill",
  props: ['title', 'bgColor', 'txtColor']
}
</script>

<style scoped lang="scss">
div.column {
  max-width: 25%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;

  div {
    margin: .5rem;
    color: white;
    height: 25rem;
    background-color: #2196f3;
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 768px) {
  div.column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.333333333%;
    flex: 0 0 33.333333333%;
    max-width: 33.333333333%;

    div {
      margin: 0;
    }
  }
}
@media screen and (max-width: 425px) {
  html {
    font-size: 50%;
  }
  div.column {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>
