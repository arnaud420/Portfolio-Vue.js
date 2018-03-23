<template>
    <div>
      <the-header></the-header>

      <section id="about-page">
        <article id="me" class="d-flex justify-center align-center">
          <div class="left d-flex justify-center align-center">
            <img class="box-shadow" src="../assets/images/arnaud_lafon.png" alt="profil"/>
          </div>

          <div class="right d-flex align-center">
            <div>
              <p>
                Passionné par le web et le numérique, c'est avec une grande motivation que je suis retourné sur les
                bancs de l'école à 25 ans au sein d'Ingésup Bordeaux.<br>
                Ma reconversion professionnelle me permet aujourd'hui de pouvoir exprimer ma créativité à travers
                des projets variés. De l'intégration au développement de site dynamique, j'aime le fait de créer,
                d'expérimenter, et de découvrir chaque jour de nouvelles technologies.<br>
                Aujourd'hui dans le cadre de ma seconde année je recherche un contrat de stage ou un contrat
                d'alternance dans le développement web.
              </p>
            </div>
          </div>
        </article>

        <article id="skills" class="section">
          <h2 class="txt-center">Mes compétences</h2>

          <div class="container">
            <div class="d-flex flex-wrap">
              <skill title="HTML5" bg-color="#FF6600"></skill>
              <skill title="CSS3" bg-color="#2659a5"></skill>
              <skill title="SASS" bg-color="#c6538c"></skill>
              <skill title="PHP" bg-color="#777bb3"></skill>
              <skill title="Laravel 5" bg-color="#e74430"></skill>
              <skill title="Symfony 3" bg-color="#000000"></skill>
              <skill title="WordPress" bg-color="#dfdfdf" txt-color="#000000"></skill>
              <skill title="sql / mysql" bg-color="#f29221"></skill>
              <skill title="jquery" bg-color="#0769ad"></skill>
              <skill title="vue.js" bg-color="#4fc08d"></skill>
              <skill title="seo"></skill>
              <skill title="git" bg-color="white" txt-color="black"></skill>
            </div>
          </div>

          <div id="dlcv" class="d-flex justify-center align-center">
            <a :href="cv" download="cv_arnaud_lafon" class="btn">Télécharger mon cv</a>
          </div>

        </article>

      </section>

      <the-footer></the-footer>
    </div>
</template>

<script>
import TheHeader from './Header';
import TheFooter from './Footer';
import Home from "./Home";
import Skill from './Skill';

export default {
  name: "about",
  components: {
    Skill,
    Home,
    TheHeader,
    TheFooter
  },

  data() {
    return {
      cv: require('../assets/cv.pdf')
    }
  }
}
</script>

<style scoped lang="scss">
section#about-page {
  article#me {
    height: 100vh;

    div.left {
      width: 40%;
      height: 50%;
    }

    div.right {
      width: 60%;
      height: 50%;
      justify-content: flex-start;

      > div {
        width: 80%;

        p {
          font-size: 2.25rem;
          line-height: 3rem;
          letter-spacing: .1rem;
          text-align: justify;
        }
      }
    }
  }

  article#skills {
    background-color: #f5f5f6;
    position: relative;
    min-height: 60rem;

    h2 {
      color: #2196f3;
      margin: 2.5rem 0;
    }

    div#dlcv {
      margin: 5rem 0;

      a.btn {
        display: block;
        border-color: #0069c0;
        color: #0069c0;
        font-size: 1.6rem;
        width: 30rem;
        transition: all .3s ease-in-out;
      }
      a.btn:hover {
        background-color: #0069c0;
        color: white;
      }
    }

  }
}
@media screen and (max-width: 1024px){
  section#about-page article#me div.right {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  section#about-page article#me div.right > div {
    width: 90%;
  }
}
@media screen and (max-width: 768px) {
  div.container {
    padding: 0;
  }
  section#about-page article#me {
    height: 100%;
    display: block;
  }
  section#about-page article#me div.left,
  section#about-page article#me div.right {
    height: 100%;
    width: 100%;
    float: none;
  }
  section#about-page article#me div.right > div {
    width: 100%;
    padding: 0 2rem;
  }
  img.box-shadow {
    height: 30rem;
    margin-top: 2.5rem;
  }
}
@media screen and (max-width: 425px) {
  img.box-shadow {
    height: 20rem;
  }
}
</style>
