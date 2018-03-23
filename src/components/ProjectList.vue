<template>
    <article class="project-container d-flex column-50 align-center justify-center" :style="{ backgroundColor: bgColor }">
      <router-link :to="{ name: 'Project', params: { projectId: project_id } }">
        <img :src="imgSrc" :alt="'projet ' + project_data.title">

        <h2 class="d-flex justify-center align-center txt-center"
            :style="{ backgroundColor: bgColor, color: textColor }">
          {{ project_data.title }}
        </h2>
      </router-link>
    </article>

</template>

<script>
export default {
  name: "project-list",

  props: ['project_data', 'project_id'],

  data() {
    return {
      imgSrc: require(`../assets/images/projects/${this.project_data.cover}`),
      bgColor: this.project_data.colors.background,
      textColor: this.project_data.colors.text,
    }
  }

}
</script>

<style scoped lang="scss">
article.project-container {
  height: auto;
  position: relative;
  overflow: hidden;

  a {
    height: 100%;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      transition: transform .5s ease-in-out;
    }

    h2 {
      opacity: 0;
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      margin: 0;
      font-size: 3rem;
      letter-spacing: .25rem;
      transition: opacity .3s ease-out;
    }
  }

}
article.project-container:hover a > img {
  transform: scale(1.1);
}
article.project-container:hover a > h2 {
  opacity: .9;
}

@media screen and (max-width: 768px) {
  .column-50 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
