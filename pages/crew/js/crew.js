const crew1 = document.getElementById('destination1');
const crew2 = document.getElementById('destination2');
const crew3 = document.getElementById('destination3');
const crew4 = document.getElementById('destination4');

crew1.addEventListener('click', () => {
  fetch('../../data.json')
    .then(response => response.json())
    .then(data => {
      const crew = data.crew[0];
      document.getElementById('name').textContent = crew.name;
      document.getElementById('role').textContent = crew.role;
      document.getElementById('img').src = crew.images.png;
      document.getElementById('description').textContent = crew.bio;
    });
});

crew2.addEventListener('click', () => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => {
        const crew = data.crew[1];
        document.getElementById('name').textContent = crew.name;
        document.getElementById('role').textContent = crew.role;
        document.getElementById('img').src = crew.images.png;
        document.getElementById('description').textContent = crew.bio;
      });
  });

  crew3.addEventListener('click', () => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => {
        const crew = data.crew[2];
        document.getElementById('name').textContent = crew.name;
        document.getElementById('role').textContent = crew.role;
        document.getElementById('img').src = crew.images.png;
        document.getElementById('description').textContent = crew.bio;
      });
  });

  crew4.addEventListener('click', () => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => {
        const crew = data.crew[3];
        document.getElementById('name').textContent = crew.name;
        document.getElementById('role').textContent = crew.role;
        document.getElementById('img').src = crew.images.png;
        document.getElementById('description').textContent = crew.bio;
      });
  });