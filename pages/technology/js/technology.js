
// Cargar el archivo JSON
const url = '../../data.json';
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Agregar evento de clic a cada botón
    document.querySelectorAll('#options li').forEach((li, index) => {
      li.addEventListener('click', () => {
        // Obtener los datos correspondientes del JSON
        const nombre = data.technology[index].name;
        // const imagen = data.technology[index].images.landscape;
        const descripcion = data.technology[index].description;

        if(window.innerWidth >= 1200){
          const imagen = data.technology[index].images.portrait;
          document.querySelector('#img2').setAttribute('src', imagen);
        } else{
          const imagen = data.technology[index].images.landscape;
          document.querySelector('#img').setAttribute('src', imagen);
        }

        // Modificar el HTML
        document.querySelector('#name').textContent = nombre;
        // document.querySelector('#img').setAttribute('src', imagen);
        document.querySelector('#description').textContent = descripcion;
      });
    });
  });