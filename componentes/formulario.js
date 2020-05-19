Vue.component('formula', {
    data: function () { //Declaración de la Data
        return {
            errores: [],
            nombre: null,
            correo: null,
            celular: null,
            genero: null
        }
    },
    // Aquí comienza nuestro template
    template: `
    <div>
        <form id="app" @submit="validarFormulario" method="post" action="./app.html#/contacto" novalidate="true">
            <p v-if="errores.length">
            <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                <ul style="list-style: none;">
                    <li v-for="error in errores" style="color: red">{{ error }}</li>
                </ul>
            </p>
            <p>
                <label for="nombre">Nombre</label><br>
                <input id="nombre" v-model="nombre" type="text" nombre="nombre">
            </p>
            <p>
               <label for="correo">Correo electrónico</label><br>
               <input id="correo" v-model="correo" type="email" nombre="correo">
            </p>

            <p>
               <label for="celular">Celular</label><br>
               <input id="celular" v-model="celular" type="number" nombre="celular">
            </p>

            <p>
                <label for="genero">Género</label><br>
                <select id="genero" v-model="genero" nombre="genero">
                    <option>Masculino</option>
                    <option>Femenino</option>
                </select>
            </p>
            <p>
                <input type="submit" value="Enviar">
            </p>
        </form>
    </div>`,
    // Aca termina nuestro Template

    methods: {//Inician los métodos
        validarFormulario: function (e) {//iniciamos la fincion que valida el formulario
            this.errores = [];

            if (!this.nombre) {
                this.errores.push("El nombre es obligatorio.");
            }

            if (!this.correo) {
                this.errores.push('El correo electronico es obligatorio.');
            } else if (!this.validarCorreo(this.correo)) {
                this.errores.push("El correo electronico debe ser valido.");
            }

            if (!this.celular) {
                this.errores.push("El número celular es obligatorio.");
            }

            if (!this.errores.length) {
                return true;
            }

            e.preventDefault();
        },
        validarCorreo: function (correo) {
            var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

            return re.test(correo);
        }
    }
})
