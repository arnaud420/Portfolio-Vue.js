<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~normalize.css";
@import url('https://fonts.googleapis.com/css?family=Rokkitt');

html {
  font-size: 62.5%;
  font-family: 'Rokkit', serif;
}

.section {
  padding: 1rem 0;
}
.txt-center {
  text-align: center;
}
.uppercase {
  text-transform: uppercase;
}
.d-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.flex-wrap {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.flex-column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.justify-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.justify-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.align-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.column-50 {
  max-width: 50%;
  flex: 0 0 50%;
}
.box-shadow {
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.w-50 {
  width: 50%;
}
.container {
  margin: 0 auto;
  max-width: 112rem;
  padding: 0 2rem;
}
.btn {
  font-size: 1.2rem;
  padding: 2rem;
  letter-spacing: .1rem;
  font-weight: bold;
  transition: .3s ease-in-out;
  text-align: center;
  border-radius: 5rem;
  border: .1rem solid;
  min-width: 30rem;
}
.h-100 {
  height: 100vh;
}
.right {
  float: right;
}
.left {
  float: left;
}

img {
  max-width: 100%;
}
a {
  text-decoration: none;
}
h2 {
  letter-spacing: .25rem;
  font-size: 5rem;
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 55%;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 50%;
  }
}
@media screen and (max-width: 320px) {
  html {
    font-size: 42.5%;
  }
}
</style>
