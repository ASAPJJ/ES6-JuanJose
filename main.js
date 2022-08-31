// const saludar = (nombre)=> {
//     return `Hola ${nombre}`;
// }

// // Mostrar el resultado por consola
// console.log(saludar('Alejandro'));

// function multiplicar(a, b){
//     return console.log(a+b);
// }

// // Mostrar el resultado por consola
// multiplicar(3, 15)

// function crearAlumno(nombre, apellido, edad, materias){
//     let alumno = {
//         nombre,
//         apellido,
//         edad,
//         materias
//     }

//     return console.log(alumno);
// }

// // Mostrar el resultado por consola.
// crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés'])

// const devolverFecha = (dia, mes, año)=>{
//     return console.log(`Hoy es ${dia}/${mes}/${año}`);
// }

// // Mostrar el resultado por consola.
// devolverFecha('10','09','2022');

    // Promesa almacenada en una constante
    // const promesa = new Promise((resolve, reject)=>{

    //     if( 10 === 11){
    //         resolve('Los valores son iguales');
    //     } else {
    //         reject('Los valores son distintos')
    //     }

    // });

    // promesa
    // .then(GOD=>console.log(GOD))
    // .catch(GODNT=>console.log(GODNT))

        // Promesa dentro en una función.
        // function promesaDos(provincia){

        //     const promesa = ('Formosa'===provincia)?('Usted está ubicado en Formosa'):('Error al realizar la consulta');
    
        //     return console.log(promesa);
        // }
    
        // promesaDos('Formosa')

        // function promesaTres(valorBooleano){

        //     new Promise( (resolve, reject)=> {
        //         ( true === valorBooleano )
        //         ? resolve('Los valores son iguales')
        //         : reject('Los valores son distintos')
        //     })
    
        //     .then(aceptable=>console.log(aceptable))
        // }
        // promesaTres(true)

        // const promesaCuatro = async (arguments)=>{
        //     await new Promise( (resolve, reject)=> {
        //         ( arguments === true )
        //         ? resolve('Los valores son iguales')
        //         : reject('Los valores son distintos')
        //     })
        // }
        // let uno = undefined;
        // promesaCuatro(uno).then((aceptable)=>{console.log(aceptable)}).catch((err)=>{console.log(err)})