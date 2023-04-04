// const technology1 = document.getElementById('technology1');
// const technology2 = document.getElementById('technology2');
// const technology3 = document.getElementById('technology3');

// technology1.addEventListener('click', () => {
//   fetch('../../data.json')
//     .then(response => response.json())
//     .then(data => {
//       const technology = data.technology[0];
//       document.getElementById('name').textContent = technology.name;
//       document.getElementById('img').src = technology.images.landscape;
//       document.getElementById('description').textContent = technology.description;
//     });
// });

// technology2.addEventListener('click', () => {
//     fetch('../../data.json')
//       .then(response => response.json())
//       .then(data => {
//         const technology = data.technology[1];
//         document.getElementById('name').textContent = technology.name;
//         document.getElementById('img').src = technology.images.landscape;
//         document.getElementById('description').textContent = technology.description;
//       });
//   });

//   technology3.addEventListener('click', () => {
//     fetch('../../data.json')
//       .then(response => response.json())
//       .then(data => {
//         const technology = data.technology[2];
//         document.getElementById('name').textContent = technology.name;
//         document.getElementById('img').src = technology.images.landscape;
//         document.getElementById('description').textContent = technology.description;
//       });
//   });

  // A Probar luego
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
        const imagen = data.technology[index].images.landscape;
        const descripcion = data.technology[index].description;

        // Modificar el HTML
        document.querySelector('#name').textContent = nombre;
        document.querySelector('#img').setAttribute('src', imagen);
        document.querySelector('#description').textContent = descripcion;
      });
    });
  });
