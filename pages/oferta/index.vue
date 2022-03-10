<template>
  <div>
    <div class="container my-3 my-lg-5">
      <div class="row px-0 mx-0 mb-5">
        <div class="col-12 mt-3">
          <h1>Łódzkie alpaki - cennik</h1>
          <hr/>
          <br class="d-none d-lg-block"/>
        </div>
        <div class="col-12 col-md-6">
          <div>
            <img src="~assets/img/alpaki_04.jpg" alt="" class="img-fluid"
                 style="border-radius: 10px; max-height: 450px;width: 100%; object-fit: cover;">
          </div>
        </div>
        <div class="col-12 col-md-6 my-lg-auto mt-4 mt-lg-0">
          <h3>Godzina <span style="color: #e0b8aa">z alpakami</span></h3>
          <hr/>
          <p class="mt-3 mb-2">Wyjątkowa godzina z alpakami to:</p>
          <p class="mb-1">- poznanie <a href="https://www.instagram.com/lodzkiealpaki/"
                                        target="_blank">@lodzkiealpaki</a></p>
          <p class="mb-1">- karmienie, głaskanie i przytulanie</p>
          <p class="mb-1">- kr&oacute;tki spacer z alpakami po okolicy</p>
          <p class="mb-1">- kawa / herbata w cenie</p>
          <br/>
          <p>
            Jest to Wasza godzina na wyłączność, tylko Wy i <a href="https://www.instagram.com/lodzkiealpaki/"
                                                               target="_blank">@lodzkiealpaki</a>
          </p>
          <div class="price-box">
            70 zł - osoba dorosła<br/>
          </div>
          <div class="price-box mt-3">
            50 zł - dziecko<br/>
          </div>
        </div>
      </div>
      <div class="row px-0 mx-0 mb-5">
        <div class="col-12 col-md-6 my-lg-auto mt-4 mt-lg-0">
          <h3>Wizyta alpak <span style="color: #e0b8aa">u Was</span></h3>
          <hr/>
          <p>Możemy odwiedzić Was z alpakami w domu podczas wizyty prywatnej lub na przyjęciu urodzinowym.
            Organizujemy
            również wyjazdy na spotkania w placówkach edukacyjnych. Napisz do nas, podeślemy Ci ofertę.
            <br/>
            <br/>
          </p>
          <div class="price-box">
            od 400 zł <br/>
            (wycena indywidualna)
          </div>
        </div>
        <div class="col-12 col-md-6 mt-4 mt-lg-0">
          <img src="~assets/img/alpaki_03.jpg" alt="" class="img-fluid"
               style="border-radius: 10px; max-height: 450px;width: 100%; object-fit: cover;">
        </div>
      </div>
      <div class="row px-0 mx-0 mb-5">
        <div class="col-12 col-md-6">
          <img src="~assets/img/alpaki_02.jpg" alt="" class="img-fluid"
               style="border-radius: 10px; max-height: 450px;width: 100%; object-fit: cover;">
        </div>
        <div class="col-12 col-md-6 my-lg-auto mt-4 mt-lg-0">
          <h3>Ważne, <span style="color: #e0b8aa">pamiętaj</span></h3>
          <hr/>
          <p>- Płatność na miejscu got&oacute;wką lub blikiem. W przypadku deszczu lub silnego wiatru spotkanie zostaje
            odwołane.</p>
          <p>- Możemy zobaczyć się tylko po wcześniejszej rezerwacji terminu&nbsp;</p>
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
      title: 'Odkryj nasze pakiety spotkań - Łódzkie alpaki',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Możemy odwiedzić Was z alpakami w domu podczas wizyty prywatnej, na przyjęciu urodzinowym lub zapraszamy do nas! Znajdziesz u nas bogaty pakiet spotkań. Nasz cennik.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Spotkanie z alpakami, cennik głaskanie alpak, godzina z alpakami, alpaki w łodzi, łódzkie alpaki, lodz alpaki, alpaki dla dzieci, spotkanie z alpakami dla dzieci, alpaki cudowne'
        },
        { hid: 'og:title', name: 'og:title', content: 'Łódzkie alpaki - głaskanie, przytulanie, spacery i alpakoterapia' },
        { hid: 'og:description', name: 'og:description', content: 'Poznaj wyjątkowe łódzkie alpaki. Lenek, Puszkin, Vito i Draco. Spotkaj się z nami na miejscu, w domu lub w placówce edukacyjnej!' },
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

<style scoped>
@media (min-width: 992px) {
  .about-flex-number {
    display: flex;
    align-items: center;
  }
}

@media (max-width: 992px) {
  .about-flex-number {
    display: flex;
    align-items: center;
  }
}
</style>
