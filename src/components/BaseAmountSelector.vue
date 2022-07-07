<template>
  <div class="is-flex">
    <button @click="remove">-</button>
    <input
      class="input smaller"
      :value="getAmountOfProduct(data.code)"
      type="text"
    />
    <button @click="add">+</button>
    <div v-if="icon">
      <button class="button is-blue is-centered ml-1" @click="openParentModal">
        <font-awesome-icon class="ml-2" icon="fa-solid fa-cart-plus" />
      </button>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faCartPlus);
// import store from "@/store";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BaseAmountSelector",
  components: {
    FontAwesomeIcon,
  },
  props: {
    data: Object,
    icon: Boolean,
  },
  computed: {
    ...mapGetters("cartModule", ["getAmountOfProduct"]),
  },
  methods: {
    ...mapActions({
      addProduct: "cartModule/addProduct",
      removeProduct: "cartModule/removeProduct",
    }),
    add() {
      this.addProduct(this.data);
    },
    remove() {
      this.removeProduct(this.data);
    },
    openParentModal() {
      this.$parent.openModal();
    },
  },
};
</script>

<style scoped>
.smaller {
  width: 30%;
  margin-left: 10px;
  margin-right: 10px;
}
</style>