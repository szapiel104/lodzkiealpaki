<template>
  <div class="container mt-4">
    <iframe src="https://calendar.google.com/calendar/embed?src=eijv0hh4gkr8oi1bspr1qrduug%40group.calendar.google.com&ctz=Europe%2FWarsaw" style="border: 0" width="100%" height="800" frameborder="0" scrolling="no"></iframe>
  </div>
</template>

<script>
export default {
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
