<template>
  <a
    class="panel-block"
    :class="{ 'is-active': isSelected }"
    @click="selectFilter(data)"
  >
    <div class="is-flex">
      <p>{{ data.name }}</p>
      <span class="pt-1">
        <font-awesome-icon class="ml-2" icon="fa-solid fa-angle-right" />
      </span>
    </div>
  </a>
</template>


<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleRight);
import store from "@/store";
export default {
  name: "FilterListItem",
  props: {
    data: Object,
  },
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    selectFilter(arg) {
      this.isSelected = !this.isSelected;
      store.commit("productsModule/setFiltersSelected", arg);
    },
  },
};
</script>

<style>
.panel-block {
  width: 100%;
}
</style>