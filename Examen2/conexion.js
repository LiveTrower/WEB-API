// Conectarse por python -m http.server 8000
fetch('http://localhost:5252/api/Books')
.then(response => response.json())
.then(data => {
   var table = document.querySelector('table');

   data.forEach(book => {
      fetch(`http://localhost:5252/api/Authors/${book.id}`)
          .then(response => response.json())
          .then(author => {
              var row = table.insertRow(-1);

              var titleCell = row.insertCell(0);
              titleCell.textContent = book.title;

              var authorCell = row.insertCell(1);
              authorCell.textContent = author.name;

              var chaptersCell = row.insertCell(2);
              chaptersCell.textContent = book.chapters;

              var pagesCell = row.insertCell(3);
              pagesCell.textContent = book.pages;

              var priceCell = row.insertCell(4);
              priceCell.textContent = book.price;
          })
          .catch(error => console.error('Error:', error));
   });
})
.catch(error => console.error('Error:', error));

function buscarlibroGLOBAL() {
   var input, filter, table, tr, td0, td6, i, txtValue;
   input = document.getElementById("inputGLOBAL");
   filter = input.value.toUpperCase();
   table = document.getElementById("tablalibrosGLOBAL");
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
      td0 = tr[i].getElementsByTagName("td")[0]; // Columna de titulo
      td1 = tr[i].getElementsByTagName("td")[1]; // Columna de autor

      if (td0 || td1) { // Verifica si se encontró la columna de Nombre o C.P
         txtValue = (td0 ? td0.textContent || td0.innerText : "") + " " + (td1 ? td1.textContent || td1.innerText : "");
            // Combina el texto de Nombre y C.P
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
         } else {
            tr[i].style.display = "none";
         }
      }
   }
}