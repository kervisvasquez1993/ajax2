<?php

error_reporting(0); 
header('Content-type: application/json; charset=utf-8');
$conexion = new mysqli('localhost','root','Kervisvasquez1993','ajax');

if($conexion->connect_errno){
    $respuesta = [
        'error' => true
    ];
}else{
    $conexion->set_charset("utf8");
    $statement = $conexion->prepare("select * from usuarios");
    $statement->execute();
    $resutado = $statement->get_result();
  

    $respuesta = [];
            while($filas = $resutado->fetch_assoc()){
            $usuario=[
             'id' => $filas['ID'],
             'nombre' => $filas['nombre'],
             'edad' => $filas['edad'],
             'pais' => $filas['PAIS'],
             'correo' => $filas['CORREO']
    
                    ];

                    array_push($respuesta,$usuario);

    }
}

echo json_encode($respuesta);