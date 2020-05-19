var Alumnos = Vue.component('Alumnos', {

    template: `
        <div>
            <h1>Alumnos</h1>
            <p>Esta es la página de Alumnos</p>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nombres</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, index) in alumnos">
                        <td>{{ item.nombres }}</td>
                        <td>{{ item.apellidos }}</td>
                        <td>{{ item.genero }}</td>
                        <td><a href="/cambiar_alumno"></a>
                            <router-link class="nav-link":to="{ name: 'cambiar_alumno', params: { id:index }}"> <button>Editar</button> </router-link>
                            <button v-on:click="eliminar_alumno(index) ">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <a href="/crear_alumno"></a>
            <router-link class="nav-link" to="/crear_alumno"> <button>Agregar Alumno</button></router-link>

        </div>
    `,

    data: function () {
        return {
            alumnos: [],
        }
    },

    mounted() {
        let self = this;
        fetch('https://consumo-app-bf36d.firebaseio.com/alumnos.json')
            .then(r => r.json())
            .then(json => {
                self.alumnos = json;
            });
    },
    methods: { //Inician los Métodos
        eliminar_vengador: function (id){
            let self = this;
            axios.delete('https://consumo-app-bf36d.firebaseio.com/alumnos/'+ id + '.json')
            .then((response) =>{
                alert("El alumno fue eliminado");
                location.reload();
            }).catch((err) =>{
                self.loading = false; console.log(err);
            });
        } //fin metodo eliminar alumno
    }
});
