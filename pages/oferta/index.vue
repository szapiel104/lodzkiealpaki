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
<!--          <div class="price-box mb-2">-->
<!--            1-2 osoby: 200 zł<br/>-->
<!--          </div>-->
<!--          <div class="price-box mb-2">-->
<!--            powyżej 2 osób: 40zł od osoby <br/>-->
<!--          </div>-->
<!--          <div class="price-box mb-2">-->
<!--            dzieci do 1 roku bezpłatnie-->

<!--          </div>-->

            <div class="card  mb-3 box-shadow" style="width: 100%;">
              <div class="card-header font-weight-bold">Cennik</div>
              <div class="card-body">
                <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                </svg> 1-2 osoby: 200 zł za całe spotkanie</p>
                <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                </svg> powyżej 2 osób: każda kolejna 40 zł od osoby</p>
                <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                </svg> dzieci do 1 roku: BEZPŁATNIE</p>
              </div>
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
          <div class="card mb-3 box-shadow" style="width: 100%;">
            <div class="card-header font-weight-bold">Cennik</div>
            <div class="card-body">
              <p class="card-text"> od 400 zł (wycena indywidualna)</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mt-4 mt-lg-0">
          <img src="~assets/img/alpaki_03.jpg" alt="" class="img-fluid"
               style="border-radius: 10px; max-height: 472px;width: 100%; object-fit: cover;">
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
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Łódzkie alpaki - głaskanie, przytulanie, spacery i alpakoterapia'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Poznaj wyjątkowe łódzkie alpaki. Lenek, Puszkin, Vito i Draco. Spotkaj się z nami na miejscu, w domu lub w placówce edukacyjnej!'
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
.box-shadow{
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 5%);;
}
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
