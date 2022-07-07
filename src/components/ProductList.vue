<template>
  <div class="mt-4">
    <div v-if="products.length > 0" class="columns is-multiline is-centered">
      <div
        v-for="product in getProductsFiltered"
        :key="product.code"
        class="column is-3 m-1 is-centered"
      >
        <ProductListItem :data="product" />
      </div>
    </div>
    <div v-else class="column is-centered">
      <h2>Cargando productos</h2>
    </div>
    <ProductListDetailModal :open="modalState" :data="selected" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ProductListItem from "@/components/ProductListItem.vue";
import ProductListDetailModal from "@/components/ProductListDetailModal.vue";
import store from "@/store";
export default {
  name: "ProductList",
  components: {
    ProductListItem,
    ProductListDetailModal,
  },
  data() {
    return {
      modalState: false,
      selected: {},
      filteredProducts: [],
    };
  },
  mounted() {
    store.dispatch("productsModule/getProducts");
    // const a = store.getters["productsModule/getFilteredProducts"];
  },
  computed: {
    ...mapState("productsModule", ["products"]),
    ...mapGetters({
      getProductsFiltered: "productsModule/getFilteredProducts",
    }),
  },

  methods: {
    setModalState() {
      this.modalState = !this.modalState;
    },
  },
};
</script>

<style>
</style>