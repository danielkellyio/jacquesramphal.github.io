<template>
  <div class="">
    <Container class="grid-parent">
      <span id="values">
        <ul tabIndex="0">
          <li class="label subtle"><p>Role</p></li>
          <li class="value"><p>UI Designer/Developer</p></li>
        </ul>
        <ul tabIndex="0">
          <li class="label subtle"><p>Type</p></li>
          <li class="value"><p>Proof of Concept</p></li>
        </ul>
        <ul tabIndex="0">
          <li class="label subtle"><p>Year</p></li>
          <li class="value"><p>2020-2021</p></li>
        </ul>
      </span>
      <span id="info">
        <h4 style="font-weight: var(--font-medium);" tabIndex="0">
          {{ description }}
        </h4></span
      >
    </Container>
  </div>
</template>

<script>
import Container from "@/components/grid/Container.vue";

export default {
  name: "DetailCard2",
  components: {
      Container,
  },
  props: {
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  },
};
</script>

<style scoped>
* {
  color: inherit;
}
.container {
  /*  padding-top: 4rem !important;
  padding-bottom: 9.6rem !important; */
}
#details {
  /* height: 100vh; */
}
#values {
  grid-column: 1 / 4;
}
#info {
  grid-column: 1 / 4;
  padding: 0;
}

#info > h4 {
  margin-bottom: 0.8em !important;
}
ul {
  margin-bottom: 2rem;
}
/* ------------ BREAKPOINT MD ------------ */
@media only screen and (min-width: 740px) {
  #values {
    grid-column: 1 / 1;
  }
  #info {
    grid-column: 1 / 4;
  }
  h4 {
    margin-top: -1rem;
  }

  /* ------------ BREAKPOINT LG ------------ */
  @media only screen and (min-width: 1201px) {
    #values {
      grid-row: 1 / 3;
    }
    #info {
      grid-column: 2 / 4;
    }
    .container {
    }
  }
}
</style>
