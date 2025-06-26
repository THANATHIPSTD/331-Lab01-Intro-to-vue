const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const cart = ref({}); // Store quantity by product ID
    const premium = ref(false);

    const updateCart = (id) => {
      if (cart.value[id]) {
        cart.value[id]++;
      } else {
        cart.value[id] = 1;
      }
    };

    const removeFromCart = (id) => {
      if (cart.value[id]) {
        cart.value[id]--;
        if (cart.value[id] === 0) {
          delete cart.value[id];
        }
      }
    };

    return {
      cart,
      premium,
      updateCart,
      removeFromCart
    };
  }
});



app.component('product-display', productDisplay);
app.component('product-details', productDetails);
app.mount('#app');