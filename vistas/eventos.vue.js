var Eventos = Vue.component('Eventos', {
    template:
        `
        <div>
            <h1>Eventos</h1>

            <div>
                <h4 style="color: red; text-align: justify ">Escuchar eventos</h4>
                <hr>
                <p style="text-align: justify">
                    Podemos usar la directiva v-on para escuchar eventos DOM y ejecutar algunos JavaScript cuando se activan.
                </p>

                <p><strong>Por ejemplo:</strong></p>
                <img src="./img/ej8.png"><br>
                <img src="./img/ej9.png"> 

                <p style="text-align: justify">
                    Resultado: Creas un boton que al pulsarlo aumenta el número 
                    en el texto que tiene en la parte de abajo
                </p>
                <img src="./img/ej10.png"> 
            </div>

            <br>

            <div>
                <h4 style="color: red; text-align: justify">Métodos Manejadores de eventos</h4>
                <hr>
                <p style="text-align: justify">
                    Sin embargo, la lógica para muchos controladores de eventos será
                    más compleja, por lo que no es posible mantener su JavaScript 
                    en el valor del atributo v-on. Es por eso que v-on también puede 
                    aceptar el nombre de un método al que te gustaría llamar.
                </p>

                <p><strong>Por ejemplo:</strong></p>
                <img src="./img/ej11.png"> <br></br>
                <img src="./img/ej12.png"> 

                <p style="text-align: justify">
                    Resultado: Creamos un botón en el cual definimos un metodo llamado "click",
                    el cual muestra un mensaje en la parte superior con una ventana emergente.
                </p>
            </div>

            <div>
                <h4 style="color: red; text-align: justify">Métodos Manejadores en línea</h4>
                <hr>
                <p style="text-align: justify">
                    En lugar de enlazar directamente con un nombre de método, también 
                    podemos usar métodos en una declaración de JavaScript en línea:
                </p>
                <img src="./img/ej13.png"> <br></br>
                <img src="./img/ej14.png">
                
                <br>

                <p style="text-align: justify;">
                    Como resultado tenemos dos botones, los cuales cambiaran su 
                    valor dependiendo el mensaje que le asignemos en el metodo como parametro,
                    y este mismo metodo se podra utilizar en los dos botones, sin necesidad de 
                    crear otro metodo.
                </p>

            </div>
        </div>
    `
});