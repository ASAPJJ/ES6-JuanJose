const listRepo = async() => {
    const repo = await fetch("https://api.github.com/repositories");
    const jsonRTA = repo.json();
    
    return jsonRTA
}
listRepo()
.then((Response)=>console.log(Response))
.catch((e)=>console.log(e))

//generar funcion que a partir de las respuestas del punto anterior retorne un array de los nombres de usuario(owner y login) de los repositorios utilizados

const nomArray = async() =>{
    const rta = await listRepo();
    const login = rta.map((nombre)=>nombre.owner.login);
    return login
}
nomArray()
.then((respuesta)=>console.log(respuesta))
.catch((error)=>console.log(error))

