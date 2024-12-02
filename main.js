const QUIZ = [
    {
        pregunta: "¿Cuál es la capital de Costa Rica?",
        alternaitvas: ["San José", "Madrid", "Lima"],
        correcta: "San José"
    },
    {
        pregunta: "¿Cuál es el país más grande del mundo?",
        alternaitvas: ["Brasil", "Rusia", "Alemania"],
        correcta: "Rusia"
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        alternaitvas: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
        correcta: "Leonardo da Vinci"
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        alternaitvas: ["Atlántico", "Índico", "Pacífico"],
        correcta: "Pacífico"
    },
    {
        pregunta: "¿En qué año llegó el hombre a la Luna?",
        alternaitvas: ["1969", "1975", "1980"],
        correcta: "1969"
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        alternaitvas: ["Marte", "Júpiter", "Saturno"],
        correcta: "Júpiter"
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        alternaitvas: ["Amazonas", "Nilo", "Yangtsé"],
        correcta: "Amazonas"
    },
    {
        pregunta: "¿Cuál es el animal terrestre más rápido?",
        alternaitvas: ["León", "Guepardo", "Antílope"],
        correcta: "Guepardo"
    },
    {
        pregunta: "¿Cuál es el metal más caro del mundo?",
        alternaitvas: ["Oro", "Plata", "Rodio"],
        correcta: "Rodio"
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        alternaitvas: ["Gabriel García Márquez", "Julio Cortázar", "Mario Vargas Llosa"],
        correcta: "Gabriel García Márquez"
    },
    {
        pregunta: "¿Cuál es la capital de Australia?",
        alternaitvas: ["Sídney", "Melbourne", "Canberra"],
        correcta: "Canberra"
    },
    {
        pregunta: "¿Cuántos colores tiene el arcoíris?",
        alternaitvas: ["7", "5", "8"],
        correcta: "7"
    },
    {
        pregunta: "¿Cuál es el país con más habitantes en el mundo?",
        alternaitvas: ["India", "Estados Unidos", "China"],
        correcta: "China"
    },
    {
        pregunta: "¿Cuál es el himno nacional de Francia?",
        alternaitvas: ["God Save the Queen", "La Marseillaise", "O Canada"],
        correcta: "La Marseillaise"
    },
    {
        pregunta: "¿Qué instrumento toca Lisa Simpson?",
        alternaitvas: ["Guitarra", "Saxofón", "Piano"],
        correcta: "Saxofón"
    },
    {
        pregunta: "¿En qué continente se encuentra Egipto?",
        alternaitvas: ["Asia", "África", "Europa"],
        correcta: "África"
    },
    {
        pregunta: "¿Cuál es el país más pequeño del mundo?",
        alternaitvas: ["Mónaco", "Malta", "Vaticano"],
        correcta: "Vaticano"
    },
    {
        pregunta: "¿Qué gas se encuentra en mayor proporción en la atmósfera terrestre?",
        alternaitvas: ["Oxígeno", "Nitrógeno", "Dióxido de carbono"],
        correcta: "Nitrógeno"
    },
    {
        pregunta: "¿Cuál es el único mamífero capaz de volar?",
        alternaitvas: ["Murciélago", "Avestruz", "Pingüino"],
        correcta: "Murciélago"
    },
    {
        pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
        alternaitvas: ["1939", "1941", "1945"],
        correcta: "1939"
    },
    {
        pregunta: "¿Cuál es la capital de Canadá?",
        alternaitvas: ["Toronto", "Vancouver", "Ottawa"],
        correcta: "Ottawa"
    },
    {
        pregunta: "¿Qué tipo de animal es la ballena?",
        alternaitvas: ["Pez", "Reptil", "Mamífero"],
        correcta: "Mamífero"
    },
    {
        pregunta: "¿Cuál es el símbolo químico del oro?",
        alternaitvas: ["Au", "Ag", "O"],
        correcta: "Au"
    },
    {
        pregunta: "¿Qué país es famoso por la Torre Eiffel?",
        alternaitvas: ["Italia", "España", "Francia"],
        correcta: "Francia"
    },
    {
        pregunta: "¿En qué continente está el desierto del Sahara?",
        alternaitvas: ["Asia", "África", "Oceanía"],
        correcta: "África"
    },
    {
        pregunta: "¿Quién desarrolló la teoría de la relatividad?",
        alternaitvas: ["Isaac Newton", "Albert Einstein", "Niels Bohr"],
        correcta: "Albert Einstein"
    },
    {
        pregunta: "¿Cuál es el ave nacional de los Estados Unidos?",
        alternaitvas: ["Águila calva", "Cóndor", "Halcón"],
        correcta: "Águila calva"
    },
    {
        pregunta: "¿Cuál es el nombre del rey actual de España?",
        alternaitvas: ["Felipe VI", "Juan Carlos I", "Carlos III"],
        correcta: "Felipe VI"
    },
    {
        pregunta: "¿Cuántos planetas hay en el sistema solar?",
        alternaitvas: ["7", "8", "9"],
        correcta: "8"
    },
    {
        pregunta: "¿Qué país ganó el Mundial de Fútbol de 2014?",
        alternaitvas: ["Argentina", "Brasil", "Alemania"],
        correcta: "Alemania"
    },
    {
        pregunta: "¿Cuál es la capital de Japón?",
        alternaitvas: ["Seúl", "Tokio", "Pekín"],
        correcta: "Tokio"
    },
    {
        pregunta: "¿Cuál es el continente más pequeño del mundo?",
        alternaitvas: ["Oceanía", "Europa", "Asia"],
        correcta: "Oceanía"
    },
    {
        pregunta: "¿Qué océano está al este de África?",
        alternaitvas: ["Atlántico", "Índico", "Pacífico"],
        correcta: "Índico"
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
        alternaitvas: ["Cervantes", "Lope de Vega", "Garcilaso de la Vega"],
        correcta: "Cervantes"
    },
    {
        pregunta: "¿Cuál es la moneda oficial de Japón?",
        alternaitvas: ["Yen", "Won", "Dólar"],
        correcta: "Yen"
    },
    {
        pregunta: "¿Qué país es conocido como la tierra de los tulipanes?",
        alternaitvas: ["Bélgica", "Holanda", "Dinamarca"],
        correcta: "Holanda"
    },
    {
        pregunta: "¿Cuál es el idioma más hablado del mundo?",
        alternaitvas: ["Inglés", "Mandarín", "Español"],
        correcta: "Mandarín"
    },
    {
        pregunta: "¿Qué gas es esencial para la respiración humana?",
        alternaitvas: ["Helio", "Oxígeno", "Dióxido de carbono"],
        correcta: "Oxígeno"
    },
    {
        pregunta: "¿Cuál es el órgano más grande del cuerpo humano?",
        alternaitvas: ["Hígado", "Piel", "Corazón"],
        correcta: "Piel"
    },
    {
        pregunta: "¿Cuál es la capital de Argentina?",
        alternaitvas: ["Santiago", "Buenos Aires", "Lima"],
        correcta: "Buenos Aires"
    },
    {
        pregunta: "¿Qué planeta es conocido como el planeta rojo?",
        alternaitvas: ["Marte", "Venus", "Júpiter"],
        correcta: "Marte"
    },
    {
        pregunta: "¿Qué instrumento musical tiene teclas blancas y negras?",
        alternaitvas: ["Piano", "Guitarra", "Trompeta"],
        correcta: "Piano"
    },
    {
        pregunta: "¿Cuál es la montaña más alta del mundo?",
        alternaitvas: ["K2", "Kilimanjaro", "Everest"],
        correcta: "Everest"
    },
    {
        pregunta: "¿Quién es conocido como el padre de la física moderna?",
        alternaitvas: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
        correcta: "Albert Einstein"
    },
    {
        pregunta: "¿Qué continente tiene más países?",
        alternaitvas: ["África", "Asia", "Europa"],
        correcta: "África"
    },
    {
        pregunta: "¿Cuál es el primer mes del año?",
        alternaitvas: ["Enero", "Febrero", "Marzo"],
        correcta: "Enero"
    },
    {
        pregunta: "¿Cuál es el símbolo químico del agua?",
        alternaitvas: ["H2O", "O2", "CO2"],
        correcta: "H2O"
    },
    {
        pregunta: "¿Qué país es famoso por su chocolate?",
        alternaitvas: ["Suiza", "Francia", "Bélgica"],
        correcta: "Suiza"
    },
    {
        pregunta: "¿Quién fue el primer presidente de Estados Unidos?",
        alternaitvas: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
        correcta: "George Washington"
    },
    {
        pregunta: "¿Cuál es la capital de Italia?",
        alternaitvas: ["Milán", "Roma", "Venecia"],
        correcta: "Roma"
    },
    {
        pregunta: "¿Qué parte del cuerpo humano tiene más huesos?",
        alternaitvas: ["Manos", "Pies", "Cráneo"],
        correcta: "Manos"
    },
    {
        pregunta: "¿Cuál es la capital de México?",
        alternaitvas: ["Guadalajara", "Cancún", "Ciudad de México"],
        correcta: "Ciudad de México"
    },
    {
        pregunta: "¿Cuál es el nombre de la famosa torre en Pisa, Italia?",
        alternaitvas: ["Torre de Pisa", "Torre Eiffel", "Torre de Londres"],
        correcta: "Torre de Pisa"
    },
    {
        pregunta: "¿Qué país es famoso por su carnaval?",
        alternaitvas: ["Brasil", "Argentina", "Chile"],
        correcta: "Brasil"
    },
    {
        pregunta: "¿Qué animal es conocido como el 'rey de la selva'?",
        alternaitvas: ["León", "Tigre", "Elefante"],
        correcta: "León"
    },
    {
        pregunta: "¿Cuál es el continente donde se encuentra el Amazonas?",
        alternaitvas: ["Asia", "África", "América del Sur"],
        correcta: "América del Sur"
    },
    {
        pregunta: "¿Cuál es la capital de Alemania?",
        alternaitvas: ["Berlín", "Múnich", "Fráncfort"],
        correcta: "Berlín"
    },
    {
        pregunta: "¿Qué instrumento mide la temperatura?",
        alternaitvas: ["Barómetro", "Termómetro", "Higrómetro"],
        correcta: "Termómetro"
    },
    {
        pregunta: "¿Qué famoso científico desarrolló la teoría de la evolución?",
        alternaitvas: ["Charles Darwin", "Isaac Newton", "Galileo Galilei"],
        correcta: "Charles Darwin"
    },
    {
        pregunta: "¿Qué animal es el más grande del mundo?",
        alternaitvas: ["Ballena azul", "Elefante", "Rinoceronte"],
        correcta: "Ballena azul"
    }
];

