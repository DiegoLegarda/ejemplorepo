// Crear registro nuevo
async function crearRegistro() {
    const nombre = document.getElementById('nombre').value;
    console.log(nombre)
    const correo = document.getElementById('email').value;
    const contrasena = document.getElementById('password').value;
    try {
        const respuesta = await axios.post('/crearUsuario', {
            nombre: nombre,
            email: correo,
            password: contrasena
        })
        
        if(respuesta.data){
            document.getElementById('FormRegistro').style.display="none";
            document.getElementById('boton').style.display="none";
            document.getElementById('respuesta').innerHTML="Gracias por registrarte";
        }
        console.log(respuesta.data);
    }
    catch (error) {
        console.log(error);
    }
}
document.getElementById('boton').addEventListener('click', crearRegistro);