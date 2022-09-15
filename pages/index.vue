<template>
  <div>
<!--    <div style="background: grey; width: 100%; height: 500px;">-->
<!--      <div class="bg-norepeat" style="background-image: url('_nuxt/assets/img/alpaki_03.jpg');">-->
<!--        <div class="container">-->
<!--          <h1>aaa</h1>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="container">
      <div class="row my-3 my-lg-5 d-flex justify">
        <div class="col-12 col-md-6">
          <img src="~assets/img/alpaki_07.jpg"
               alt="Lodzkie Alpaki" class="img-alpak img-fluid"
               style="">
        </div>
        <div class="col-12 col-md-6 my-lg-auto mt-4 mt-lg-0">
          <h1>Łódzkie alpaki</h1>
          <p class="content-text">to Lenek, Puszkin, Vito i Draco - cztery wyjątkowe alpaki. <br
            class="d-none d-lg-block"/>
            Spotkaj się z nami na miejscu, w domu lub w placówce edukacyjnej!</p>
          <div class="row">
            <div class="col-12 col-md-4">
              <b-button size="sm" class="my-2 a-link-btn normal" type="primary" variant="primary" to="/oferta">
                <span class="mr-1">Oferta</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                     class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
              </b-button>
            </div>
            <div class="col-12 col-md-4">
              <b-button size="sm" class="my-2 a-link-btn white" type="primary" variant="primary" to="/kontakt">
                <span class="mr-1">Kontakt</span>
              </b-button>
            </div>
          </div>

        </div>
      </div>
      <div class="row my-5 d-flex justify">
        <div class="col-12">
          <h1 class="mb-3">Znajdź nas</h1>
          <div id="map-wrap">
            <no-ssr>
              <l-map :zoom=13 :center="[51.6932394,19.4031224]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker :lat-lng="[51.6932394,19.4031224]">
                  <l-popup><a
                    href="https://www.google.pl/maps/place/%C5%81%C3%B3dzkie+Alpaki/@51.6931712,19.4030835,330m/data=!3m1!1e3!4m5!3m4!1s0x471a35c96214d0ab:0xca361ba8136eaef1!8m2!3d51.6931494!4d19.4029914"
                    target="_blank" rel=”nofollow”>Przejdź do lokalizacji</a></l-popup>
                </l-marker>
              </l-map>
            </no-ssr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      // center: {lat: 51.6054142, lng: 19.4996098},
      // markers:[
      //   {
      //     position: {lat: 10.0, lng: 10.0}
      //   },
      //   {
      //     position: {lat: 10.0, lng: 10.0}
      //   }
      // ]
    }
  },
  head() {
    return {
      title: 'Łódzkie alpaki - głaskanie, przytulanie, spacery i alpakoterapia',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Poznaj wyjątkowe łódzkie alpaki. Lenek, Puszkin, Vito i Draco. Spotkaj się z nami na miejscu, w domu lub w placówce edukacyjnej!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'łódzki alpaki, alpaki głaskanie, alpakoterapia, alpaki, terapia, alpaki wojewódstwo łódzkie, alpaki cudowne, cudaki alpaki, wspaniałe alpaki'
        },
        { hid: 'og:title', name: 'og:title', content: 'Łódzkie alpaki - głaskanie, przytulanie, spacery i alpakoterapia' },
        { hid: 'og:description', name: 'og:description', content: 'Poznaj wyjątkowe łódzkie alpaki. Lenek, Puszkin, Vito i Draco. Spotkaj się z nami na miejscu, w domu lub w placówce edukacyjnej!' },
        { hid: 'og:image', name: 'og:image', content: 'https://lodzkiealpaki.pl/alpaki_07.jpg' },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://lodzkiealpaki.pl/'
        }
      ]
    }
  },


}
</script>
<style scoped>
#map-wrap{
  height: 600px;
}
@media(max-width: 992px){
  #map-wrap{
    height: 320px;
  }
}
.leaflet-popup-content-wrapper {
}
</style>
