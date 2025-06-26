const { createApp, ref } = Vue;

createApp({
    setup(){
        const product = ref('Socks');
        const image = ref('./assets/images/socks_green.jpg');
        const url = ref ('https://www.camt.cmu.ac.th'); 
        const inventory = ref(11);
        const onSale = ref(true);
        
        return{
            product,
            image,
            url,
            inventory,
            onSale

        }
    }
}).mount('#app');