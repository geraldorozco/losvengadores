var Directivas = Vue.component('Directivas', {
    template:
        `
        <div>
            <h1>Directivas</h1>
            
            <h5 style="text-align: justify;">v-text</h5>

            <ul style="list-style: none; text-align: justify;">
                <li><strong>Espera:</strong> string</li>
                <li>Detalles:</li>
            </ul>

            <p style="text-align: justify;">
            Actualiza el textContent del elemento. Si usted necesita actualizar
             parte del textContent, usted debe utilizar interpolaciones {$ endraw %}.
            </p>

            <h5>Ejemplo:</h5>
            <img src="./img/ej1.png">

            <hr>

            <h5 style="text-align: justify;">v-html</h5>

            <ul style="list-style: none; text-align: justify;">
                <li><strong>Espera:</strong> string</li>
                <li>Detalles:</li>
             </ul>

            <p style="text-align: justify;">
                Actualiza el innerHTML del elemento. Note que los contenidos son 
                insertados como HTML puro - no serán compilados como pantillas (templates) 
                de Vue. Si usted se encuentra intentando componer plantillas utilizando v-html, 
                intente pensar una solución utilizando componentes.
            </p>
            
            <h5>Ejemplo:</h5>
            <img src="./img/ej2.png">

            <hr>

            <h5 style="text-align: justify;">v-show</h5>

            <ul style="list-style: none; text-align: justify;">
                <li><strong>Espera: </strong> any</li>
                <li>Uso:</li>
            </ul>

            <p style="text-align: justify;">
                Cambia la propiedad CSS display del elemento basado en la veracidad
                del valor de la expresión.
                <br>
                La directiva dispara transiciones cuando su condición cambia.  
            </p>

            <hr>

            <h5 style="text-align: justify;">v-if</h5>

            <ul style="list-style: none; text-align: justify;">
                <li><strong>Espera: </strong> any</li>
                <li>Uso:</li>
            </ul>

            <p style="text-align: justify;">
                Renderiza condicionalmente el elemento basado en la veracidad del valor de la expresión.
                El elemento y sus directivas / componentes son destruidas y re-construidas 
                al cambiar el valor de la expresión. Si el elemento es un < template >,
                su contenido será extraído como un bloque condicional.

                <br>
                Esta directiva dispara transiciones cuando su condición cambia.
            </p>

            <hr>

            <h5 style="text-align: justify;">v-else</h5>

            <ul style="list-style: none; text-align: justify;">
                <li>No espera una expresión</li>
                <li><strong>Espera: </strong> any</li>
                <li>Uso:</li>
            </ul>

            <p style="text-align: justify;">
                Denota el “bloque else“ para v-if o una cadena v-if/v-else-if.
                <br>
                Esta directiva dispara transiciones cuando su condición cambia.
            </p>

            <img src="./img/ej3.png">

            <hr>
            <h5 style="text-align: justify;">v-else-if</h5>

            <ul style="list-style: none; text-align: justify;">
                <li style="border-left: 5px solid green;"><strong style="margin-left: 5px;">Nuevo en 2.1.0+</strong></li>
                <li><strong>Espera: </strong> any</li>
                <li><strong>Restricción: el elemento hermano previo deb ser v-if o v-else-if.</strong></li>
                <li>Uso:</li>
            </ul>

            <p style="text-align: justify;">
                Denota el “bloque else if“ para v-if . Puede ser encadenado.
            </p>

            <img src="./img/ej4.png">

            <hr>

            <h5 style="text-align: justify;">v-for</h5>

            <ul style="list-style: none; text-align: justify;">
                <li><strong>Espera: </strong>Array | Object | number | string</li>
                <li>Uso:</li>
            </ul>

            <p style="text-align: justify;">
                Renderiza el elemento o plantilla mutiples veces basado en la fuente
                de información. El valor de la directiva debe utilizar la sintaxis 
                especial alias in expresion para proveer un alias para el elemento 
                actual en el cual se está iterando:
            </p>

            <img src="./img/ej5.png">

            <p>
                Alternativamente, usted también puede especificar un alias para índice 
                (o la clave si es utilizado con un Objeto):
            </p>

            <img src="./img/ej6.png">

            <p>
                El comportamiento por defecto de v-for intentará corregir los 
                elementos in-place sin moverlos. Para forzar un reordanamiento de 
                elementos, usted debe proveer una pista de ordenamiento con el 
                atributo especial key:
            </p>

            <img src="./img/ej7.png">
            
            <hr>

            <h5 style="text-align: justify;">v-model</h5>

            <ul style="list-style: none; text-align: justify;">
                <li><strong>Espera: </strong>varía basado en el valor del input del formulario o salida de componentes</li>
                <li>
                    <strong>Limitado a:</strong>
                    <ul>
                        <li> < input ></li>
                        <li> < select ></li>
                        <li> < textarea ></li>
                        <li> componentes</li>
                    </ul>
                </li>
                <li>
                Modificadores:
                    <ul>
                        <li>.lazy - escucha un evento change en vez de input</li>
                        <li>.number - castea input válido de string a número</li>
                        <li>.trim - recorte automático</li>
                    </ul>
                </li>
            </ul>

            <h5 style="text-align: justify;">Uso:</h5>
            <p style="text-align: justify;">
                Crea un enlace bidireccional (two way binding) en un elemento de 
                formulario o componente. Por más detalles de su uso y otras notas, 
                vea la sección de guía referenciada abajo.
            </p>
        </div>
    `
});