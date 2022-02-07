<template>
  <div class="container my-5">
    <h1>Miłość do <span style="color: #e0b8aa">alpak</span></h1>
    <hr/>
    <p>
      Łódzkie Alpaki to Lenek, Puszkin, Vito i Draco - cztery wyjątkowe alpaki. Dlaczego wyjątkowe?
    <div class="about-flex-number">
      <img class="mr-3" src="~assets/svg/1.svg"/>
      <p class="mb-2">
        <b>Tworząc</b> nasze stado postawiliśmy na jakość zwierząt.
      </p>
    </div>
    <div class="about-flex-number mt-4">
      <img class="mr-3" src="~assets/svg/2.svg"/>
      <p class="mb-2">
        <b>Nasze</b> chłopaki to alpaki wyselekcjonowane z bardzo dobrych, polskich hodowli, z predyspozycjami do pracy z ludźmi.
      </p>
    </div>
    <div class="about-flex-number mt-4">
      <img class="mr-3" src="~assets/svg/3.svg"/>
      <p class="mb-2">
        <b>Nie </b>każda alpaka nadaje się na ludzkiego towarzysza.
      </p>
    </div>
    <div class="mt-4" >

      <div class="row my-5">
        <div class="col-12 col-md-6">
          <img src="~assets/img/alpaki_02.jpg" alt="" class="img-fluid"
               style="border-radius: 10px; max-height: 450px;width: 100%; object-fit: cover;">
        </div>
        <div class="col-12 col-md-6">
          <h2 class="mt-5">Nasza misja</h2>
          <hr/>
          Sprawić, by ludzie dużo się uśmiechali. &#128512;<br/>
          Uśmiech to ogromna energia.
          <br >
          <br/>
          <p>
            Odpowiednio przeprowadzona socjalizacja i czas, <br class="d-none d-lg-block"/>który wciąż poświęcamy chłopakom przygotował ich do spotkań z Wami.
          </p>
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
      title: 'O nas - Łódzkie alpaki',
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
