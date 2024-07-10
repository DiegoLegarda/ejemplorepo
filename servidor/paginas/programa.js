async function conexion(){
    try{
        const respuesta= await axios.get('/saludo/juan');
        document.getElementById('respuesta').innerHTML=respuesta.data;
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}


//********************************************** */
async function llamadaPagina(){
    try{
        const respuesta= await axios.get('/home');       
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}

//******************************************** */
//  crear registro nuevo
async function crearRegistro(){
    const nomb=document.getElementById('nombre').value;
    console.log(nomb);
    const correo=document.getElementById('email').value;
    const contrasena=document.getElementById('password').value;
    try{
        const respuesta= await axios.post('/crearUsuario',{
            nombre:nomb,
            email:correo,
            password:contrasena })
        document.getElementById('respuesta').innerHTML=respuesta.data;
        if(respuesta.data){
            window.location.href = '/usuarioCreado';
        }
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}

document.getElementById('boton').addEventListener('click',crearRegistro);

//***************************************** */
// obtener todos los usuarios

async function cargarDatos() {
        try{
            const respuesta= await axios.get('/usuarios')        
        if (respuesta.data) {           
          const userList = document.getElementById('listaUsuarios');
          userList.innerHTML = ''; 
            respuesta.data.forEach(user => {
            const option = document.createElement('option');
            option.value = `${user.nombre}`;
            option.textContent = `${user.nombre}:${user.correo}:${user.contrasena}`;
            userList.appendChild(option);
          });
        }
    }
    catch(error){
        console.log(error); 
      }      
  }
  cargarDatos();

//***************************************** */
// obtener un usuario por nombre
async function buscarUsuario(){
    const userList=document.getElementById('listaUsuarios');
    const nomb = userList.value;
    console.log(nomb);
    try{
        const respuesta= await axios.post('/usuario/nombre',{
            nombre:nomb })
        document.getElementById('respuesta').innerHTML=`${respuesta.data.nombre} ${respuesta.data.correo} ${respuesta.data.contrasena}` ;
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}
  document.getElementById('boton2').addEventListener('click',buscarUsuario);
