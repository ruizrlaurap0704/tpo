const URL_API = 'https://fakestoreapi.com/products';


fetch(URL_API)
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))


const mostrarData = (data) => {
      console.log(data)

      let body = ''
      data.forEach(element => {
            body += `   <div>id: ${element.id}</div> 
                        <div>Titulo: ${element.title}</div>   
                        <div>Precio: ${element.price}</div>`
      })

      document.getElementById('cliente').innerHTML = body

}
      

