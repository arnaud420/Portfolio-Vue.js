<template>
  <div>

    <the-header></the-header>

    <section id="name">

      <div id="wrapper">
        <h1>Arnaud Lafon</h1>

        <div id="letter-wrapper" class="txt-center">

          <strong>
          <span v-for="(letter, index) in jobs" :key="index" class="list-letter">
            <span>{{ letter }}</span>
          </span>
          </strong>

        </div>
      </div>
    </section>

    <section id="about" class="h-100 d-flex justify-center align-center">
      <div class="txt-center container d-flex justify-center align-center flex-column">
        <h2>Bonjour</h2>

        <p>
          Arnaud Lafon, développeur web et étudiant à l'école Ingésup Bordeaux.<br> Sérieux, curieux et rigoureux,
          j'aime les applications simples, rapides et efficaces.
        </p>

        <div class="d-flex justify-center align-center">
          <router-link to="about" class="btn">
            Me découvrir
          </router-link>
        </div>
      </div>
    </section>

    <section id="projects-wrapper" class="section">
      <div class="container">
        <h2 class="txt-center">Mes réalisations</h2>
        <div class="d-flex flex-wrap">
          <project-list v-for="(project, index) in projects"
                        :key="project.id"
                        :project_id="index"
                        :project_data="project">
          </project-list>
        </div>
      </div>
    </section>

    <the-footer></the-footer>

  </div>
</template>

<script>
import TheHeader from './Header';
import TheFooter from './Footer';
import ProjectList from "./ProjectList";
import projects from '.././data/projects.json'

export default {
  components: {
    ProjectList,
    TheHeader,
    TheFooter
  },
  name: 'home',
  data () {
    return {
      projects,
      job: ['D','é','v','e','l','o','p','p','e','u','r',' ', 'w','e','b'],
      jobs:[]
    }
  },

  methods: {
    add(item) {
      this.jobs.push(item)
    },
    addLetterToTab() {
      let delay = 0;
      for(let i = 0; i < this.job.length; i++) {
        setTimeout( () => {
          this.add(this.job[i])
        }, 200 + delay,);
        delay+=200;
      }
    }
  },

  mounted() {
    this.addLetterToTab();
  }
}
</script>

<style lang="scss" scoped>
$primary: #2196f3;
@-webkit-keyframes blink {
  0%   { opacity: 0; }
  50%   { opacity: 1; }
  100% { opacity: 0; }
}
@keyframes blink {
  0%   { opacity: 0; }
  50%   { opacity: 1; }
  100% { opacity: 0; }
}
h1, h2 {
  color: $primary;
}
h2 {
  margin: 2.5rem 0;
}
section#name {
  position: relative;
  height: 90vh;
  div#wrapper {
    height: 50vh;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;

    h1 {
      font-size: 10rem;
      color: #2196f3;
      margin: 0;
      letter-spacing: 1rem;
      font-weight: bold;
    }

    #letter-wrapper {
      font-size: 3.5rem;
      width: auto;

      strong {
        letter-spacing: .25rem;
        div {
          position: relative;
        }
        .list-letter:nth-of-type(12) {
          width: 2rem;
          height: auto;
        }
        .list-letter:last-child:after {
          content: "|";
          -webkit-animation: blink .9s infinite;
          animation: blink .9s infinite;
        }
      }
    }
  }

}

section#about {
  background-color: #f5f5f6;
  position: relative;

  div {

    p {
      font-size: 2.5rem;
      letter-spacing: .1rem;
      line-height: 3rem;
    }
    a {
      color: #0069c0;
      display: block;
      font-size: 1.8rem;
      margin-top: 2.5rem;
    }
    a:hover {
      background-color: #0069c0;
      color: white;
    }
  }
}

section#projects-wrapper {
  padding: 1rem 0 0 0;
}
.list-letter {
  display: inline-block;
}

@media screen and (max-width: 1024px) {
  section#projects-wrapper .container {
    padding: 0;
    max-width: 100%;
  }
}
@media screen and (max-width: 425px) {
  section#name div#wrapper h1 {
    font-size: 6rem;
    letter-spacing: .5rem;
  }
  section#name div#wrapper #letter-wrapper {
    font-size: 3rem;
  }
}
</style>
