<template>
  <div class="navbar-pos">
    <b-navbar toggleable="lg" class="navbar-box px-3 px-lg-0" fixed="top">
      <div class="container">
        <b-navbar-brand to="/">
          <img class="logo-navbar p-4" src="~assets/img/lodzkie_alpaki_img.png"/>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto my-3 my-lg-0">
            <b-nav-item class="a-link-menu" to="/">Strona główna</b-nav-item>
            <b-nav-item class="a-link-menu" to="/o-nas">O nas</b-nav-item>
            <b-nav-item class="a-link-menu" to="/kontakt">Kontakt</b-nav-item>
            <b-nav-item class="my-3 my-lg-2 ml-lg-3 a-link-btn a-link-menu"
                      to="/oferta">
              <span class="" style="color: white !important;">Oferta</span>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
<style lang="scss">
.logo-navbar {
  max-width: 150px;
  @media(max-width: 992px){
    max-width: 105px;
    padding-left: 0 !important;
  }
  position: absolute;
  top: -17px;
}
.a-link-btn .nav-link{
  width: 100%;
  text-align: center;
}
.navbar-pos {
  height: 80px;
}

.navbar-box {
  @media(min-width: 992px) {
    .navbar-nav {
      display: flex;
      align-items: center;
    }
  }
  background-color: #fff !important;
  border-bottom: 1px solid #f2f6fc;
  padding: 1.5rem 0;

  .a-link-menu a {
    font-size: 17px;
    @media(min-width: 992px) {
      font-weight: 500;
    }
    @media(max-width: 992px) {
      font-weight: 400;
      padding: 0 !important;
      line-height: 45px;
    }
    color: rgba(0, 0, 0, .8);

    &:hover {
      color: rgb(223, 181, 166) !important;
    }

    display: block;
    padding: 0 1rem !important;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }

  .nuxt-link-exact-active {
    color: rgb(223, 181, 166) !important;
  }
}

@media(max-width: 992px) {
  #nav-collapse {
    position: absolute;
    width: 100%;
    top: 87px;
    background: white;
    left: 0px;
    padding: 0 20px;
    border-bottom: 2px solid rgb(223, 181, 166);
  }
}
</style>
