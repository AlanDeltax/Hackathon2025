const listUser = [];

function createPlan(){
  const select = document.getElementById('miSelect');
  const valor = select.value;
  const texto = select.options[select.selectedIndex].text;

  console.log("Valor:", valor); // Ej: "fondo-emergencia"
  console.log("Texto:", texto); // Ej: "Fondo de emergencia"

  // get goal
  const goalDOM = document.querySelector('.goal');

  const userInput = {
    option: texto,
    goal: goalDOM.value
  };

  listUser.push(userInput);

  console.log(listUser);
}

const boton = document.querySelector('.miBoton');
const divOculto = document.querySelector('.p-separator');

boton.addEventListener('click', () => {
    if(divOculto.style.display === 'none' || divOculto.style.display === '') {
        divOculto.style.display = 'inline';
        // divOculto.style.animation = 'fadeIn 1.5s ease-out forwards;'
        // boton.textContent = 'Ocultar Contenido';
    } else {
        divOculto.style.display = 'none';
        // boton.textContent = 'Mostrar Contenido';
    }
});

