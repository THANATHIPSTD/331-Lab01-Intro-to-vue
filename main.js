const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]); // back to array so we can use splice()
    const premium = ref(false);

    const updateCart = (id) => {
      cart.value.push(id);
    };

    const removeFromCart = (id) => {
      const index = cart.value.indexOf(id);
      if (index !== -1) {
        cart.value.splice(index, 1);
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