let usuariodb=[];
function getUser(){
  return fetch('/api/usuarios/', {
    method: 'GET',})
    .then(function (response) {
      response.json().then(function (json) {
        usuariodb = json;
        usuariodb.forEach((usuario) => {
         return usuario;
        }); // foreach
        console.log(usuariodb);
      }); //then
    })
    .catch(function (err) {
      console.log(err);
    });
}
for (let i = 0; i < usuariodb.length; i++) {
    let fila = "<tr>";
    fila += "<td>" + usuariodb[i].nombre + "</td>";
    fila += "<td>" + usuariodb[i].apellido + "</td>";
    fila += "<td>" + usuariodb[i].email + "</td>";
    fila += "<td>" + "<img src='" + usuariodb[i].imagen + "'>" + "</td>";
    fila += "</tr>";

    document.querySelector("#miTabla tbody").innerHTML += fila;
  }
  window.addEventListener('load', function (event) {
    getUser();
    });