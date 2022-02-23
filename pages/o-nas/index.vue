<template>
  <div class="container my-3 my-lg-5">
    <div class="mt-4">
      <div class="row my-3 my-lg-5">
        <div class="col-12 col-md-6">
          <img src="~assets/img/alpaki_02.jpg" alt="" class="img-fluid"
               style="border-radius: 10px; max-height: 450px;width: 100%; object-fit: cover;">
        </div>
        <div class="col-12 col-md-6">
          <h2 class="mt-5">Nasza misja</h2>
          <hr/>
          Sprawić, by ludzie dużo się uśmiechali. &#128512;<br/>
          Uśmiech to ogromna energia.
          <br>
          <br/>
          <p>
            Odpowiednio przeprowadzona socjalizacja i czas, <br class="d-none d-lg-block"/>który wciąż poświęcamy
            chłopakom przygotował ich do spotkań z Wami.
          </p>
        </div>
      </div>
    </div>

    <!--Milosc do alpak-->
    <div>
      <div class="text-left text-lg-center">
        <h1>O<span style="color: #e0b8aa"> nas</span></h1>
        <p style="color:#7e7e7e;">Łódzkie Alpaki to Lenek, Puszkin, Vito i Draco - cztery wyjątkowe alpaki. Dlaczego
          wyjątkowe?</p>
      </div>
      <hr/>
      <p class="text-left text-lg-center">Tworząc nasze stado postawiliśmy na jakość zwierząt. Nasze chłopaki to alpaki wyselekcjonowane z bardzo
        dobrych, polskich hodowli, z
        predyspozycjami do pracy z
        ludźmi. Odpowiednio przeprowadzona socjalizacja i czas, który wciąż poświęcamy chłopakom
        przygotował ich do spotkań z Wami.</p>

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
      title: 'Poznaj nas bliżej - Łódzkie alpaki',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Tworząc nasze stado postawiliśmy na jakość zwierząt. Nasze chłopaki to alpaki wyselekcjonowane z bardzo dobrych, polskich hodowli, z predyspozycjami do pracy z ludźmi. '
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Spotkanie z alpakami, głaskanie alpak, godzina z alpakami, alpaki w łodzi, łódzkie alpaki, lodz alpaki, alpaki dla dzieci, spotkanie z alpakami dla dzieci, alpaki cudowne'
        },
        { hid: 'og:title', name: 'og:title', content: 'Poznaj nas bliżej - Łódzkie alpaki' },
        { hid: 'og:description', name: 'og:description', content: 'Tworząc nasze stado postawiliśmy na jakość zwierząt. Nasze chłopaki to alpaki wyselekcjonowane z bardzo dobrych, polskich hodowli, z predyspozycjami do pracy z ludźmi.' },
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
.card {
  border-radius: 10px;
}

@media (min-width: 992px) {
  .about-flex-number {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .card {
    max-width: 18rem !important;
  }
}

@media (max-width: 992px) {
  .about-flex-number {
    display: block;
    align-items: center;

  }

  .card {
    width: 100%;
  }
}
</style>
