<!----
<template>
    <div >
    <div v-if="isLoading">
    <h2> Loading .... </h2>
    </div>
    <div v-else class="py-6">
    <table class="table table-striped shadow">
    <thead>
    <tr>
    <th scope="col">Image</th>
    <th scope="col">Référence</th>
    <th scope="col">Désignation</th>
     <th scope="col">Marque</th>
    <th scope="col">Quantité Stock</th>
    <th scope="col">Prix</th>
    <th scope="col">View</th>
    <th scope="col">Modifier</th>
    <th scope="col">Supprimer</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="art in articles" :key="art.id">
        <td><img :src="art.imageart" width="70"
height="80"/> </td>
<td>{{ art.reference }}</td>
<td>{{ art.designation }}</td>
<td>{{ art.marque }}</td>
<td>{{ art.qtestock }}</td>
<td>{{ art.prix }}</td>
<td><button class="btn btn-outline-primary mx-2">
<i class="fa-solid fa-pen-to-square"></i>
Edit</button></td>
<td><button class="btn btn-outline-danger mx-2"
@click="deletearticle(art.id)">
<i class="fa-solid fa-trash-can"></i>
Delete
</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import axios from 'axios';
const articles=ref([])
const isLoading=ref(true)
const getarticles=async()=>{
await axios.get("http://localhost:8000/api/articles")
.then(res=>{
articles.value=res.data
isLoading.value=false
})
.catch(error=>{
console.log(error)
})
}
onMounted(() => {
getarticles();
});
const deletearticle=async(id)=>{
try {
    await axios.delete(`http://localhost:8000/api/articles/${id}`)
getarticles()
} catch (error) {
console.log(error)
}
}
</script>
<style lang="scss" scoped>
</style>  
-->