let correctas = 0;
let incorrectas = 0;

let btnComenzar = document.querySelector("#comenzar");
let pregunta = document.querySelector("#pregunta");

btnComenzar.addEventListener("click", comenzar);

function comenzar() {
    btnComenzar.remove();
    hacerPreguntas();
}

function hacerPreguntas() {
    let preguntasRestantes = [
        {
            pregunta: "¿Cuál es la capital de Costa Rica?",
            alternaitvas: ["San José", "Madrid", "Lima"],
            correcta: "San José"
        },
        {
            pregunta: "¿Cuál es el país más grande del mundo?",
            alternaitvas: ["Brasil", "Rusia", "Alemania"],
            correcta: "Rusia"
        },
        {
            pregunta: "¿Quién pintó la Mona Lisa?",
            alternaitvas: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
            correcta: "Leonardo da Vinci"
        },
        {
            pregunta: "¿Cuál es el océano más grande del mundo?",
            alternaitvas: ["Atlántico", "Índico", "Pacífico"],
            correcta: "Pacífico"
        },
        {
            pregunta: "¿En qué año llegó el hombre a la Luna?",
            alternaitvas: ["1969", "1975", "1980"],
            correcta: "1969"
        },
        {
            pregunta: "¿Cuál es el planeta más grande del sistema solar?",
            alternaitvas: ["Marte", "Júpiter", "Saturno"],
            correcta: "Júpiter"
        },
        {
            pregunta: "¿Cuál es el río más largo del mundo?",
            alternaitvas: ["Amazonas", "Nilo", "Yangtsé"],
            correcta: "Amazonas"
        },
        {
            pregunta: "¿Cuál es el animal terrestre más rápido?",
            alternaitvas: ["León", "Guepardo", "Antílope"],
            correcta: "Guepardo"
        },
        {
            pregunta: "¿Cuál es el metal más caro del mundo?",
            alternaitvas: ["Oro", "Plata", "Rodio"],
            correcta: "Rodio"
        },
        {
            pregunta: "¿Quién escribió 'Cien años de soledad'?",
            alternaitvas: ["Gabriel García Márquez", "Julio Cortázar", "Mario Vargas Llosa"],
            correcta: "Gabriel García Márquez"
        },
        {
            pregunta: "¿Cuál es la capital de Australia?",
            alternaitvas: ["Sídney", "Melbourne", "Canberra"],
            correcta: "Canberra"
        },
        {
            pregunta: "¿Cuántos colores tiene el arcoíris?",
            alternaitvas: ["7", "5", "8"],
            correcta: "7"
        },
        {
            pregunta: "¿Cuál es el país con más habitantes en el mundo?",
            alternaitvas: ["India", "Estados Unidos", "China"],
            correcta: "China"
        },
        {
            pregunta: "¿Cuál es el himno nacional de Francia?",
            alternaitvas: ["God Save the Queen", "La Marseillaise", "O Canada"],
            correcta: "La Marseillaise"
        },
        {
            pregunta: "¿Qué instrumento toca Lisa Simpson?",
            alternaitvas: ["Guitarra", "Saxofón", "Piano"],
            correcta: "Saxofón"
        },
        {
            pregunta: "¿En qué continente se encuentra Egipto?",
            alternaitvas: ["Asia", "África", "Europa"],
            correcta: "África"
        },
        {
            pregunta: "¿Cuál es el país más pequeño del mundo?",
            alternaitvas: ["Mónaco", "Malta", "Vaticano"],
            correcta: "Vaticano"
        },
        {
            pregunta: "¿Qué gas se encuentra en mayor proporción en la atmósfera terrestre?",
            alternaitvas: ["Oxígeno", "Nitrógeno", "Dióxido de carbono"],
            correcta: "Nitrógeno"
        },
        {
            pregunta: "¿Cuál es el único mamífero capaz de volar?",
            alternaitvas: ["Murciélago", "Avestruz", "Pingüino"],
            correcta: "Murciélago"
        },
        {
            pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
            alternaitvas: ["1939", "1941", "1945"],
            correcta: "1939"
        },
        {
            pregunta: "¿Cuál es la capital de Canadá?",
            alternaitvas: ["Toronto", "Vancouver", "Ottawa"],
            correcta: "Ottawa"
        },
        {
            pregunta: "¿Qué tipo de animal es la ballena?",
            alternaitvas: ["Pez", "Reptil", "Mamífero"],
            correcta: "Mamífero"
        },
        {
            pregunta: "¿Cuál es el símbolo químico del oro?",
            alternaitvas: ["Au", "Ag", "O"],
            correcta: "Au"
        },
        {
            pregunta: "¿Qué país es famoso por la Torre Eiffel?",
            alternaitvas: ["Italia", "España", "Francia"],
            correcta: "Francia"
        },
        {
            pregunta: "¿En qué continente está el desierto del Sahara?",
            alternaitvas: ["Asia", "África", "Oceanía"],
            correcta: "África"
        },
        {
            pregunta: "¿Quién desarrolló la teoría de la relatividad?",
            alternaitvas: ["Isaac Newton", "Albert Einstein", "Niels Bohr"],
            correcta: "Albert Einstein"
        },
        {
            pregunta: "¿Cuál es el ave nacional de los Estados Unidos?",
            alternaitvas: ["Águila calva", "Cóndor", "Halcón"],
            correcta: "Águila calva"
        },
        {
            pregunta: "¿Cuál es el nombre del rey actual de España?",
            alternaitvas: ["Felipe VI", "Juan Carlos I", "Carlos III"],
            correcta: "Felipe VI"
        },
        {
            pregunta: "¿Cuántos planetas hay en el sistema solar?",
            alternaitvas: ["7", "8", "9"],
            correcta: "8"
        },
        {
            pregunta: "¿Qué país ganó el Mundial de Fútbol de 2014?",
            alternaitvas: ["Argentina", "Brasil", "Alemania"],
            correcta: "Alemania"
        },
        {
            pregunta: "¿Cuál es la capital de Japón?",
            alternaitvas: ["Seúl", "Tokio", "Pekín"],
            correcta: "Tokio"
        },
        {
            pregunta: "¿Cuál es el continente más pequeño del mundo?",
            alternaitvas: ["Oceanía", "Europa", "Asia"],
            correcta: "Oceanía"
        },
        {
            pregunta: "¿Qué océano está al este de África?",
            alternaitvas: ["Atlántico", "Índico", "Pacífico"],
            correcta: "Índico"
        },
        {
            pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
            alternaitvas: ["Cervantes", "Lope de Vega", "Garcilaso de la Vega"],
            correcta: "Cervantes"
        },
        {
            pregunta: "¿Cuál es la moneda oficial de Japón?",
            alternaitvas: ["Yen", "Won", "Dólar"],
            correcta: "Yen"
        },
        {
            pregunta: "¿Qué país es conocido como la tierra de los tulipanes?",
            alternaitvas: ["Bélgica", "Holanda", "Dinamarca"],
            correcta: "Holanda"
        },
        {
            pregunta: "¿Cuál es el idioma más hablado del mundo?",
            alternaitvas: ["Inglés", "Mandarín", "Español"],
            correcta: "Mandarín"
        },
        {
            pregunta: "¿Qué gas es esencial para la respiración humana?",
            alternaitvas: ["Helio", "Oxígeno", "Dióxido de carbono"],
            correcta: "Oxígeno"
        },
        {
            pregunta: "¿Cuál es el órgano más grande del cuerpo humano?",
            alternaitvas: ["Hígado", "Piel", "Corazón"],
            correcta: "Piel"
        },
        {
            pregunta: "¿Cuál es la capital de Argentina?",
            alternaitvas: ["Santiago", "Buenos Aires", "Lima"],
            correcta: "Buenos Aires"
        },
        {
            pregunta: "¿Qué planeta es conocido como el planeta rojo?",
            alternaitvas: ["Marte", "Venus", "Júpiter"],
            correcta: "Marte"
        },
        {
            pregunta: "¿Qué instrumento musical tiene teclas blancas y negras?",
            alternaitvas: ["Piano", "Guitarra", "Trompeta"],
            correcta: "Piano"
        },
        {
            pregunta: "¿Cuál es la montaña más alta del mundo?",
            alternaitvas: ["K2", "Kilimanjaro", "Everest"],
            correcta: "Everest"
        },
        {
            pregunta: "¿Quién es conocido como el padre de la física moderna?",
            alternaitvas: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
            correcta: "Albert Einstein"
        },
        {
            pregunta: "¿Qué continente tiene más países?",
            alternaitvas: ["África", "Asia", "Europa"],
            correcta: "África"
        },
        {
            pregunta: "¿Cuál es el primer mes del año?",
            alternaitvas: ["Enero", "Febrero", "Marzo"],
            correcta: "Enero"
        },
        {
            pregunta: "¿Cuál es el símbolo químico del agua?",
            alternaitvas: ["H2O", "O2", "CO2"],
            correcta: "H2O"
        },
        {
            pregunta: "¿Qué país es famoso por su chocolate?",
            alternaitvas: ["Suiza", "Francia", "Bélgica"],
            correcta: "Suiza"
        },
        {
            pregunta: "¿Quién fue el primer presidente de Estados Unidos?",
            alternaitvas: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
            correcta: "George Washington"
        },
        {
            pregunta: "¿Cuál es la capital de Italia?",
            alternaitvas: ["Milán", "Roma", "Venecia"],
            correcta: "Roma"
        },
        {
            pregunta: "¿Qué parte del cuerpo humano tiene más huesos?",
            alternaitvas: ["Manos", "Pies", "Cráneo"],
            correcta: "Manos"
        },
        {
            pregunta: "¿Cuál es la capital de México?",
            alternaitvas: ["Guadalajara", "Cancún", "Ciudad de México"],
            correcta: "Ciudad de México"
        },
        {
            pregunta: "¿Cuál es el nombre de la famosa torre en Pisa, Italia?",
            alternaitvas: ["Torre de Pisa", "Torre Eiffel", "Torre de Londres"],
            correcta: "Torre de Pisa"
        },
        {
            pregunta: "¿Qué país es famoso por su carnaval?",
            alternaitvas: ["Brasil", "Argentina", "Chile"],
            correcta: "Brasil"
        },
        {
            pregunta: "¿Qué animal es conocido como el 'rey de la selva'?",
            alternaitvas: ["León", "Tigre", "Elefante"],
            correcta: "León"
        },
        {
            pregunta: "¿Cuál es el continente donde se encuentra el Amazonas?",
            alternaitvas: ["Asia", "África", "América del Sur"],
            correcta: "América del Sur"
        },
        {
            pregunta: "¿Cuál es la capital de Alemania?",
            alternaitvas: ["Berlín", "Múnich", "Fráncfort"],
            correcta: "Berlín"
        },
        {
            pregunta: "¿Qué instrumento mide la temperatura?",
            alternaitvas: ["Barómetro", "Termómetro", "Higrómetro"],
            correcta: "Termómetro"
        },
        {
            pregunta: "¿Qué famoso científico desarrolló la teoría de la evolución?",
            alternaitvas: ["Charles Darwin", "Isaac Newton", "Galileo Galilei"],
            correcta: "Charles Darwin"
        },
        {
            pregunta: "¿Qué animal es el más grande del mundo?",
            alternaitvas: ["Ballena azul", "Elefante", "Rinoceronte"],
            correcta: "Ballena azul"
        }
    ];
    let i = 0;

    function siguientePregunta() {
        if (i >= 10 || preguntasRestantes.length === 0) { 
            pregunta.innerHTML = "Has terminado el juego";
            let end =  document.createElement("h1");
            end.innerHTML = `Has acertado ${correctas} preguntas y fallado ${incorrectas} preguntas`;
            document.body.appendChild(end);
            let reinicio = document.createElement("button");
            reinicio.innerHTML = "Reiniciar";
            reinicio.className = "reiniciar";
            reinicio.addEventListener("click", () => {
                window.location.reload();
            });
            document.body.appendChild(reinicio);
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * preguntasRestantes.length);
        const objetoAleatorio = preguntasRestantes[indiceAleatorio];

        pregunta.innerHTML = objetoAleatorio.pregunta;

        let contenedorOpciones = document.createElement("div");
        contenedorOpciones.className = "contenedorOpciones";

        objetoAleatorio.alternaitvas.forEach(opcion => {
            let opcionDiv = document.createElement("div");
            opcionDiv.className = "opcion";
            opcionDiv.innerHTML = opcion;

            opcionDiv.addEventListener("click", () => {
                if (opcionDiv.innerHTML === objetoAleatorio.correcta) {
                    opcionDiv.classList.add("correcta");
                    correctas++;
                } else {
                    opcionDiv.classList.add("incorrecta");
                    incorrectas++;
                }
                
                setTimeout(() => {
                    contenedorOpciones.remove();
                    preguntasRestantes.splice(indiceAleatorio, 1);
                    i++;
                    siguientePregunta();
                }, 300);
            });

            contenedorOpciones.appendChild(opcionDiv);
        });

        pregunta.appendChild(contenedorOpciones);
    }

    siguientePregunta();
    

}





