let list = document.querySelectorAll(".card-item");
const container = document.querySelector('.cards-container')
for (i = 0; i < list.length; i++) {
  if (i == 0) {
    list[i].classList.add("first-card");
  } else if (i == 1) {
    list[i].classList.add("second-card");
  } else if (i == 2) {
    list[i].classList.add("third-card");
  }
}

function clikCard() {
    list[0].classList.remove('first-card');
    const removido = list[0];
    container.removeChild(removido);
    list = document.querySelectorAll('.card-item');

    for (i = 0; i < list.length; i++) {
        if (i == 0) {
            list[i].classList.remove("second-card");
            list[i].classList.add("first-card");
        } else if (i == 1) {
            list[i].classList.remove("third-card");
            list[i].classList.add("second-card");
        } else if (i == 2) {
            list[i].classList.add("third-card");
        }
    }

    container.appendChild(removido);
}

// Adicionar cartão

// const buton = document.getElementById('add');

// buton.addEventListener('click',function (){
//   const cardCriado = document.createElement('div');
//   cardCriado.classList.add('card-item');
//   cardCriado.style.background = 'var(--blue-card)';
//   cardCriado.innerHTML = "<h2>Cartão Teste Dois</h2><span></span><p>XXXX XXXX XXXX XXXX</p><p>Lucas M Berriel</p>";
//   container.appendChild(cardCriado);
// });