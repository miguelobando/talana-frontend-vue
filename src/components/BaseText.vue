<template>
  <div class="tooltip">
    {{ fullname | shortener }}
    <span class="tooltiptext"> {{ fullname }} </span>
  </div>
</template>

<script>
export default {
  name: "BaseText",
  props: {
    fullname: String,
  },
  filters: {
    shortener: function (value) {
      if (value.length > 25) {
        return `${value.slice(0, 25)} ...`;
      } else {
        return value;
      }
    },
  },
};
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>