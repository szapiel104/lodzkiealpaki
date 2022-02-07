<template>
  <div>
    <div class="container my-5">
      <div class="row px-0 mx-0 mb-5">
        <div class="col-12 col-md-6">
          <div>
            <img src="~assets/img/alpaki_04.jpg" alt="" class="img-fluid"
                 style="border-radius: 10px; max-height: 450px;width: 100%; object-fit: cover;">
          </div>
        </div>
        <div class="col-12 col-md-6 my-auto">
          <h1>Spotkanie <span style="color: #e0b8aa">z alpakami (1 godzina)</span></h1>
          <hr/>
          <p class="mt-3 mb-2">Wyjątkowa godzina z alpakami to:</p>
          <p class="mb-1">- poznanie <a href="https://www.instagram.com/lodzkiealpaki/" target="_blank">@lodzkiealpaki</a></p>
          <p class="mb-1">- karmienie, głaskanie i przytulanie</p>
          <p class="mb-1">- kr&oacute;tki spacer z alpakami po okolicy</p>
          <p class="mb-1">- kawa / herbata w cenie</p>
          <br/>
          <p>
            Jest to Wasza godzina na wyłączność, tylko Wy i <a href="https://www.instagram.com/lodzkiealpaki/" target="_blank">@lodzkiealpaki</a>
          </p>
          <div class="price-box">
            70zł - normalny<br/>
          </div>
          <div class="price-box mt-3">
            50zł - ulgowy<br/>
          </div>
        </div>
      </div>
      <div class="row px-0 mx-0 mb-5">
        <div class="col-12 col-md-6 my-auto">
          <h1>Wizyta alpak <span style="color: #e0b8aa">u Was</span></h1>
          <hr/>
          <p>Możemy odwiedzić Was z alpakami w domu podczas wizyty prywatnej lub na przyjęciu urodzinowym.
            Organizujemy
            również wyjazdy z na spotkania w placówkach edukacyjnych. Napisz do nas, podeślemy Ci ofertę.
            <br/>
            <br/>
            (Spotkanie z alpakami w domu,
            placówkach edukacyjnych)
          </p>
          <div class="price-box">
            od 400 zł <br/>
            (wycena indywidualna)
          </div>
        </div>
        <div class="col-12 col-md-6">
          <img src="~assets/img/alpaki_05.jpg" alt="" class="img-fluid"
               style="border-radius: 10px; max-height: 450px;width: 100%; object-fit: cover;">
        </div>
      </div>
      <div class="row px-0 mx-0 mb-5">
        <div class="col-12 col-md-6">
          <img src="~assets/img/alpaki_02.jpg" alt="" class="img-fluid"
               style="border-radius: 10px; max-height: 450px;width: 100%; object-fit: cover;">
        </div>
        <div class="col-12 col-md-6 my-auto">
          <h1>Ważne, <span style="color: #e0b8aa">pamiętaj</span></h1>
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
      title: 'Oferta - Łódzkie alpaki',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Łódzkie alpaki'
        }
      ],
    }
  }
}
</script>

<style>
@media (min-width: 992px) {
  .about-flex-number {
    display: flex;
    align-items: end;
  }
}

@media (max-width: 992px) {
  .about-flex-number {
    display: flex;
    align-items: center;
  }
}
</style>
