var CrearVillano = Vue.component('CrearVillano', {
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
              <label for="origen">origen</label>
              <input id="origen" v-model="origen" type="text">
          </p>
          <p>
              <label for="derrotado">Derrotado</label>
              <input id="derrotado" v-model="derrotado" type="text">
          </p>




          <p>
              <button v-on:click="validarFormulario(), crear_villano(nombre, poder, origen, derrotado)">Agregar villano</button>
          </p>

      </div>
  `,//Aquí termina nuestro template

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

      crear_villano: function(nombre, poder, origen, derrotado ){
          if(!(Array.isArray(this.errores) && this.errores.length)){
              let self = this;
              axios.post('https://marvel-6b0ea.firebaseio.com/villanos.json',{
                  nombre:nombre,
                  poder:poder,
                  origen:origen,
                  derrotado:derrotado
              })
              .then((response) => {
                  alert("Se Agregó a la Lista Exitosamente");
                  router.push({ name: "Villanos" });
              }
              ).catch((err) => {
                  self.loading = false;
                  console.log(err);
              });
          }
      } // fin metodo crear_alumno
  } // Terminan los Métodos
});
