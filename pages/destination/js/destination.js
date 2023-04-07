// document.getElementById('destination1').addEventListener('click', () => cambiarContenido('destination1'));
// document.getElementById('destination2').addEventListener('click', () => cambiarContenido('destination2'));
// document.getElementById('destination3').addEventListener('click', () => cambiarContenido('destination3'));
// document.getElementById('destination4').addEventListener('click', () => cambiarContenido('destination4'));

// function cambiarContenido(boton) {
//   // Cargar los datos del archivo JSON
//   fetch('../../data.json')
//     .then(response => response.json())
//     .then(data => {
//       // Obtener los datos correspondientes al botón
//       const contenido = data.destinations[boton];
//       // Modificar el contenido HTML
//       document.getElementById('name').textContent = contenido.name;
//       document.getElementById('image').src = contenido.images[0];
//       document.getElementById('description').textContent = contenido.description;
//       document.getElementById('distance').textContent = contenido.distance;
//       document.getElementById('travel').textContent = contenido.travel;
//     })
//     .catch(error => console.error(error));
// }

const travels = document.querySelectorAll('.destiny');

travels.forEach(travel => {
  travel.addEventListener('click', function() {
    travels.forEach(travel => {
      travel.classList.remove('active');
    });
    this.classList.add('active');
  });
});

const option1 = document.getElementById('destination1');
const option2 = document.getElementById('destination2');
const option3 = document.getElementById('destination3');
const option4 = document.getElementById('destination4');

option1.addEventListener('click', () => {
  fetch('../../data.json')
    .then(response => response.json())
    .then(data => {
      const destino = data.destinations[0];
      document.getElementById('name').textContent = destino.name;
      document.getElementById('image').src = destino.images.png;
      document.getElementById('description').textContent = destino.description;
      document.getElementById('distance').textContent = destino.distance;
      document.getElementById('travel').textContent = destino.travel;
    });
});

option2.addEventListener('click', () => {
  fetch('../../data.json')
    .then(response => response.json())
    .then(data => {
      const destino = data.destinations[1];
      document.getElementById('name').textContent = destino.name;
      document.getElementById('image').src = destino.images.png;
      document.getElementById('description').textContent = destino.description;
      document.getElementById('distance').textContent = destino.distance;
      document.getElementById('travel').textContent = destino.travel;
    });
});

option3.addEventListener('click', () => {
  fetch('../../data.json')
    .then(response => response.json())
    .then(data => {
      const destino = data.destinations[2];
      document.getElementById('name').textContent = destino.name;
      document.getElementById('image').src = destino.images.png;
      document.getElementById('description').textContent = destino.description;
      document.getElementById('distance').textContent = destino.distance;
      document.getElementById('travel').textContent = destino.travel;
    });
});

option4.addEventListener('click', () => {
  fetch('../../data.json')
    .then(response => response.json())
    .then(data => {
      const destino = data.destinations[3];
      document.getElementById('name').textContent = destino.name;
      document.getElementById('image').src = destino.images.png;
      document.getElementById('description').textContent = destino.description;
      document.getElementById('distance').textContent = destino.distance;
      document.getElementById('travel').textContent = destino.travel;
    });
});