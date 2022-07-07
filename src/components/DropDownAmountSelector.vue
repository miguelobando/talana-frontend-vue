<template>
  <div class="columns">
    <div class="column">
      <button @click="remove">-</button>
    </div>
    <div class="column">
      <input
        class="customInput"
        :value="getAmountOfProduct(this.data.code)"
        type="text"
      />
    </div>
    <div class="column">
      <button @click="add">+</button>
    </div>
  </div>
</template>

<script>
// import store from "@/store";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DropDownAmountSelector",

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
.customInput {
  width: 30px;
}
</style>