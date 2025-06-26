const { createApp, ref , computed} = Vue;

createApp({
    setup(){
        const product = ref('Socks');
        const brand = ref('SE 331')
        const url = ref ('https://www.camt.cmu.ac.th'); 
        const onSale = ref(true);
        const details = ref([
            '50% cotton', 
            '30% wool', 
            '20% polyester'
        ]);
        const variants = ref([
            {
                id: 2234,
                color: 'GREEN',
                image: './assets/images/socks_green.jpg',
                quantity: 50,
            },
            {
                id:2235,
                color: 'BLUE',
                image: './assets/images/socks_blue.jpg',
                quantity: 0,
            }
        ])
        const selectedVariant = ref(0);
        const sizes = ref(["S", "M", "L"]);
        const cart = ref(0);

        //-------------------------------------------------------//

        const addToCart = () => {
            cart.value += 1;
        }

        const updateImage = (variantImage) => {
            image.value = variantImage;
        }

        const toggleInventory = () => {
            const variant = variants.value[selectedVariant.value];
            if (variant.quantity <= 0) {
                variant.quantity = 50;
            } 
            else if (variant.quantity > 10) {
                variant.quantity = 5;
            }
            else {
                variant.quantity = 0;
            }
        }

        const title = computed(() =>{
            return brand.value + ' ' + product.value;
        })

        const updateVariant = (index) => {
            selectedVariant.value = index;
        }
        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });

        const inventory = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        });

        const onSaleText = computed(() => {
            return brand.value + ' ' + product.value + ' is on sale!';
        })
      
        return{
            title,
            image,
            url,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleInventory,
            updateVariant,
            selectedVariant,

            onSaleText
            
        }
    }
}).mount('#app');