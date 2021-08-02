<template>
  <div class="container">
    <div>
      <Logo/>
      <h1 class="title">
        Pływnie na zdrowie
      </h1>
      <h3 class="subtitle">
        Strona w budowie!
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Pływanie na zdrowie - Strona w budowie',
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media (max-width: 992px) {
  .title {
    font-size: 50px;
  }

  .subtitle {
    font-size: 20px;
  }
}

@media (min-width: 993px) {
  .title {
    font-size: 100px;
  }

  .subtitle {
    font-size: 42px;
  }
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

p {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  color: #526488;
}

.links {
  padding-top: 15px;
}
</style>
