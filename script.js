let list = document.querySelectorAll(".card-item");
const container_card = document.querySelector('.cards-container')
container_card.classList.add('active');
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
  if (container_card.classList.contains('active')){
    list[0].classList.remove('first-card');
    const removido = list[0];
    container_card.removeChild(removido);
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
    container_card.appendChild(removido);
  }
}

const transacao_ativo = document.querySelector('.information-container');
const info = document.querySelector('body');

transacao_ativo.addEventListener('click',()=>{
    if(info.classList.contains('information-active')){
      info.classList.remove('information-active');
      container_card.classList.add('active');
    }else{
      info.classList.add('information-active');
      container_card.classList.remove('active');
    }
});
