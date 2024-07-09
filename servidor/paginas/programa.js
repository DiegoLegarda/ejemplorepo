async function conexion(){
    try{
        const respuesta = await axios.get('/saludo/juan');
        document.getElementById('respuesta').innerHTML = respuesta.data;
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}


//************************************************** */
async function llamadaPagina(){
    try{
        const respuesta = await axios.get('/home');
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}

//**************************************** */
// Crear registro nuevo
async function crearRegistro(){
    const nombre = document.getElementById('nombre').value;
    console.log(nombre)
    const correo=document.getElementById('email').value;
    const contrasena=document.getElementById('password').value;
    try{
        const respuesta= await axios.post('/crearUsuario',{
            nombre:nombre,
            email:correo,
            password:contrasena })
        document.getElementById('respuesta').innerHTML=respuesta.data;
        console.log(respuesta.data);
    }
    catch (error) {
        console.log(error);
         }
 }
document.getElementById('boton').addEventListener('click',crearRegistro);