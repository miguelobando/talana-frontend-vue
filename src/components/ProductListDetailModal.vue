<template>
  <div>
    <div class="modal" :class="{ 'is-active': open }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Detalles de producto</p>
          <button
            class="delete"
            aria-label="close"
            @click="closeModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column is-half">
              <figure class="image is-2by3">
                <img :src="data?.photo" />
              </figure>
            </div>
            <div class="column is-half">
              <div
                class="is-flex is-flex-direction-column is-align-items-flex-start"
              >
                <p>{{ data?.name }}</p>
                <p>Codigo de producto: {{ data?.code }}</p>
                <p>Precio ${{ data?.price }}</p>
                <div class="is-flex">
                  <p>Cantidad</p>
                  <div class="is-flex ml-2">
                    <button
                      @click="
                        {
                          currentAmount === 0 ? currentAmount : currentAmount--;
                        }
                      "
                    >
                      -
                    </button>
                    <input
                      class="input smaller"
                      type="text"
                      v-model="currentAmount"
                      readonly
                    />
                    <button @click="currentAmount++">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="is-flex is-flex-direction-column">
            <p class="has-text-justified">{{ data?.description }}</p>
            <div class="is-flex is-justify-content-space-evenly">
              <button class="button is-white" @click="closeModal">
                Seguir comprando
              </button>
              <button class="button is-black" @click="sendChunk">
                Agregar al carro
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductListDetailModal",
  props: {
    data: Object,
    open: Boolean,
  },
  data() {
    return {
      currentAmount: 0,
    };
  },
  methods: {
    ...mapActions("cartModule", ["addChunk"]),
    closeModal() {
      this.$parent.setModalState();
    },
    sendChunk() {
      const aux = this.data;
      aux.amount = this.currentAmount;
      this.addChunk(aux);
      this.closeModal();
    },
  },
  computed: {
    ...mapGetters("cartModule", ["getAmountOfProduct"]),
  },
  mounted() {
    this.currentAmount = this.getAmountOfProduct(this.data.code);
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

.smaller {
  width: 20%;
  margin-left: 10px;
  margin-right: 10px;
}
</style>