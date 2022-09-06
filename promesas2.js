const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
async function obtenerPcias() {
    try {
        await retrasar(1800);

        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
        rtajson = consulta.json();
        return rtajson;
    } catch (error) {
        console.log(error)
    }
}

// Función que retorna los datos de departamentos
async function obtenerDptos() {
    try {
        await retrasar(1391);
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/departamentos');
        const rtajson = consulta.json();
        return rtajson;
    } catch (error) {
        console.log(error)
    }
}

// Función que retorna los datos de localidades
async function obtenerLocalidades() {
    try {
        await retrasar(900);
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/localidades');
        const rtajson = consulta.json();
        return rtajson;
    } catch (error) {
        console.log(error);
    }
}




// Funcion para obtener todos los datos
const consultarDatos = async () => {
    const provincias = await obtenerPcias();
    const dptos = await obtenerDptos();
    const localidades = await obtenerLocalidades();

    console.log(provincias);
    console.log(dptos);
    console.log(localidades);
}

consultarDatos();