<?php
error_reporting(0);
header('Content-type: application/json; charset=utf-8');
$nombre = $_POST['nombre'];
$edad = $_POST['edad'];
$pais = $_POST['pais'];
$correo = $_POST['correo'];

function validarDatos($nombre, $edad, $pais, $correo){
	if ($nombre == '') {
		return false;
	}
	elseif ($edad == '' || is_int($edad)) {
	 	return false;
	 } 
	 elseif ($pais == '') {
	 	return false;
	 }
	 elseif ($correo == '') {
	 	return false;
	 }

	 return true;
}

if (validarDatos($nombre,$edad,$pais$correo)){
	$conexion = new mysqli('localhost','root','Kervisvasquez1993','ajax');
	$conexion->set-charset('utf8');

	if ($conexion->connet_errno) {
	 $respuesta = ['error' => true];
	}
	else{
		$statement = $conexion->prepare('insert into usuarios(nombre,edad,PAIS,CORREO) values(?,?,?,?)');
		$statement->bind_param("siss"$nombre $edad,$pais,$correo);
		$statement->execute()

		if ($conexion->affected_rows <= 0) {
			$respuesta = ['error' => true];
		}


	}
}
else{
	$respuesta = ['error' => true]
}

$respuesta = [];

echo json_encode($respuesta);