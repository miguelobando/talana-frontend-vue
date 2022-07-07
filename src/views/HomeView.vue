<template>
  <div class="home">
    <BaseHeader />
    <div class="columns">
      <div class="column is-one-quarter is-multiline">
        <FilterList />
      </div>
      <div class="column">
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import ProductList from "@/components/ProductList.vue";
import FilterList from "@/components/FilterList.vue";
export default {
  name: "HomeView",
  components: {
    BaseHeader,
    ProductList,
    FilterList,
  },
};
</script>
