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
                color: 'green',
            },
            {
                id:2235,
                color: 'blue',
            }
        ])
        const sizes = ref(["S", "M", "L"]);
        
        return{
            product,
            image,
            url,
            inventory,
            onSale,
            details,
            variants,
            sizes
        }
    }
}).mount('#app');