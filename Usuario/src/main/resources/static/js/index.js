let addButton=document.getElementById('addButton');
let searchButton=document.getElementById('searchButton');
let listButton=document.getElementById('listButton');
addButton.addEventListener('click', function(event){
event.preventDefault();
window.location.href = '../html/user.html';
});

searchButton.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = '../html/editUser.html';
    });
listButton.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = '../html/tablaUsuarios.html';
    });