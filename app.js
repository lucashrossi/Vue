//createApp
const {createApp} = Vue;

createApp({
    data() {
        return {
            titulo: "Holaaaa Vue",
            a:20,
            b:20,
            numero: 100,
            mensaje: "lalalalalala",
            div: `
            <h3>Hola</h3>
            `,
            url: "https://www.clarin.com/img/2021/07/24/d3mu5d29c_340x340__1.jpg",
            alt: "Perrito",
            parrafo: ""
        }
    },
    created() {
        this.calculo()
    },
    methods: {
        calculo() {
            // this.a =20;
            // this.b =20;
            // console.log(a*b)
        },
        sumas() {
            return this.numero + 100
        },
        multiplicado() {
            this.numero *= 10
        }
    },
    computed: {
        suma() {
            return this.numero + 200
        }
    }

}).mount("#app")