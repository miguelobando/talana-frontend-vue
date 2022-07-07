<template>
  <div class="dropdown is-right" :class="{ 'is-active': active }">
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="openMenu"
      >
        <!-- <span>Right aligned</span> -->
        <span class="icon is-large">
          <font-awesome-icon icon="fa-solid fa-shopping-bag" />
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div v-if="cart.length > 0">
        <div
          class="dropdown-content"
          v-for="item in getProductsFromCart"
          :key="item.code"
        >
          <CartDropDownItem :data="item" />
          <hr class="dropdown-divider" />
        </div>
      </div>
      <div v-else class="dropdown-content">
        <p>No hay productos todavía</p>
      </div>
    </div>
  </div>
</template>

<script>
//         <font-awesome-icon class="mr-10" icon="fa-solid fa-shopping-bag" />

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingBag);
import { mapGetters, mapState } from "vuex";
import CartDropDownItem from "@/components/CartDropDownItem.vue";

export default {
  name: "CartDropdown",
  components: {
    FontAwesomeIcon,
    CartDropDownItem,
  },
  computed: {
    ...mapGetters("cartModule", ["getProductsFromCart"]),
    ...mapState("cartModule", ["cart"]),
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    openMenu() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.button {
  border-color: none;
}
</style>