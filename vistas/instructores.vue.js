var Instructores = Vue.component('Instructores', {
    //Aquí empieza nuestro template
    template: `
        <div>
            <h1>Instructores</h1>
            <p>Esta es la página de Instructores</p>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nombres</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Email</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, index) in instructores">
                        <td>{{ item.nombres }}</td>
                        <td>{{ item.apellidos }}</td>
                        <td>{{ item.genero }}</td>
                        <td>{{ item.telefono }}</td>
                        <td>{{ item.email }}</td>
                        <td><a href="/cambiar_instructor"></a>
                            <router-link class="nav-link":to="{ name: 'cambiar_instructor', params: { id:index }}"> <button>Editar</button> </router-link>
                            <button v-on:click="eliminar_instructor(index)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <a href="/crear_instructor"></a>
            <router-link class="nav-link" to="/crear_instructor"> <button>Agregar Instructor</button></router-link>
        </div>
    `, //Aquí termina nuestro template

    data: function() {
        return{
            instructores: [],
        }
    },

    mounted() {
        let self = this;
        fetch('https://instructores-7e276.firebaseio.com/instructores.json')
        .then(r => r.json())
        .then(json => {
            self.instructores = json;
        });
    },

    methods: { //Inician los Métodos
        eliminar_instructor: function (id){
            let self = this;
            axios.delete('https://instructores-7e276.firebaseio.com/instructores/' + id + '.json')
            .then((response) =>{
                alert("El instructor fue eliminado");
                location.reload();
            }).catch((err) =>{
                self.loading = false; console.log(err);
            });
        } //fin metodo eliminar alumno
    }
});
