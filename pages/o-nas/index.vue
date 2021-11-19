<template>
  <div class="container my-5">
    <h3>Miłość do <span style="color: #e0b8aa">alpak</span></h3>
    <hr/>
    <p>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus dui a elit pulvinar tristique. Morbi sit
      amet justo in mauris euismod pretium sit amet nec lorem. Praesent commodo vel enim eu ultricies. Aliquam sed
      tortor nisl. Quisque convallis ultricies mi, sed tristique justo malesuada eget. Cras vel enim sed dui hendrerit
      malesuada. Duis laoreet lacus risus, et pretium neque gravida quis.
    <div class="about-flex-number">
      <img class="mr-3" src="~assets/svg/1.svg"/>
      <p class="mb-0">
        <b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus dui a elit pulvinar tristique. Morbi
          sit amet justo in mauris euismod pretium sit amet nec lorem.</b>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus dui a elit pulvinar tristique. Morbi sit
        amet justo in mauris euismod pretium sit amet nec lorem.
      </p>
    </div>
    <div class="about-flex-number mt-4">
      <img class="mr-3" src="~assets/svg/2.svg"/>
      <p class="mb-0">
        <b> Ważni są dla nas ludzie!</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus dui a elit pulvinar tristique. Morbi sit
        amet justo in mauris euismod pretium sit amet nec lorem. Praesent commodo vel enim eu ultricies. Aliquam sed
        tortor nisl. Quisque convallis ultricies mi, sed tristique justo malesuada eget. Cras vel enim sed dui hendrerit
        malesuada. Duis laoreet lacus risus, et pretium neque gravida quis.
      </p>
    </div>
    <div class="about-flex-number mt-4">
      <img class="mr-3" src="~assets/svg/3.svg"/>
      <p class="mb-0">
        <b>Pływają u nas młodsze rodzeństwa dzieci</b>,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus dui a elit pulvinar tristique. Morbi sit
        amet justo in mauris euismod pretium sit amet nec lorem. Praesent commodo vel enim eu ultricies. Aliquam sed
        tortor nisl. Quisque convallis ultricies mi, sed tristique justo malesuada eget. Cras vel enim sed dui hendrerit
        malesuada. Duis laoreet lacus risus, et pretium neque gravida quis.
      </p>
    </div>
    <div class="mt-4">
      <p>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus dui a elit pulvinar tristique. Morbi sit
        amet justo in mauris euismod pretium sit amet nec lorem. Praesent commodo vel enim eu ultricies. Aliquam sed
        tortor nisl. Quisque convallis ultricies mi, sed tristique justo malesuada eget. Cras vel enim sed dui hendrerit
        malesuada. Duis laoreet lacus risus, et pretium neque gravida quis.
        <br class="d-block d-md-none"/>
        <br class="d-block d-md-none"/>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus dui a elit pulvinar tristique. Morbi sit
        amet justo in mauris euismod pretium sit amet nec lorem. Praesent commodo vel enim eu ultricies. Aliquam sed
        tortor nisl. Quisque convallis ultricies mi, sed tristique justo malesuada eget. Cras vel enim sed dui hendrerit
        malesuada. Duis laoreet lacus risus, et pretium neque gravida quis.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus dui a elit pulvinar tristique. Morbi sit
        amet justo in mauris euismod pretium sit amet nec lorem. Praesent commodo vel enim eu ultricies. Aliquam sed
        tortor nisl. Quisque convallis ultricies mi, sed tristique justo malesuada eget. Cras vel enim sed dui hendrerit
        malesuada. Duis laoreet lacus risus, et pretium neque gravida quis.
      </p>
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
      title: 'O nas - Pływanie na zdrowie',
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
