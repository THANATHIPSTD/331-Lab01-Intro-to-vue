const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const cart = ref({});
    const premium = ref(false);

    const updateCart = (id) => {
      if (cart.value[id]) {
        cart.value[id]++;
      } else {
        cart.value[id] = 1;
      }
    };

    return {
      cart,
      premium,
      updateCart
    };
  }
});

app.component('product-display', productDisplay);
app.component('product-details', productDetails);
app.mount('#app');