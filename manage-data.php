<?php

//senha: estagiario123


 	header("Access-Control-Allow-Origin: *");
	

   // Define database connection parameters
   $hn      = 'http://192.168.10.8:81';
   $un      = 'root';
   $pwd     = 'estagiario123';
   $db      = 'viagensMobile';
   $cs      = 'utf8';

   // Set up the PDO parameters
   $dsn	= "mysql:host=" . $hn . ";port=3306;dbname=" . $db . ";charset=" . $cs;
//    $conn = new PDO("mysql:host=".$hn.";dbname=".$db."", $un, $pwd);
   $opt 	= array(
                        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                        PDO::ATTR_EMULATE_PREPARES   => false,
                       );
   // Create a PDO instance (connect to the database)
   $pdo	= new PDO($dsn, $un, $pwd, $opt);


   // Retrieve the posted data
   $json    =  file_get_contents('php://input');
   $obj     =  json_decode($json);
   $key     =  strip_tags($obj->key);


   // Determine which mode is being requested
   switch($key)
   {

      // Add a new record to the technologies table




      case "abastecimento":
      
               // Sanitise URL supplied values
               $motorista 		     = filter_var($obj->motorista, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $tipoPosto 		     = filter_var($obj->tipoPosto, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $data	  = filter_var($obj->data, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $tipoPagamento 		     = filter_var($obj->tipoPagamento, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $odometro 		     = filter_var($obj->odometro, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $litrosBomba1 		     = filter_var($obj->litrosBomba1, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $litrosBomba2 		     = filter_var($obj->litrosBomba2, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $precoBomba1 		     = filter_var($obj->precoBomba1, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $precoBomba2 		     = filter_var($obj->precoBomba2, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $posto 		     = filter_var($obj->precoBomba2, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

               // Attempt to run PDO prepared statement
               try {
                  $sql 	= "INSERT INTO abastecimento(motorista, tipoPosto, data, tipoPagamento, odometro, litrosBomba1, litrosBomba2, precoBomba1, precoBomba2, postoAbastecimento)
                   VALUES(:motorista, :tipoPosto, :data, :tipoPagamento,:odometro,:litrosBomba1, :litrosBomba2, :precoBomba1, :precoBomba2, :posto  )";
                  $stmt 	= $pdo->prepare($sql);
                  $stmt->bindParam(':motorista', $motorista, PDO::PARAM_STR);
                  $stmt->bindParam(':tipoPosto', $tipoPosto, PDO::PARAM_STR);
                  $stmt->bindParam(':data', $data, PDO::PARAM_STR);
                  $stmt->bindParam(':tipoPagamento', $tipoPagamento, PDO::PARAM_STR);
                  $stmt->bindParam(':odometro', $odometro, PDO::PARAM_STR);
                  $stmt->bindParam(':litrosBomba1', $litrosBomba1, PDO::PARAM_STR);
                  $stmt->bindParam(':litrosBomba2', $litrosBomba2, PDO::PARAM_STR);
                  $stmt->bindParam(':precoBomba1', $precoBomba1, PDO::PARAM_STR);
                  $stmt->bindParam(':precoBomba2', $precoBomba2, PDO::PARAM_STR);
                  $stmt->bindParam(':posto', $posto, PDO::PARAM_STR);
                  $stmt->execute();
      
                  echo json_encode(array('message' => 'O negocio de nome ' . $name . ' foi adiocionado com sucesso'));
               }
               // Catch any errors in running the prepared statement
               catch(PDOException $e)
               {
                  echo $e->getMessage();
               }
      
            break;


            case "receitas":
            
                  // Sanitise URL supplied values
                  $motorista 		     = filter_var($obj->motorista, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
                  $fornecedorOrigem 		     = filter_var($obj->fornecedorOrigem, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
                  $fornecedorDestino	  = filter_var($obj->fornecedorDestino, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
                  $produto 		     = filter_var($obj->produto, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
                  $tipoPagmt 		     = filter_var($obj->tipoPagmt, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
                  $idUnidadeMedida = filter_var($obj->idUnidadeMedida, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
                  $idSubUnidade 		     = filter_var($obj->idSubUnidade, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
                  $qntFaturado 		     = filter_var($obj->qntFaturado, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
                  $valorUnitario 		     = filter_var($obj->valorUnitario, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
                  $qntDescarregado		     = filter_var($obj->qntDescarregado, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
                  
                  
                  // Attempt to run PDO prepared statement
                  try {
                     $sql 	= 'INSERT INTO receitas(motorista, fornecedorOrigem, fornecedorDestino, produto, tipoPagmt, idUnidadeMedida, idSubUnidade, qntFaturado, qntDescarregado, valorUnitario)
                                          VALUES("'. $motorista .'", "' . $fornecedorOrigem . '"  , "'. $fornecedorDestino . '", "'. $produto . '","'. $tipoPagmt . '","'. $idUnidadeMedida . '", "'. $idSubUnidade . '", "'. $qntFaturado . '", "'. $qntDescarregado . '", "'. $valorUnitario . '")';
                     $stmt 	= $pdo->prepare($sql);
                     $stmt->bindParam(':fornecedorOrigem', $fornecedorOrigem, PDO::PARAM_STR);
                     $stmt->bindParam(':fornecedorDestino', $fornecedorDestino, PDO::PARAM_STR);                                          
                     $stmt->bindParam(':motorista', $motorista, PDO::PARAM_STR);
                     $stmt->bindParam(':produto', $produto, PDO::PARAM_STR);
                     $stmt->bindParam(':tipoPagmt', $tipoPagmt, PDO::PARAM_STR);
                     $stmt->bindParam(':idUnidadeMedida', $idUnidadeMedida, PDO::PARAM_STR);
                     $stmt->bindParam(':idSubUnidade', $idSubUnidade, PDO::PARAM_STR);
                     $stmt->bindParam(':qntFaturado', $qntFaturado, PDO::PARAM_STR);
                     $stmt->bindParam(':valorUnitario', $valorUnitario, PDO::PARAM_STR);
                     $stmt->bindParam(':qntDescarregado', $qntDescarregado, PDO::PARAM_STR);
                     $stmt->execute();
         
                     echo json_encode(array('message' => 'O negocio de nome ' . $name . ' foi adiocionado com sucesso'. $motorista . $fornecedorOrigem . $fornecedorDestino . $produto . $tipoPagmt . $idUnidadeMedida . $idSubUnidade . $qntFaturado . $valorUnitario . $qntDescarregado));
                  }
                  // Catch any errors in running the prepared statement
                  catch(PDOException $e)
                  {
                     echo $e->getMessage();
                  }
         
               break;



      case "despesa":
      
               // Sanitise URL supplied values
               $motorista 		     = filter_var($obj->motorista, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $despesa	  = filter_var($obj->despesa, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $data	  = filter_var($obj->data, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
               $valor	  = filter_var($obj->valor, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
      
               // Attempt to run PDO prepared statement
               try {
                  $sql 	= "INSERT INTO despesas(motorista, despesa, data, valor) VALUES(:motorista, :despesa, :data, :valor)";
                  $stmt 	= $pdo->prepare($sql);
                  $stmt->bindParam(':motorista', $motorista, PDO::PARAM_STR);
                  $stmt->bindParam(':despesa', $despesa, PDO::PARAM_STR);
                  $stmt->bindParam(':data', $data, PDO::PARAM_STR);
                  $stmt->bindParam(':valor', $valor, PDO::PARAM_STR);
                  $stmt->execute();
      
                  echo json_encode(array('message' => 'O negocio de nome ' . $name . ' foi adiocionado com sucesso'));
               }
               // Catch any errors in running the prepared statement
               catch(PDOException $e)
               {
                  echo $e->getMessage();
               }
      
            break;

            case "arla":
      
            // Sanitise URL supplied values
            $motorista 		     = filter_var($obj->motorista, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $tipoPosto 		     = filter_var($obj->tipoPosto, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $data	                 = filter_var($obj->data, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $posto 		     = filter_var($obj->posto, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $km 		           = filter_var($obj->km, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $litros 		     = filter_var($obj->litros, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $preco 		     = filter_var($obj->preco, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $formaPagamento 	     = filter_var($obj->formaPagamento, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $precoBomba2 	     = filter_var($obj->precoBomba2, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
            $posto 		     = filter_var($obj->precoBomba2, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

            // Attempt to run PDO prepared statement
            try {
               $sql 	= "INSERT INTO arla(motorista, tipoPosto, data, posto, km, litros, preco, formaPagamento)
                VALUES(:motorista, :tipoPosto, :data, :posto,:km,:litros, :preco, :formaPagamento  )";
               $stmt 	= $pdo->prepare($sql);
               $stmt->bindParam(':motorista', $motorista, PDO::PARAM_STR);
               $stmt->bindParam(':tipoPosto', $tipoPosto, PDO::PARAM_STR);
               $stmt->bindParam(':data', $data, PDO::PARAM_STR);
               $stmt->bindParam(':posto', $posto, PDO::PARAM_STR);
               $stmt->bindParam(':km', $km, PDO::PARAM_STR);
               $stmt->bindParam(':litros', $litros, PDO::PARAM_STR);
               $stmt->bindParam(':preco', $preco, PDO::PARAM_STR);
               $stmt->bindParam(':formaPagamento', $formaPagamento, PDO::PARAM_STR);
               $stmt->execute();
   
               echo json_encode(array('message' => 'O negocio de nome ' . $name . ' foi adiocionado com sucesso'));
            }
            // Catch any errors in running the prepared statement
            catch(PDOException $e)
            {
               echo $e->getMessage();
            }
   
         break;


      // Update an existing record in the technologies table
      case "update":

         // Sanitise URL supplied values
         $name 		     = filter_var($obj->name, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $description	  = filter_var($obj->description, FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $recordID	     = filter_var($obj->recordID, FILTER_SANITIZE_NUMBER_INT);

         // Attempt to run PDO prepared statement
         try {
            $sql 	= "UPDATE technologies SET name = :name, description = :description WHERE id = :recordID";
            $stmt 	=	$pdo->prepare($sql);
            $stmt->bindParam(':name', $name, PDO::PARAM_STR);
            $stmt->bindParam(':description', $description, PDO::PARAM_STR);
            $stmt->bindParam(':recordID', $recordID, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('Congratulations the record ' . $name . ' was updated');
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;



      // Remove an existing record in the technologies table
      case "delete":

         // Sanitise supplied record ID for matching to table record
         $recordID	=	filter_var($obj->recordID, FILTER_SANITIZE_NUMBER_INT);

         // Attempt to run PDO prepared statement
         try {
            $pdo 	= new PDO($dsn, $un, $pwd);
            $sql 	= "DELETE FROM technologies WHERE id = :recordID";
            $stmt 	= $pdo->prepare($sql);
            $stmt->bindParam(':recordID', $recordID, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('Congratulations the record ' . $name . ' was removed');
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;
   }

?>