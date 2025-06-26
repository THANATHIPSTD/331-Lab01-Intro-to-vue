const { createApp, ref } = Vue;

createApp({
    setup(){
        const product = ref('Socks');
        const image = ref('./assets/images/socks_green.jpg');
        const url = ref ('https://www.camt.cmu.ac.th'); 
        
        return{
            product,
            image,
            url
        }
    }
}).mount('#app');