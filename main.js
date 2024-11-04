function getAllRecords() {
    fetch('//34.229.247.110/php-intro-connection/getRecords.php') // Reemplaza con la URL de tu endpoint que devuelve todos los registros
        .then(response => response.json())
        .then(data => populateTable(data))
        .catch(error => console.error('Error obteniendo los datos:', error));
}

function populateTable(data) {
  const tableBody = document.querySelector('#recordsTable tbody');
  tableBody.innerHTML = ''; // Limpiar el contenido de la tabla antes de añadir nuevos datos

  data.forEach(record => {
      const row = document.createElement('tr');

      // Añadir cada celda con los datos del registro
      const codeCell = document.createElement('td');
      codeCell.textContent = record.Code;
      row.appendChild(codeCell);

      const nameCell = document.createElement('td');
      nameCell.textContent = record.Name;
      row.appendChild(nameCell);

      const continentCell = document.createElement('td');
      continentCell.textContent = record.Continent;
      row.appendChild(continentCell);

      const regionCell = document.createElement('td');
      regionCell.textContent = record.Region;
      row.appendChild(regionCell);

      const surfaceAreaCell = document.createElement('td');
      surfaceAreaCell.textContent = record.SurfaceArea;
      row.appendChild(surfaceAreaCell);

      const populationCell = document.createElement('td');
      populationCell.textContent = record.Population;
      row.appendChild(populationCell);

      // Agregar la fila a la tabla
      tableBody.appendChild(row);
  });
}


