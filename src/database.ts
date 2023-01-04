import { TUser } from "./types"
import { TProduct } from "./types"
import { TPurchase } from "./types"


const user: TUser[] = [
    {
     id:"joao2013",
     email:"joao2013@email.com",
     password:"joaozinho123"   
    },

    {
        id:"maria2010",
        email:"maria2010@email.com",
        password:"mariazinha123"   
    },

    {
        id:"ceci_fernanda",
        email:"ceci_fernanda@email.com",
        password:"cecilia456"   
    },
]

const product: TProduct[] = [

    {
        id:"BOLA779",
        name:"Bola",
        price:50,
        category:"Brinquedo"   
    },

    {
        id:"RADIO875",
        name:"Rádio",
        price:35,
        category:"Eletrônicos"   
    },

    {
        id:"GELADEIRA779",
        name:"Geladeira",
        price:2150,
        category:"Eletrodomésticos"   
    }

]

const purchase: TPurchase[] = [

    {
        userId: "joao2013",
        productId: "RADIO875",
        quantity: 2,
        totalPrice: 70   
    },

    {
        userId: "ceci_fernanda",
        productId: "GELADEIRA779",
        quantity: 1,
        totalPrice: 2150    
    },

    {
        userId: "maria2010",
        productId: "BOLA779",
        quantity: 5,
        totalPrice: 250    
    }

]

console.log(product,user,purchase)