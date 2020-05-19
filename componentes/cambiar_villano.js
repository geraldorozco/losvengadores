var CambiarVillano = Vue.component('CambiarVillano', {
  data: function () { // Declaración de la data
      return {
        errores: [],
        nombre: null,
        poder: null,
        origen: null,
        derrotado: null
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
          <label for="nombre">Nombre</label>
          <input id="nombre" v-model="nombre" type="text">
      </p>

      <p>
          <label for="poder">Super Poder</label>
          <input id="poder" v-model="poder" type="text">
      </p>

      <p>
          <label for="origen">orien</label>
          <input id="origen" v-model="origen" type="text">
      </p>
      <p>
          <label for="derrotado">Derrotado</label>
          <input id="derrotado" v-model="derrotado" type="text">
      </p>




      <p>
          <button v-on:click="validarFormulario(), cambiar_villano(nombre, poder, origen, derrotado)">guardar Cambios</button>
      </p>

  </div>
  `,//Aquí termina nuestro template
  mounted() {
      let self = this;
      fetch('https://marvel-6b0ea.firebaseio.com/villanos/' + this.$route.params.id + '.json')
          .then(r => r.json())
          .then(json => {
              self.nombre = json.nombre,
              self.poder = json.poder,
              self.origen = json.origen,
              self.derrotado = json.derrotado
          });
  },
  methods: { //Inician los Métodos
      validarFormulario: function (e){ //inician la función que valida el formulario
          this.errores = [];

          if(!this.nombre){
              this.errores.push("Los nombres es obligatorio.");
          }

          if(!this.poder){
              this.errores.push("el poder es obligatorio.");
          }
          if(!this.origen){
              this.errores.push("origen es obligatorio.");
          }
          if(!this.derrotado){
              this.errores.push("derrotado es obligatorio.");
          }


          if(!this.errores.length){
              return true;
          }
      },
      cambiar_villano: function (nombre, poder, origen, derrotado) {
          if (!(Array.isArray(this.errores) && this.errores.length)) {
              let self = this;
              axios.put('https://marvel-6b0ea.firebaseio.com/villanos/' + this.$route.params.id + '.json', {
                nombre:nombre,
                poder:poder,
                origen:origen,
                derrotado:derrotado
              }).then((response) => {
                  alert("Datos del villano Modificados Exitosamente");
                  router.push({ name: "Villanos" });
              }).catch((err) => {
                  self.loading = false; console.log(err);
              });
          }
      } // fin metodo cambiar_alumno
  } // Terminan los Métodos

});
