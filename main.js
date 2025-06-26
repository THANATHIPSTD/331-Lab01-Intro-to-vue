const { createApp, ref } = Vue;

createApp({
    setup(){
        const product = ref('Socks');
        const image = ref('./assets/images/socks_green.jpg');
        const url = ref ('https://www.camt.cmu.ac.th'); 
        const inventory = ref(11);
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
            },
            {
                id:2235,
                color: 'BLUE',
                image: './assets/images/socks_blue.jpg',
            }
        ])
        const sizes = ref(["S", "M", "L"]);
        const cart = ref(0);

        //--------------------------//

        const addToCart = () => {
            cart.value += 1;
        }

        const updateImage = (variantImage) => {
            image.value = variantImage;
        }

        const toggleInventory = () => {

            if(inventory.value <= 0){
                inventory.value = 50;
            } 
            else if(inventory.value > 10){
                inventory.value = 5;
            }
            else {
                inventory.value = 0;
            }
        }

        
        return{
            product,
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
            toggleInventory
        }
    }
}).mount('#app');