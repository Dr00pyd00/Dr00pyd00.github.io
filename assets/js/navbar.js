
function addNavBar() {

    fetch('assets/components/navbar.html')
    .then(response => response.text())
    .then(html =>{

        document.getElementById('navbar-container').innerHTML = html;
    })
    .catch(error => {
        console.error('Erreur lors du chargement de la navbar:', error);
      });

}

document.addEventListener('DOMContentLoaded', addNavBar);