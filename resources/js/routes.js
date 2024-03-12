import Viewarticles from "./components/articles/Viewarticles.vue"
//import Viewcategorie from "./components/categories/Viewcategorie.vue"
//import Addcategorie from "./components/categories/Addcategorie.vue"
import Addaticle from "./components/articles/Addarticle.vue"
import Editarticle from "./components/articles/Editarticle.vue"

export const routes=[
    { path: '/api/articles' , component: Viewarticles },

    {
        name:"editarticle",
        path:"/editarticle/:id",
        component:Editarticle
        },
/*{
//name:"Viewcategorie",
//path:"/listcat",
//component:Viewcategorie
},
{
//:"Addcategorie",
//path:"/addcategorie",
//component:Addcategorie
},*/
{
name:"Viewarticles",
path:"/listart",
component:Viewarticles
},
{
name:"Addarticle",
path:"/addarticle",
component:Addaticle
}
]