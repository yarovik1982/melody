
function init(){
    const addBtns = document.querySelectorAll(".btn_add");
    
   addBtns.forEach(button=>{
     button.addEventListener("click", elem=>{
       target = elem.target;
       color = target.getAttribute("id");
       createCard();
       showBtnSave();
       if(color){
         lastImg = getLastImg();
        lastImg.style.background = color;
        lastTitle = getLastTitle();
        lastTitle.textContent = "кубик " + color;
    }
     })
   })
   
   function getLastImg(){
     const images = document.querySelectorAll(".card_img");
     return images[images.length-1];
   }
   
   function getLastTitle(){
     const titles = document.querySelectorAll(".card_title");
     return titles[titles.length-1];
   }
   
   function showBtnSave(){
     const btnSave = document.querySelector(".btn_save");
     btnSave.classList.add("active");
   }
  function createCard(){
    const cardWrap = document.querySelector(".wrap_cards");
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div class="card_img"></div> 
     <h2 class="card_title">кубик синий</h2> 
     <p class="card_discribe" title="описание можно изменить" contenteditable >lorem ipsum dolor set amet. когда деревья были большими. Когда я был маленьким.</p> 
     <span class="card_price">$ 5</span> 
     <button class="card_btn">добавить в корзину</button>`;
     
     cardWrap.appendChild(card);
     return card;
     
  }
  document.querySelector(".btn_save").addEventListener("click", saveData);
  function saveData(){
    const cards = document.querySelectorAll(".card");
    let array = [];
    cards.forEach(elem=>{
      childList = elem.childNodes;
      array.push(childList);
      console.log(array);
    })
  }
  
  };
  let btns = new Array("btn_add");
  for(let i = 0 ; i < btns.length; i++){
    el = btns[i];
    el.style.background = "black";
  }
  console.log(btns);
  init();