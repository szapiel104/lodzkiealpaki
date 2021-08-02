<template>
  <!-- Footer -->
  <div class="footer-container mt-5">
    <div class="container">
        <div class="footer-copyright text-center py-3">
          <p class="mb-1 font-weight-bold">Pływanie na Zdrowie</p>
          &copy; {{ timestamp }} Created by: <a href="#"> SuroCrave </a>
        </div>
    </div>
  </div>
  <!-- Footer -->
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      timestamp:"",
    }
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  watch: {
    '$route'() {
      this.isOpenMobile = false;
    }
  },
  computed: {},
  methods: {
    getNow: function() {
      const today = new Date();
      const date = today.getFullYear();
      this.timestamp = date;
    }
  },

}
</script>

<style scoped>
.footer-container {
  background-color: #37517e !important;
  color: white;
}
.footer-container a{
  color: #47b2e4;
}

</style>
