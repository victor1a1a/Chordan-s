const contenedor = document.querySelector("#fila");
const URL = "./javascript/datos.json";

fetch(URL)
    .then((respuesta) => respuesta.json())
    .then((data) => datosEquipo(data));

const datosEquipo = (data) => {

    data.equipo.forEach((element) => {
        const redesSocialesHTML = element.redes_sociales
            .map((red) => {
                return `<a class="me-2" href="${red.link}"><img src="./img/svg/${red.name}.svg" alt="logo de ${red.name}" style="width: 25px; height: 25px;"></a>`;
            })
            .join("");

        const elemento = document.createElement("div");
        elemento.className = "col-sm-6 col-md-4";
        elemento.innerHTML = `
        <div class="card border-3">
            <div class="text-center mt-2">
                <img src="${element.img}" class="card-img-top rounded-circle" alt="${element.nombre}" style="width: 125px; height: 125px; object-fit: cover;">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title fs-5">${element.nombre}</h5>
                <p class="card-text fs-6">${element.rol}</p>
                ${redesSocialesHTML}
            </div>
        </div>  
    `;
        contenedor.append(elemento);
    })
}

// No hay necesidad de un console.log aquí ya que element.redes_sociales no es accesible fuera del forEach

/*
        {
            "nombre": "José García",
            "rol": "Director de Recursos Humanos",
            "redes_sociales": [
                {
                    "name": "GitHub",
                    "link": "http//"
                }
            ]
        }
        */


