const { createApp, ref } = Vue;

createApp({
    setup(){
        const product = ref('Chrome hearts T-shirt');
        const description = ref('This is a limited edition Chrome Hearts T-shirt made from 100% cotton. It features the iconic Chrome Hearts logo and is available in various sizes.');
        return{
            product,description
        }
    }
}).mount('#app');