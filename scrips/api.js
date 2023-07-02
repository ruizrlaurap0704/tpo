   const getNombreAxios = async()=>{
      try{
          const respuesta = await axios(`https://fakestoreapi.com/products`)
          console.log("Respuesta:", respuesta.data);
  
          const {createApp} = Vue 
              createApp({
                  data(){
                      return{
                          datos: respuesta.data
                      }
                  }
              }).mount("#api-axios")
  
      }catch(error){console.log("Hubo un error", error)}
        
  }
  
  getNombreAxios()

