function showInicio() {
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('seccion').style.display = 'none';
}

function showSecciones() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('seccion').style.display = 'block';
}



function openTab(tabName) {
    var i, tabcontent, tablinks;  

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    menulinks = document.getElementsByClassName('botonP');
    for (i = 0; i < menulinks.length; i++) {
        menulinks[i].classList.remove('active');

 
  document.getElementById(tabName).style.display = 'block';

  event.currentTarget.classList.add('active');
}
}
