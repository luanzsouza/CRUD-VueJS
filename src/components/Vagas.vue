<template>
<div class="Header">
  <b-container class="bv-example-row">
  <b-row>
    <b-col></b-col>
    <b-col>  <h2>Grand X</h2> </b-col>
    <b-col>  <h6>work</h6>    </b-col>
  </b-row>
</b-container>


  <div class="Body">
    <div >
        <b-navbar type="ligth" variant="ligth">
        <b-navbar-nav>
        <b-dropdown-item class="Color" href="#">Pagina Inicial</b-dropdown-item>
        <b-dropdown-item href="#">Vagas</b-dropdown-item>
        </b-navbar-nav>
        </b-navbar>
    </div>
    <b-container class="bv-example-row">
    <b-row class="text-center">
    <b-col><h1 class="tittle">
          Vagas
      </h1></b-col>
    <b-col cols="5">
      <h3 class="Subtittle">
          Encontre uma posição para trabalhar conosco! =)
      </h3>

      </b-col>
    <b-col>
      </b-col>
      </b-row>
    </b-container>


      <div class="alinhamento">
           <b-navbar type="light" variant="light">
           <b-nav-form>
           <b-input-group  type="light" prepend="BUSCA">
           <b-form-input type="light" placeholder="BUSCAR"></b-form-input>
           </b-input-group>
           </b-nav-form>
           </b-navbar>
    </div >

        <b-button variant="outline-primary">Back End</b-button>
        <b-button variant="outline-secondary">Secondary</b-button>
        <b-button variant="outline-success">React</b-button>
        <b-button variant="outline-danger">GO</b-button>
        <b-button variant="outline-warning">Loren Ipsum</b-button>
        <b-button variant="outline-info">PHP</b-button>
        <b-button variant="outline-dark">Front end</b-button>
    <h6 class="Border">

      <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="transparent linear-gradient(180deg, #FB6340 0%, #FF5933 100%) 0% 0% no-repeat padding-box;"
      img-width="495"
      img-height="448"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://miro.medium.com/max/1400/0*IIN7VBpVe_EEnFfV.png"
      >
      <h1>Programador Junior!</h1>

            <div>
  <b-button v-b-modal.modal-tall>+ Detalhes</b-button>

  <b-modal id="modal-tall" title="Overflowing Content">
    <h1>Descrição</h1>
    <label>Hey! We are looking for a
      junior front-end developer at GrandX!
      We develop web solutions for selected
      clients worldwide and want you to become a part of our growing team.
      In the past 5 years, Carbonaut has built a strong relationship with
      its international clients, and we believe in building close,
      long-term partnerships. We cover all our clients’
      development needs and are proud to have supported them in multiple
      investment rounds. We are currently a team of 7 passionate developers
      and designers who highly value work-life balance,
      wellbeing, and delivering impactful solutions.</label>
      <label>
        At GrandX you can expect to:
        • Develop features for ongoing projects using PHP, GO, and Node.js;
        • Design and develop APIs and databases for our frontend applications;
        • Run performance benchmarking tests;
        • Have direct contact with clients and developers at all levels;
        • Work in a committed team, who will encourage you to take on responsibilities and experiment with ideas, and have an active voice; • Freely combine between remote work and our office in one of the best coworking spaces in downtown Curitiba; • Contribute to impactful non-profit projects; • Define your work schedule; • Enjoy other perks such as health insurance, gym pass, VR (iFood), and financial support for relevant courses and learning material; • Join our virtual happy hours where we play games,
        chat about life and have a good time together. :)
      </label>
  </b-modal>
</div>


      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://coodesh.com/blog/wp-content/uploads/2021/01/template-de-vagas-tech-scaled.jpg">
        <h1>Estagiario Desenvolvedor Backend!</h1>
        <div>
  <b-button v-b-modal.modal-tall>+Detalhes</b-button>

  <b-modal id="modal-tall" title="Overflowing Content">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
</div>
      </b-carousel-slide>

    </b-carousel>
  </div>
      Todos os direitos reservados!
    </h6>
  </div>

</div>

</template>

<script>
 export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
 }
</script>

<style scoped>
.Header {
top: 1000px;
left: 0px;
width: 1920px;
height: 101px;
background: #323433 0% 0% no-repeat padding-box;
border-radius: 0px 0px 20px 20px;
opacity: 1;
color: white;
}
.Body{
top: 0px;
left: 0px;
width: 1920px;
height: 1563px;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
}
.tittle{
top: 1710px;
left: 8901px;
width: 1920px;
height: 68px;
text-align: center;
font: normal normal bold 50px/68px Open Sans;
letter-spacing: -2px;
color: #FB6340;
opacity: 1;
}
.Subtittle{
top: 243px;
left: 754px;
width: 1920px;
height: 24px;
text-align: left;
font: normal normal normal 18px/24px Open Sans;
letter-spacing: 0px;
color: #3A3A3A;
opacity: 0.6;


}
.Navbar{
top: 133px;
left: 255px;
width: 192px;
height: 24px;
text-align: left;
letter-spacing: 0px;
opacity: 1;
}
.Search{
top: 313px;
left: 709px;
width: 534px;
height: 58px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #323433;
border-radius: 7px;
opacity: 1;
}
.Border{
top: 0px;
left: 0px;
width: 1924px;
height: 1000px;
opacity: 0.8;
color: black;
}
.image{
top: 562px;
left: 442px;
width: 495px;
height: 448px;
background: transparent linear-gradient(180deg, #FB6340 0%, #FF5933 100%) 0% 0% no-repeat padding-box;
border-radius: 120px 120px 0px 0px;
opacity: 1;

}
</style>
