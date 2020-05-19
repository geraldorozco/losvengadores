var QueEsVue = Vue.component('QueEsVue',  {

  template:
   `
  <div>
      <h1>Alumnos</h1>
      <p>Esta es la página de Alumnos</p>

      <table class="table">
          <thead>
              <tr>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Nombre de Superheroe</th>
                  <th scope="col">trabajo Actual</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Email</th>
              </tr>
          </thead>

          <tbody>
              <tr v-for="(item, index) in vengadores">
                  <td>{{ item.nombres }}</td>
                  <td>{{ item.apellidos }}</td>
                  <td>{{ item.heroe }}</td>
                  <td>{{ item.trabajo }}</td>
                  <td>{{ item.telefono }}</td>
                    <td>{{ item.email }}</td>
                  <td><a href="/cambiar_vengador"></a>
                      <router-link class="nav-link":to="{ name: 'cambiar_vengador', params: { id:index }}"> <button>Editar</button> </router-link>
                      <button v-on:click="eliminar_vengador(index) ">Eliminar</button>
                  </td>
              </tr>
          </tbody>
      </table>
      <a href="/crear_vengador"></a>
      <router-link class="nav-link" to="/crear_vengador"> <button>Agregar vengador</button></router-link>

  </div>
    `,

    data: function () {
        return {
            vengadores: [],
        }
    },

    mounted() {
        let self = this;
        fetch('https://marvel-6b0ea.firebaseio.com/vengadores.json')
            .then(r => r.json())
            .then(json => {
                self.vengadores = json;
            });
    },
    methods: { //Inician los Métodos
        eliminar_alumno: function (id){
            let self = this;
            axios.delete('https://marvel-6b0ea.firebaseio.com/vengadores/'+ id + '.json')
            .then((response) =>{
                alert("El vengador fue eliminado");
                location.reload();
            }).catch((err) =>{
                self.loading = false; console.log(err);
            });
        } //fin metodo eliminar alumno
    }
});
