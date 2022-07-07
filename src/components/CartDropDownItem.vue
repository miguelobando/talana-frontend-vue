<template>
  <div class="dropdown-item">
    <div class="columns">
      <div class="column">
        <p>{{ data.name }}</p>
        <p>Precio: {{ data.price }}</p>
      </div>
      <div class="column">
        <DropDownAmountSelector :data="data" />
      </div>
      <div class="column">
        <p>Subtotal {{ data.price * data.amount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import DropDownAmountSelector from "@/components/DropDownAmountSelector.vue";
export default {
  name: "CartDropDownItem",
  props: {
    data: Object,
  },
  components: {
    DropDownAmountSelector,
  },
};
</script>

<style>
.wider {
  width: 50%;
}
</style>