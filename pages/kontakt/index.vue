<template>
  <div class="container mt-4">
    <!-- modify this form HTML and place wherever you want your form -->
    <div class="row">

      <div class="col-12 col-md-7 col-lg-push-3">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfy9sffR-lOEcVqFFZAkXB6QvRlXzz3hmolF9i473qI1Qjpgg/viewform?embedded=true"
          width="100%" height="1050" frameborder="0" marginheight="0" marginwidth="0">Ładuję…
        </iframe>
      </div>
      <div class="col-12 col-md-5 mt-5 mb-5 col-lg-pull-9">
        <b-card>
          <h1>Łódzkie alpaki</h1>
        </b-card>
        <b-card class="mt-5">
          <b>Telefon</b><br/> +48 000 000 000
          <br/>
          <br/>
          <b>E-mail</b><br/> loremipsum@lorem.pl
        </b-card>
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
      title: 'Kontakt - Pływanie na zdrowie',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Pływanie na zdrowie'
        }
      ],
    }
  }
}
</script>