<!---
<template>
    <div>
      
      <div v-if="isLoading">
        <h2>Loading ....</h2>
      </div>
      <div v-else class="py-6">
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
          <div class="container-fluid">
            <router-link :to="{name: 'Addarticle'}" class="btn btn-outline-light">
              New Article
            </router-link>
          </div>
        </nav>
        <table class="table table-striped shadow">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Référence</th>
              <th scope="col">Désignation</th>
              <th scope="col">Quantité Stock</th>
              <th scope="col">Prix</th>
              <th scope="col">View</th>
              <th scope="col">Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="art in articles" :key="art.id">
              <td><img :src="art.imageart" width="70" height="80"/></td>
              <td>{{ art.reference }}</td>
              <td>{{ art.designation }}</td>
              <td>{{ art.marque }}</td>
              <td>{{ art.qtestock }}</td>
              <td>{{ art.prix }}</td>
              <td>
                <router-link :to="{name: 'editarticle', params: { id: art.id }}" class="btn btn-outline-primary mx-2">
                  <i class="fa-solid fa-pen-to-square"></i> Edit
                </router-link>
              </td>
              <td>
                <button class="btn btn-outline-danger mx-2" @click="deletearticle(art.id)">
                  <i class="fa-solid fa-trash-can"></i> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import api from '../config/api.js';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Editarticle from './Editarticle.vue';
  import Addarticle from './Addarticle.vue';
  
  const articles = ref([]);
  const isLoading = ref(true);
  
  const getarticles = async () => {
    try {
      const response = await api.get("/api/articles");
      articles.value = response.data;
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(getarticles);
  
  const deletearticle = async (id) => {
    if (window.confirm("Etes-vous sûr de vouloir supprimer ?")) {
      try {
        await api.delete(`/api/articles/${id}`);
        getarticles();
      } catch (error) {
        console.error(error);
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
<!---
<template>
    <div>
      <div v-if="isLoading">
        <h2>Loading ....</h2>
      </div>
      <div v-else class="py-6">
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
          <div class="container-fluid">
            <router-link :to="{ name: 'Addarticle' }"
              class="btn btn-outline-light">New Article
            </router-link>
          </div>
        </nav>
        <table class="table table-striped shadow">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Référence</th>
              <th scope="col">Désignation</th>
              <th scope="col">Quantité Stock</th>
              <th scope="col">Prix</th>
              <th scope="col">View</th>
              <th scope="col">Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="art in articles" :key="art.id">
              <td><img :src="art.imageart" width="70" height="80" /></td>
              <td>{{ art.reference }}</td>
              <td>{{ art.designation }}</td>
              <td>{{ art.marque }}</td>
              <td>{{ art.qtestock }}</td>
              <td>{{ art.prix }}</td>
              <td>
                <button class="btn btn-outline-primary mx-2">
                  <router-link
                    :to="{ name: 'editarticle', params: { id: art.id } }"
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                    Edit
                  </router-link>
                </button>
              </td>
              <td>
                <button
                  class="btn btn-outline-danger mx-2"
                  @click="deletearticle(art.id)"
                >
                  <i class="fa-solid fa-trash-can"></i>
                  Delete
                </button>
              </td>
              <!--td>
  <router-link :to="{name: 'editarticle', params: { id: art.id }}" 
  class="btn btn-outline-warning mx-2">
  <i class="fa-solid fa-pen-to-square"></i>
  Modifier
  </router-link>
  </td>-->
  <!---
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  const articles = ref([]);
  const isLoading = ref(true);
  const getarticles = async () => {
       console.log("articles.value")
    await axios
      .get("http://localhost:8000/api/articles")
      .then((res) => {
        articles.value = res.data;
        console.log("articles.value")
        isLoading.value = false;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  onMounted(() => {
    getarticles();
  });
  const deletearticle = async (id) => {
    if (window.confirm("Etes-vous sûr de vouloir supprimer ?")) {
      try {
        await axios.delete('http://localhost:8000/api/articles/${id}');
        getarticles();
      } catch (error) {
        console.log(error);
      }
    }
  };
  </script>
  <style lang="scss" scoped>
  </style>
-->

<template>
    <div >
    <div v-if="isLoading">
    <h2> Loading .... </h2>
    </div>
    <div v-else class="py-6">
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
    <router-link :to="{name: 'Addarticle'}" class="btn btnoutline-light">
    <i class="fa-solid fa-square-plus"></i> New Article
    </router-link>
    </div>
    </nav>
    <table class="table table-striped shadow">
    <thead>
    <tr>
    <th scope="col">Image</th>
    <th scope="col">Référence</th>
    <th scope="col">Désignation</th>
    <th scope="col">Quantité Stock</th>
    <th scope="col">Prix</th>
<th scope="col">View</th>
<th scope="col">Modifier</th>
<th>Supprimer</th>
</tr>
</thead>
<tbody>
<tr v-for="art in articles" :key="art.id">
<td><img :src="art.imageart" width="70"
height="80"/> </td>
<td>{{ art.reference }}</td>
<td>{{ art.designation }}</td>
<td>{{ art.marque }}</td>
<td>{{ art.qtestock }}</td>
<td>{{ art.prix }}</td>
<td>
    
    <button class="btn btn-outline-primary mx-2">
<i class="fa-solid fa-pen-to-square"></i>
Edit</button></td>
<td><button class="btn btn-outline-danger mx-2"
@click="deletearticle(art.id)">
<i class="fa-solid fa-trash-can"></i>
Delete
</button></td>

</tr>
</tbody>
</table>
</div>
</div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import axios from 'axios';
const articles=ref([])
const isLoading=ref(true)
const getarticles=async()=>{
await axios.get("http://localhost:8000/api/articles")
.then(res=>{
articles.value=res.data
isLoading.value=false
})
.catch(error=>{
console.log(error)
})
}
onMounted(() => {
getarticles();
});
const deletearticle=async(id)=>{
if (window.confirm("Etes-vous sûr de vouloir supprimer ?")) {
try {
await axios.delete(`http://localhost:8000/api/articles/${id}`)
getarticles()
} catch (error) {
console.log(error)
}
}
}
</script>
<style lang="scss" scoped>
</style>