<template>
  <section id="footer-contact">
    <article>
      <div class="left d-flex justify-center align-center flex-column">
        <div>
          <h2>Contact</h2>
          <span>
            N’hésitez pas à me contacter pour toutes questions relatives à mes prestations ou si vous souhaitez échanger
            autour de votre projet. Je lirai attentivement votre message et répondrai le plus rapidement possible.
          </span>
        </div>
      </div>

      <div class="right d-flex justify-center align-center flex-column">
          <span>
            <a href="tel:+33630635971">06 30 63 59 71</a>
          </span>
          <span>
            <a href="mailto:arnaud.lafon777@gmail.com">arnaud.lafon777@gmail.com</a>
          </span>
          <span>Bordeaux</span>
      </div>
    </article>

    <footer class="section">
      <div class="d-flex justify-center align-center">
        <a class="d-flex justify-center align-center" href="https://github.com/arnaud420" target="_blank"><i class="icon-github-circled"></i></a>
        <a class="d-flex justify-center align-center" href="mailto:arnaud.lafon777@gmail.com" target="_blank"><i class="icon-mail"></i></a>
        <a class="d-flex justify-center align-center" href="https://www.linkedin.com/in/arnaud-lafon-165429124" target="_blank"><i class="icon-linkedin"></i></a>
      </div>
      <p class="txt-center">
        © {{ date }} Arnaud Lafon. All rights reserved.
      </p>
    </footer>
  </section>
</template>

<script>
export default {
  name: "the-footer",

  data() {
    return {
      date: new Date().getFullYear(),
    }
  }
}
</script>

<style scoped lang="scss">
section#footer-contact {
  background-color: #f5f5f6;

  header {
    h2 {
      margin: 2.5rem 0;
      color: black;
    }
  }

  article {
    height: 30rem;

    div.left {
      height: 30rem;
      width: 60%;
      background-color: #0069c0;
      color: white;
      font-size: 2.25rem;

      > div {
        width: 70%;
        text-align: justify;

        h2 {
          font-size: 3rem;
          margin: 2rem 0;
          text-align: left;
        }
        span {
          line-height: 3rem;
        }
      }
    }

    div.right {
      height: 30rem;
      width: 40%;
      background: #2196f3;
      color: black;
      font-size: 2.5rem;

      span {
        line-height: 5rem;

        a {
          color: black;
          text-decoration: underline;
          transition: opacity .3s ease-in-out;
          opacity: .7;
        }
        a:hover {
          opacity: 1;
        }
      }
    }
  }

  footer {
    background-color: black;
    color: white;

    div {
      height: 7rem;

      a {
        height: 4rem;
        width: 4rem;
        border: .1rem solid white;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transition: .3s ease-in-out;
        -o-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
        margin-right: 1.5rem;
        margin-left: 1.5rem;
      }
      a:hover {
        background-color: white;
        [class^="icon-"]:before, [class*=" icon-"]:before {
          color: black;
          transition: .3s ease-in-out;
        }
      }
    }

    p {
      margin: 1rem 0 0 0;
      font-size: 1.3rem;
      color: white;
      background: black;
    }
  }
}

// fontello

@font-face {
  font-family: 'fontello';
  src: url('/../assets/font/fontello.eot?62660128');
  src: url('../assets/font/fontello.eot?62660128#iefix') format('embedded-opentype'),
  url('../assets/font/fontello.svg?62660128#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'fontello';
  src: url('data:application/octet-stream;base64,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') format('woff'),
  url('data:application/octet-stream;base64,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') format('truetype');
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'fontello';
    src: url('../font/fontello.svg?62660128#fontello') format('svg');
  }
}
*/

[class^="icon-"]:before, [class*=" icon-"]:before {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  speak: none;

  font-size: 2rem;
  -webkit-transform: rotate(315deg);
  -ms-transform: rotate(315deg);
  transform: rotate(315deg);
  color: white;

  display: inline-block;
  text-decoration: inherit;
  text-align: center;
  /* opacity: .8; */

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;
}
.icon-mail:before { content: '\e800'; } /* '' */
.icon-github-circled:before { content: '\f09b'; } /* '' */
.icon-linkedin:before { content: '\f0e1'; } /* '' */
@font-face {
  font-family: 'fontello';
  src: url('../assets/font/fontello.eot?99217195');
  src: url('../assets/font/fontello.eot?99217195#iefix') format('embedded-opentype'),
  url('../assets/font/fontello.woff2?99217195') format('woff2'),
  url('../assets/font/fontello.woff?99217195') format('woff'),
  url('../assets/font/fontello.ttf?99217195') format('truetype'),
  url('../assets/font/fontello.svg?99217195#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}
.icon-mail:before { content: '\e800'; } /* '' */
.icon-github-circled:before { content: '\f09b'; } /* '' */
.icon-linkedin:before { content: '\f0e1'; } /* '' */

@media screen and (max-width: 1024px) {
  section#footer-contact article div.left > div {
    width: 80%;
  }
}
@media screen and (max-width: 768px) {
  section#footer-contact article {
    height: 60rem;
  }
  section#footer-contact article div.left > div {
    width: 85%;
  }
  section#footer-contact article div.left,
  section#footer-contact article div.right{
    width: 100%;
  }
}
</style>
