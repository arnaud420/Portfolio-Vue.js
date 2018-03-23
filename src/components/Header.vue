<template>
  <section id="nav-wrapper">
    <header id="topmenu" class="d-flex align-center justify-between">
      <span id="myname">
        <router-link :to="{ name: 'Home' }">
          Arnaud Lafon
        </router-link>
      </span>

      <div>
        <span id="openmenu" class="d-flex align-center justify-center"
              @click="openMenu">
          <span>Menu</span>
          <!--<img v-if="showMenu===false" :src="imgSrc('arnaud.png')">
          <img v-else :src="imgSrc('IMG_8265.jpeg')">-->
          <img :src="imgSrc('arnaud.png')" alt="arnaud emoji menu">
        </span>
      </div>
    </header>

    <transition name="fade">
      <nav v-if="showMenu">
        <div id="left-wrap" class="w-50 h-100 left" :style="{ backgroundColor: bgColor }">
          <div class="h-100 d-flex justify-center align-center">
            <div>
              <span class="title">Réalisations</span>

              <ul>
                <li v-for="(project, index) in projects" :key="index">
                  <span
                    @mouseenter="changeBgColor(project.colors.background)"
                    @mouseleave="resetBgColor">
                     <router-link :to="{ name: 'Project', params: { projectId: index } }">
                    {{ project.title }}
                    </router-link>
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div id="right-wrap" class="w-50 right d-flex justify-center align-center flex-column h-100">
          <router-link :to="{ name: link.path }" v-for="(link, index) in links" :key="index">
            {{ link.name }}
          </router-link>

          <div id="contact-info">
            <a href="tel:+33630635971" class="left">06 30 63 59 71</a>
            <a href="mailto:arnaud.lafon777@gmail.com" class="right">arnaud.lafon777@gmail.com</a>
          </div>
        </div>
      </nav>
    </transition>
  </section>
</template>

<script>
import projects from '../data/projects';
export default {
  name: "the-header",

  data() {
    return {
      projects,
      showMenu: false,
      bgColor: 'white',
      links: [
        {
          name: 'Accueil',
          path: 'Home'
        },
        {
          name: 'À propos',
          path: 'About'
        },
      ]
    }
  },

  methods: {
    imgSrc(thumbnail) {
      return require(`../assets/images/${thumbnail}`)
    },

    openMenu() {
      this.showMenu = !this.showMenu;
    },
    changeBgColor(color) {
      this.bgColor = color;
    },
    resetBgColor() {
      this.bgColor = 'white';
    },
  },
}
</script>

<style scoped lang="scss">
section#nav-wrapper {
  header#topmenu {
    background: transparent;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    height: 5.6rem;
    z-index: 100;
    overflow: hidden;

    span#myname {
      font-size: 2rem;
      margin-left: 2rem;
      transition: opacity .3s ease-out;
      a {
        color: black;
        position: relative;
      }
      a.router-link-exact-active:after {
        margin-bottom: 6px;
      }
    }
    span#myname:hover {
      opacity: .5;
    }

    div {
      margin-right: 2rem;
      span#openmenu {
        cursor: pointer;
        span {
          font-size: 2rem;
          transition: opacity .3s ease-out;
        }
        img {
          height: 5rem;
          width: auto;
          margin-bottom: 1rem;
        }
      }
      span#openmenu:hover > span {
        opacity: .5;
      }
    }
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    div#left-wrap {
      transition: background-color .3s ease-in-out;

      div {
        span.title {
          display: block;
          font-size: 5rem;
          border-bottom: 1px solid black;
          letter-spacing: .5rem;
        }

        ul {
          margin: 0;
          padding: 0;
          margin-top: 5rem;

          li {
            font-size: 2.5rem;
            margin: 2.25rem 0;
            list-style-type: circle;

            a {
              position: relative;
              cursor: pointer;
              opacity: .7;
              letter-spacing: .25rem;
              transition: .2s ease-in-out;
              color: black;
            }
            a:hover {
              opacity: 1;
            }
          }
        }
      }
    }
    div#right-wrap {
      background-color: #2196f3;
      position: relative;

      a {
        position: relative;
        color: white;
        font-size: 5rem;
        margin: 1.5rem 0  ;
        letter-spacing: .5rem;
        transition: .2s ease-in-out;
      }
      a:hover {
        opacity: .7;
      }
      a.router-link-exact-active:after {
        margin-bottom: 0;
        height: 1.2rem;
        width: 1.2rem;
        bottom: 0;
        top: 0;
        margin-top: 19px;
      }

      div#contact-info {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;

        a {
          font-size: 2rem;
          letter-spacing: .25rem;
          margin: 2.5rem;
        }
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
a.router-link-exact-active:after {
  content: "";
  height: 1rem;
  width: 1rem;
  background: #0069c0;
  position: absolute;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  bottom: 0;
  right: 0;
  margin-bottom: 9px;
  margin-right: -20px;
}
@media screen and (max-width: 1024px) {
  section#nav-wrapper nav div#right-wrap div#contact-info a {
    margin: 2.5rem 1.5rem;
  }
}
@media screen and (max-width: 768px) {
  .h-100 {
    height: 50vh;
  }
  .w-50 {
    width: 100%;
  }
}
@media screen and (max-width: 425px) {
  section#nav-wrapper nav div#left-wrap div ul {
    margin-top: 2.5rem;
    li {
      margin: 1.25rem;
    }
  }
  section#nav-wrapper nav div#right-wrap div#contact-info a {
    letter-spacing: .1rem;
  }
}
</style>
