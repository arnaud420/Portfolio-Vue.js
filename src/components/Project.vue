<template>
    <div>
      <the-header></the-header>

      <section>
        <header class="d-flex justify-center align-center"
                :class="{ active: isActive }"
                :style="{ backgroundColor: project.colors.background }">
          <h1 :style="{ color: project.colors.text }">{{ project.title }}</h1>
          <a class="uppercase btn"
             @mouseenter="onHover"
             @mouseleave="onHover"
             :href="project.url" target="_blank"
             :style="{ color: txtColor, backgroundColor: bgColor}">
            {{ project.url }}
          </a>
        </header>

        <article class="container">

          <div class="section">
            <p>
              {{ project.description }}
            </p>

            <ul class="d-flex flex-wrap justify-center align-center">
              <li class="d-flex justify-center align-center" v-for="tool in project.tools">
                {{ tool }}
              </li>
            </ul>

            <p>{{ project.response }}</p>

            <div v-for="detail in project.details" id="details">

              <h2 v-if="detail.title">{{detail.title}}</h2>
              <p v-if="detail.description">{{detail.description}}</p>

              <div v-for="thumbnail in detail.thumbnails">
                <img :data-src="imgSrc(thumbnail)" class="lazyload" :alt="thumbnail"/>
              </div>

            </div>
          </div>

        </article>

        <footer @click="changeRoute" class="d-flex justify-center align-center">
          <div>
            <i></i>
          </div>
        </footer>
      </section>

      <the-footer></the-footer>
    </div>
</template>

<script>
import TheHeader from './Header';
import TheFooter from './Footer';
import projects from '../data/projects.json';
export default {
  name: "project",
  components: {
    TheHeader,
    TheFooter
  },

  data() {
    return {
      over: false,
      project: projects[this.$route.params.projectId],
      txtColor: projects[this.$route.params.projectId].colors.text,
      bgColor: projects[this.$route.params.projectId].colors.background,
      isActive: false
    }
  },

  methods: {
    onHover() {
      this.over = !this.over;

      if (this.over === true) {
        this.txtColor = this.project.colors.background;
        this.bgColor = this.project.colors.text;
      }
      else {
        this.txtColor = this.project.colors.text;
        this.bgColor = this.project.colors.background;
      }
    },

    imgSrc(thumbnail) {
      return require(`../assets/images/projects/${thumbnail}`)
    },
    changeRoute() {
      this.$router.go(-1)
    },
    activeClass() {
      return this.isActive = !this.isActive;
    },
  },

  mounted() {
    this.activeClass();
  }
}
</script>

<style scoped lang="scss">
.active {
  height: 50vh!important;
}
section {
  header.d-flex {
    height: 100vh;
    position: relative;
    transition: height 1s ease-in-out;

    h1 {
      font-size: 6rem;
      font-weight: normal;
      letter-spacing: .25rem;
    }

    a {
      position: absolute;
      bottom: 5rem;
    }
  }

  article {

    h2 {
      font-size: 3rem;
      margin: 6rem 0 3rem 0;
    }
    p {
      font-size: 2rem;
      margin: 2.5rem 0;
      text-align: justify;
      line-height: 3rem;
    }
    ul {
      padding: 0;
      margin: 0;
      flex-direction: row;
      li {
        font-size: 1.5rem;
        background-color: #f5f5f6;
        height: 8rem;
        margin: .5rem;
        width: 8rem;
        border-radius: 5rem;
        font-weight: bold;
      }
    }
  }

  footer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 6rem;
    cursor: pointer;
    z-index: 0;
    transition: all .5s ease-in-out;
    i {
      border: solid black;
      border-width: 0 .6rem .6rem 0;
      display: inline-block;
      padding: 1.3rem;
      transform: rotate(135deg);
      transition: all .5s ease-in-out;
    }
  }
  footer:hover {
    background: black;
    opacity: .5;

    i {
      border: solid white;
      border-width: 0 .6rem .6rem 0;
    }
  }
}

@media screen and (max-width: 1024px) {
  section footer.d-flex.justify-center.align-center {
    position: relative;
    width: 100%;
    height: 7rem;
    background-color: #f5f5f6;
  }
}
</style>
