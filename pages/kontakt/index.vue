<template>
  <div class="container mt-2 mt-lg-5">
    <!-- modify this form HTML and place wherever you want your form -->
    <div class="row">
      <div class="col-12">
        <br/>
        <h3>Łódzkie alpaki - kontakt</h3>
        <hr/>
        <br/>
      </div>
      <div class="col-12 col-md-6 mt-1 mt-lg-6 mb-2">
        <b-card>
          <b>Telefon</b><br/> +48 515 605 345
          <br/>
          <br/>
          <b>Adres</b><br/>
          ul. Wspólna 12A,<br/> Ksawerów - 1,5 km od Ikea
          <br/>
          <br/>
          <b>E-mail</b><br/> lodzkiealpaki@gmail.com
          <br/>
          <br/>
          <p>Możesz do nas dojechać Łódzkim MPK - bez zmiany strefy na podmiejską 😀</p>
          <p>Napisz do nas na Instagramie lub Facebook.</p>
        </b-card>
      </div>
      <div class="col-12 col-md-6 mt-lg-6 mb-2">
        <img src="~assets/img/alpaki_06.jpg" alt="" class="img-fluid"
             style="border-radius: 10px; max-height: 387px;width: 100%; object-fit: cover;">
      </div>
      <div class="col-12">
        <br/>
        <br/>
        <h3>Jak dojechać?</h3>
        <hr/>
      </div>
      <div class="col-12 mt-3 mb-5">
        <!--        <iframe-->
        <!--          src="https://docs.google.com/forms/d/e/1FAIpQLSfy9sffR-lOEcVqFFZAkXB6QvRlXzz3hmolF9i473qI1Qjpgg/viewform?embedded=true"-->
        <!--          width="100%" height="1250" frameborder="0" marginheight="0" marginwidth="0">Ładuję…-->
        <!--        </iframe>-->
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
</template>

<script>
import Lorem from '@/components/Lorem';

export default {
  components: {
    Lorem,
  },
  head() {
    return {
      title: 'Skontaktuj się z nami',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Potrzebujesz wsparcia? Po prostu wybierz temat kontaktu i skorzystaj z formularza kontaktowego, zadzwoń lub przyjedź do nas.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Spotkanie z alpakami, głaskanie alpak, godzina z alpakami, alpaki w łodzi, łódzkie alpaki, lodz alpaki, alpaki dla dzieci, spotkanie z alpakami dla dzieci, alpaki cudowne'
        },
        {hid: 'og:title', name: 'og:title', content: 'Skontaktuj się z nami'},
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Potrzebujesz wsparcia? Po prostu wybierz temat kontaktu i skorzystaj z formularza kontaktowego, zadzwoń lub przyjedź do nas.'
        },

      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://lodzkiealpaki.pl' + this.$route.path
        }
      ]
    }
  }
}
</script>

<style scoped>
#map-wrap {
  height: 600px;
}

.vue2leaflet-map {
  border-radius: 20px;
}

@media (max-width: 992px) {
  #map-wrap {
    height: 320px;
  }
}
</style>
