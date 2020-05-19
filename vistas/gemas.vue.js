var Gemas = Vue.component('Gemas',  {

  template:
   `
  <div>
      <h1>Gemas</h1>
      <p>Esta es la página de Gemas</p>

      <table class="table">
          <thead>
              <tr>
                  <th scope="col">Nombres</th>
                  <th scope="col">Poder</th>
                  <th scope="col">Portador</th>
                  <th scope="col">Ubicacion</th>
              </tr>
          </thead>

          <tbody>
              <tr v-for="(item, index) in gemas">
                  <td>{{ item.nombre }}</td>
                  <td>{{ item.poder }}</td>
                  <td>{{ item.portador }}</td>
                  <td>{{ item.ubicacion }}</td>
                  <td><a href="/cambiar_gema"></a>
                      <router-link class="nav-link":to="{ name: 'cambiar_gema', params: { id:index }}"> <button>Editar</button> </router-link>
                      <button v-on:click="eliminar_gema(index) ">Eliminar</button>
                  </td>
              </tr>
          </tbody>
      </table>
      <a href="/crear_gema"></a>
      <router-link class="nav-link" to="/crear_gema"> <button>Agregar gema</button></router-link>

  </div>
    `,

    data: function () {
        return {
            gemas: [],
        }
    },

    mounted() {
        let self = this;
        fetch('https://marvel-6b0ea.firebaseio.com/gemas.json')
            .then(r => r.json())
            .then(json => {
                self.gemas = json;
            });
    },
    methods: { //Inician los Métodos
        eliminar_gema: function (id){
            let self = this;
            axios.delete('https://marvel-6b0ea.firebaseio.com/gemas/'+ id + '.json')
            .then((response) =>{
                alert("La gema fue eliminada");
                location.reload();
            }).catch((err) =>{
                self.loading = false; console.log(err);
            });
        } //fin metodo eliminar alumno
    }
});
