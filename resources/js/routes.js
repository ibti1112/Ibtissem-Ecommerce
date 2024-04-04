import Viewarticles from "./components/articles/Viewarticles.vue";
import Editarticle from "./components/articles/Editarticle.vue";
import Viewarticletable from "./components/articles/Viewarticletable.vue";
import Addarticle from "./components/articles/Addarticle.vue";
//import Cardarticle from "./components/articles/Cardarticle.vue";
import Editarticletable from "./components/articles/Editarticletable.vue";
import Cardarticle from "./components/articles/Cardarticle.vue";
import HomeCart from "./components/cart/HomeCart.vue";
import Cart from "./components/cart/Cart.vue";
import ListCat from "./components/articles/ListCat.vue"; 
import Payment from './components/cart/Payment.vue';

export const routes = [
    {
        path:'/payment',
        name:'Payment',
        component:Payment
        },
        

    {
        name:"Viewarticles",
        path:"/Viewarticles",
        component:Viewarticles
        },
        {
            name: "Addarticle",
            path: "/addarticle",
            component: Addarticle
        },
    {
        path: '/listcat',
        name: 'listcat',
        component: ListCat
      },
    {
    path:'/cart',
    name:'Cart',
     component:Cart
    },
    {
        name:'HomeCart',
        path:'/shopping',
        component:HomeCart
        },
    {
        name: "Editarticletable",
        path: "/editarticletable",
        component:Editarticletable
    },
    
    
    {
        name: "Editarticle",
        path:"/editarticle/:id",
        component: Editarticle
    },
    
    
    {
        name: "Viewarticletable",
        path: "/articlestable",
        component: Viewarticletable
    },
    {
        name: "Cardarticle",
        path: "/cardarticle",
        component:Cardarticle
    }
    
    
];