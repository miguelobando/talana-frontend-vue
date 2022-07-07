<template>
  <div class="is-flex is-align-items-flex-start is-flex-direction-column">
    <figure class="image is-centered">
      <img
        :src="data.photo"
        class="photo"
        alt="product photo"
        @click="openModal"
      />
    </figure>
    <p class="mt-2 mb-2">
      <BaseText :fullname="data.name" />
    </p>
    <p class="mt-2 mb-2">Precio: {{ data.price }}</p>
    <BaseAmountSelector :data="data" :icon="true" />
  </div>
</template>

<script>
import BaseText from "@/components/BaseText.vue";
import BaseAmountSelector from "@/components/BaseAmountSelector.vue";
export default {
  name: "ProductListItem",
  components: {
    BaseText,
    BaseAmountSelector,
  },
  props: {
    data: Object,
  },
  methods: {
    openModal() {
      this.$parent.selected = this.data;
      this.$parent.setModalState();
    },
  },
};
</script>

<style scoped>
.photo {
  min-height: 16rem;
  max-height: 16rem;
  min-width: 12rem;
  max-width: 12rem;
  cursor: pointer;
}
</style>