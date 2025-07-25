const {  computed } = Vue;

const productDisplay = {
  template: `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
          <p v-else>Out of Stock</p>

          Shipping: {{ shipping }}
          <product-details :details="details"></product-details>

          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
          ></div>

          <button
            class="button"
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
            @click="addToCart"
          >
            Add To Cart
          </button>

          <button
            class="button"
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
            @click="removeFromCart"
          >
            Remove
          </button>

          <div>
            <review-list v-if="reviews.length":reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
          </div>
  
        </div>
      </div>
    </div>
  `,

  props: {
    premium: Boolean
  },

  setup(props, { emit }) {
    const product = ref('Boots');
    const brand = ref('SE 331');
    const inventory = ref(100);
    const reviews = ref([]);
    const details = ref([
      '50% cotton',
      '30% wool',
      '20% polyester'
    ]);
    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
      { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 1 }
    ]);
    const selectedVariant = ref(0);

    function updateVariant(index) {
      selectedVariant.value = index;
    }

    const image = computed(() => variants.value[selectedVariant.value].image);

    const inStock = computed(() => variants.value[selectedVariant.value].quantity);

    function addToCart() {
      emit('add-to-cart', variants.value[selectedVariant.value].id);
    }

    const title = computed(() => brand.value + ' ' + product.value);

    function updateImage(variantImage) {
      image.value = variantImage;
    }

    function removeFromCart() {
      emit('remove-from-cart', variants.value[selectedVariant.value].id);
    }

    function addReview(review) {
      reviews.value.push(review);
    }

    const shipping = computed(() => (props.premium ? 'Free' : '30'));

    return {
      title,
      image,
      inventory,
      inStock,
      details,
      variants,
      addToCart,
      updateImage,
      updateVariant,
      shipping,
      removeFromCart,
      addReview,
      reviews,
    };
    
  }
};
