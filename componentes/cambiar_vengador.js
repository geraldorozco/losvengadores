var CambiarVengador = Vue.component('CambiarVengador', {
  data: function () { // Declaración de la data
      return {
          errores: [],
          nombres: null,
          apellidos: null,
          heroe: null,
          trabajo: null,
          telefono: null,
          email: null
      }
  },

  //Aqui comenzamos nuestro template
  template: `
      <div>
          <p v-if="errores.length">
              <b>Por favor, corrija el(los) siguiente(s) error(es): </b>
              <ul>
                  <li v-for="error in errores" style="color: red;">{{ error }}</li>
              </ul>
          </p>

          <p>
              <label for="nombres">Nombres</label>
              <input id="nombres" v-model="nombres" type="text">
          </p>

          <p>
              <label for="apellidos">Apellidos</label>
              <input id="apellidos" v-model="apellidos" type="text">
          </p>

          <p>
              <label for="heroe">Heroe</label>
              <input id="heroe" v-model="heroe" type="text">
          </p>
          <p>
              <label for="trabajo">trabajo</label>
              <input id="trabajo" v-model="trabajo" type="text">
          </p>
          <p>
              <label for="telefono">Telefono</label>
              <input id="telefono" v-model="telefono" type="text">
          </p>
          <p>
              <label for="email">Email</label>
              <input id="email" v-model="email" type="text">
          </p>



          <p>
              <button v-on:click="validarFormulario(), cambiar_vengador(nombres, apellidos, heroe, trabajo, telefono, email)">Guardar Cambios</button>
          </p>

      </div>
  `,//Aquí termina nuestro template
  mounted() {
      let self = this;
      fetch('https://marvel-6b0ea.firebaseio.com/vengadores/' + this.$route.params.id + '.json')
          .then(r => r.json())
          .then(json => {
              self.nombres = json.nombres,
              self.apellidos = json.apellidos,
              self.heroe = json.heroe,
              self.trabajo = json.trabajo,
              self.telefono = json.telefono,
              self.email = json.email
          });
  },
  methods: { //Inician los Métodos
      validarFormulario: function (e){ //inician la función que valida el formulario
          this.errores = [];

          if(!this.nombres){
              this.errores.push("Los nombres es obligatorio.");
          }

          if(!this.apellidos){
              this.errores.push("Los apellidos es obligatorio.");
          }
          if(!this.heroe){
              this.errores.push("nombre del heroe es obligatorio.");
          }
          if(!this.trabajo){
              this.errores.push("trabajo es obligatorio.");
          }
          if(!this.telefono){
              this.errores.push("telefono es obligatorio.");
          }
          if(!this.email){
              this.errores.push("Email es obligatorio.");
          }


          if(!this.errores.length){
              return true;
          }
      },
      cambiar_vengador: function (nombres, apellidos, heroe, trabajo, telefono, email) {
          if (!(Array.isArray(this.errores) && this.errores.length)) {
              let self = this;
              axios.put('https://marvel-6b0ea.firebaseio.com/vengadores/' + this.$route.params.id + '.json', {
                    nombres: nombres,
                    apellidos: apellidos,
                    heroe: heroe,
                    trabajo: trabajo,
                    telefono: telefono,
                    email: email,
              }).then((response) => {
                  alert("Datos del vengador Modificados Exitosamente");
                  router.push({ name: "Vengadores" });
              }).catch((err) => {
                  self.loading = false; console.log(err);
              });
          }
      } // fin metodo cambiar_alumno
  } // Terminan los Métodos

});
