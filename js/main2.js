var btn_cargar = document.getElementById('btn_cargar_usuarios');
var error_box = document.getElementById('error_box'),
    tabla = document.getElementById('tabla'),
    loader = document.getElementById('loader'),
    formulario = document.getElementById('formulario')

    var usuario_nombre,
        usuario_edad,
        usuario_pais,
        usuario_correo;
    function cargarUsuarios(){
       

        tabla.innerHTML='<tr><th>id</th><th>NOMBRE</th><th>EDAD</th><th>PAIS</th><th>CORREO</th>'
       

        var peticion = new XMLHttpRequest()
       

        peticion.open('GET','php/leer-datos.php' )
       

        loader.classList.add('active')
       

        peticion.onload = function(){
             var datos = JSON.parse(peticion.responseText)
            
             if (datos.error) {
                error_box.classList.add('active')
             }
             else{
                for( var i = 0; i < datos.length; i ++ ){
                    var elemento = document.createElement('tr')
                    elemento.innerHTML += ("<td>"+datos[i].id+"</tr>")
                    elemento.innerHTML += ("<td>"+datos[i].nombre+"</tr>")
                    elemento.innerHTML += ("<td>"+datos[i].edad+"</tr>")
                    elemento.innerHTML += ("<td>"+datos[i].pais+"</tr>")
                    elemento.innerHTML += ("<td>"+datos[i].correo+"</tr>")

                    tabla.appendChild(elemento)
                }
             }
        }
       

        peticion.onreadystatechange = function(){
            if(peticion.readyState == 4 && peticion.status == 200){
                loader.classList.remove('active')

            }
        }
       

        peticion.send();
    }
btn_cargar.addEventListener('click', function(){
    cargarUsuarios();
})

function agregarUsuario(e){
    e.preventDefault()

    var peticion = new XMLHttpRequest;
    peticion.open('POST', 'php/insertar.php')
    usuario_nombre = formulario.nombre.value.trim()
    usuario_edad = parseInt(formulario.edad.value.trim())
    usuario_pais = formulario.pais.value.trim()
    usuario_correo = formulario.correo.value.trim() 

    if (formulario_valido()) {
          console.log('ok')
    }
    else{
        
        error_box.classList.add('active')
        error_box.innerHTML = 'Por favor completa el formulario correctaente'
    }


}

formulario.addEventListener('submit', function(e){
    agregarUsuario(e)
})


function formulario_valido(){
    if(usuario_nombre == ''){
        return false
    }
    else if( isNaN(usuario_edad)){
        return false
    }
     else if ( usuario_pais == '') {
        return false 
     }
     else if(usuario_correo){
        return false
     }
}