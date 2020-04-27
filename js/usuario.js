function VerificarUsuario(){
    var usu = $("#txt_usu").val();
    var con = $("#txt_con").val();

    if (usu.length==0 || con.length==0){
        return Swal.fire("Mensaje de Advertencia","Llene los campos vacíos","warning")
    }
    $.ajax({
        url:'../controlador/usuario/controlador_verificar_usuario.php',
        type:'POST',    
        data:{
            user:usu,
            pass:con,
        }
    }).done (function(resp){
        if(resp==0){
            Swal.fire("Mensaje de error","Usuario y/o contrase\u00f1a incorrecta","error");
            
        }else{
            Swal.fire("Mensaje de confirmación","Bienvenido al sistema","success");
        }
    })
}