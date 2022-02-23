<template>
  <div class="container mt-2 mt-lg-4">
    <!-- modify this form HTML and place wherever you want your form -->
    <div class="row">
      <div class="col-12 col-md-5 mt-2 mt-lg-5 mb-2 col-lg-pull-9">
        <img src="~assets/img/alpaki_06.jpg" alt="" class="img-fluid"
             style="border-radius: 10px; max-height: 350px;width: 100%; object-fit: cover;">

        <b-card class="mt-3">
          <b>Telefon</b><br/> +48 515 605 345
          <br/>
          <br/>
          <b>Adres</b><br/>
          ul. Wspólna 12A,<br/> Ksawerów -  1,5km od Ikei.
          <br/>
          <br/>
          <b>E-mail</b><br/> lodzkiealpaki@gmail.com
          <br/>
          <br/>
          <p>Możesz do nas dojechać Łódzkim MPK - bez zmiany strefy na podmiejską 😀</p>
        </b-card>
      </div>
      <div class="col-12 col-md-7 col-lg-push-3 mt-3">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfy9sffR-lOEcVqFFZAkXB6QvRlXzz3hmolF9i473qI1Qjpgg/viewform?embedded=true"
          width="100%" height="1150" frameborder="0" marginheight="0" marginwidth="0">Ładuję…
        </iframe>
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
        { hid: 'og:title', name: 'og:title', content: 'Skontaktuj się z nami' },
        { hid: 'og:description', name: 'og:description', content: 'Potrzebujesz wsparcia? Po prostu wybierz temat kontaktu i skorzystaj z formularza kontaktowego, zadzwoń lub przyjedź do nas.' },

      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://lodzkiealpaki.pl/' + this.$route.path
        }
      ]
    }
  }
}
</script>
