//createApp
const {createApp} = Vue;


const Headerh = {

    props: {
        tituloh: String,
        foto: String,
        total: Number,
        fecha: Date

    },
    template: `
        <h2>{{tituloh}}</h2>
        <h2>{{total}}</h2>
        <h4>{{fecha}}</h4>
        <img :src="foto" :alt="'SinImagen'">
    `

}

createApp({
    components: {
        'headerh': Headerh
    },
    data() {
        return {
            titulo: "Contador",
            numero: 0,
            tituloh: "",
            foto: "./2023.png",
            total: 0,
            fecha: 0
           
        }
    },
    created() {
        this.calculo()
    },
    methods: {
        calculo() {
            this.total = 
            this.numero = 10
            this.tituloh =  "-"
            this.fecha = Date(this.fecha).toString()
        
        },
        suma() {
            this.total += this.numero 
            this.numero += 1
            this.tituloh =  "Sumaste!"
            this.fecha = Date(this.fecha).toString()
                
        },
        resta() {
            this.total -= this.numero
            this.numero -= 1
            this.tituloh =  "Restaste!"
            this.fecha = Date(this.fecha).toString()
             
        }
    },
    computed: {
        
    }

}).mount("#app")