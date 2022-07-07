|<template>
  <div class="navbarcustom">
    <div class="is-flex is-justify-content-space-between">
      <div>
        <img src="@/assets/logo.png" class="ml-2" width="50" />
      </div>
      <div class="mr-2 mt-2">
        <CartDropdown />
      </div>
    </div>
  </div>
</template>

<script>
import CartDropdown from "@/components/CartDropdown.vue";
export default {
  name: "BaseHeader",
  components: {
    CartDropdown,
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    });
  },
};
</script>

<style scoped>
.navbarcustom {
  border-bottom: solid 1px black;
}
</style>