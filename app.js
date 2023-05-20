//createApp
const {createApp} = Vue;

createApp({
    data() {
        return {
            titulo: "Contador",
            numero: 0
           
        }
    },
    created() {
        this.calculo()
    },
    methods: {
        calculo() {
            this.numero = 10
        
        },
        suma() {
            return this.numero += 1
        },
        resta() {
            this.numero -= 1
        }
    },
    computed: {
        
    }

}).mount("#app")