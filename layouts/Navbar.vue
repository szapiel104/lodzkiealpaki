<template>
  <div style="height: 70px">
    <b-navbar toggleable="lg" type="dark" variant="" fixed="top" class="navbar-bar">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse class="container" id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
          <b-nav-item to="/onas" exact exact-active-class="active">O Nas</b-nav-item>
          <b-nav-item to="/harmonogram" exact exact-active-class="active">Harmonogram</b-nav-item>
          <b-nav-item to="/kontakt" exact exact-active-class="active">Kontakt</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!--      <b-navbar-nav class="ml-auto">-->
        <!--        <b-nav-form>-->
        <!--          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
        <!--          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
        <!--        </b-nav-form>-->

        <!--        <b-nav-item-dropdown text="Lang" right>-->
        <!--          <b-dropdown-item href="#">EN</b-dropdown-item>-->
        <!--          <b-dropdown-item href="#">ES</b-dropdown-item>-->
        <!--          <b-dropdown-item href="#">RU</b-dropdown-item>-->
        <!--          <b-dropdown-item href="#">FA</b-dropdown-item>-->
        <!--        </b-nav-item-dropdown>-->

        <!--        <b-nav-item-dropdown right>-->
        <!--          &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
        <!--          <template #button-content>-->
        <!--            <em>User</em>-->
        <!--          </template>-->
        <!--          <b-dropdown-item href="#">Profile</b-dropdown-item>-->
        <!--          <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
        <!--        </b-nav-item-dropdown>-->
        <!--      </b-navbar-nav>-->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {}
  },
  watch: {
    '$route'() {
      this.isOpenMobile = false;
    }
  },
  computed: {},
  methods: {},

}
</script>

<style scoped>

.navbar-bar {
  background: rgba(40, 58, 90, 0.9);
  color: #000;
  box-shadow: 0 0 3px rgba(0,0,0,.2);
}
.navbar-dark .navbar-nav .nav-link{
  border-top: 3px solid rgba(0,0,0,0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  transition: 0.3s;
}
.navbar-dark .navbar-nav .nav-link:hover,
.nuxt-link-active{
  border-top: 3px solid #47b2e4 !important;
}

.navbar-dark .navbar-toggler{
  background-color: #000;
}
.navbar-toggler-icon{
  color: #fff;
}

</style>
