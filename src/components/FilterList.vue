<template>
  <div class="mt-4 ml-2">
    <article class="panel is-info">
      <p class="panel-heading">Categorias</p>
      <div v-if="filters.length > 0">
        <div
          class="panel-block is-flex is-flex-direction-column is-align-items-flex-start"
          v-for="filter in filters"
          :key="filter.id"
        >
          <FilterListItem :data="filter" />
        </div>
      </div>
      <div v-else class="column is-centered">
        <h2>Cargando filtros</h2>
      </div>
    </article>
  </div>
</template>




<script>
import { mapState } from "vuex";
import store from "@/store";
import FilterListItem from "@/components/FilterListItem.vue";
export default {
  name: "FilterList",
  components: {
    FilterListItem,
  },
  computed: {
    ...mapState("productsModule", ["filters"]),
  },
  async mounted() {
    await store.dispatch("productsModule/getFilterTypes");
  },
};
</script>

<style>
.panel-block {
  width: 100%;
}
</style>