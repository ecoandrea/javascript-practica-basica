//try prueba un bloque de codigo buscando errore
//catch maneja el error
//throw crea un custom error
//finally permite ejecutar el codigo despues del try and cath independiente de lo que
// “intentar (try)” ejecutar el código y “atrapar (catch)” errores que pueden ocurrir en él



try {
    console.log('Start of try runs');
    
    unicycle;
  
    console.log('End of try runs -- never reached'); 
  
  } catch(err) {
  
    console.log('Error has occured: ' + err.stack); 
  
  } finally {
    console.log('This is always run'); 
  }
  
  console.log('...Then the execution continues');
  
  
  
  
  let json = '{ "age": 30 }';
   
  try {
   
    let user = JSON.parse(json); 
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name");
    }
   
    console.log( user.name );
   
  } catch(e) {
    console.log( "JSON Error: " + e ); 
  }
  
 

 