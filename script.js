var i = 0;
let d = 0;
document.querySelector('.fa-circle-plus').addEventListener('click', () => {
    const popUp = `<div id="pop-up">
    <header>
      <p id="para-part-2">Add new list</header></p>
    </header>
    <section>
        <div id="input-div">
      <form>
         <input type="text" placeholder="write text to add list" id="todo-input">
      </form>
        </div>
    </section>
    <footer>
      <div id="pop-up-btn">
        <div style="margin-left:2em">
          <button class="btn" id="add-btn">Add</button>
      </div>
      <div style="margin-right:2em">
        <button class="btn" id="close-btn">Close</button>
      </div>
    </div>
    </footer>
</div>`

document.querySelector('#dialog-box').innerHTML = popUp;

// making todo lists
todo = ` <div class="list-pop-up-div">
<header id="input-head">
    <p class="para-head"></p><hr />
</header>
      <div id="lists" class="markdone">
          
      </div>
<div id="flex-awesome">
  // <i class="fa-brands fa-teamspeak"></i>
  // <i class="fa-solid fa-dragon"></i>
  <button type="button" class="btn btn-primary"> <span class="bi bi-magic"></span></button>
  <button type="button" class="btn btn-light"><span class="bi bi-trash"></span></button> 
</div>
</div>`

paraClick = ` <header>
<div id="top-div">
  <div id="heading">
    <h1>Tasks List</h1>
  </div>
  <div id="awesome-btn">
    <p id="para">Add item</p>
    <i class="fa-solid fa-dice-d20"></i>
  </div>
</div>
</header>
<hr />`

// add pop - up
  document.querySelector('#add-btn').addEventListener('click', () => {
    valueInput = document.querySelector('#todo-input').value


    document.querySelector('.todo-1').innerHTML += todo;
    let arr = document.querySelectorAll('.para-head');
    do {
      arr[i].textContent = valueInput;
      i++
      document.querySelector('#pop-up').style.visibility = "hidden";
    }while(false);


  // making para click container
    paraBox = `<div class="para-click">
    <header>
      <div id="top-div">
  
        <div id="heading">
          <i class="fa-brands fa-solid fa-caret-left"></i>
          <h1 id="back-heading">Back</h1>
        </div>
  
          <p class="card-chosen"></p>
  
        <div id="awesome-btn">
          <p id="para">Add item</p>
          <i class="fa-solid fa-circle-plus"> </i></a>
        </div>
  
      </div>
    </header>
    <hr />
   </div> `

    let helloMe = document.querySelector('#never-mind');
    let know = document.querySelectorAll('.list-pop-up-div')
    let specialCard = document.querySelector('#new-one');

    for(let para = 0; para < arr.length; para++) {

      arr[para].addEventListener('click', () => {
        helloMe.innerHTML = paraBox;
        document.querySelector('.todo-1').style.display = "none"
        document.querySelector('#part-1-header').style.display = "none"
        document.querySelector('#new-one').appendChild(know[para])
        document.querySelector('.card-chosen').textContent = arr[para].textContent
     
    
 // back - btn
      document.querySelector('. fa-caret-left').addEventListener('click', () => {
        document.querySelector('.todo-1').style.display = "flex"
        document.querySelector('#part-1-header').style.display = "inherit"
        document.querySelector('#never-mind').style.display = "none"
        document.querySelector('.todo-1').appendChild(specialCard);
        
     }); 

  
     // fa-dice add button
     document.querySelector('.fa-circle-plus').addEventListener('click', () => {
      document.querySelector('#dialog-box').innerHTML = popUp;

      
      // add
      document.querySelector('#add-btn').addEventListener('click', () => {
        
          ++i;
        document.querySelector('.todo-1').innerHTML += todo
        document.querySelector('.todo-1').style.display = "flex"
        document.querySelector('#part-1-header').style.display = "inherit"
        document.querySelector('#never-mind').style.display = "none"
        document.querySelector('#pop-up').style.visibility = "hidden"
        document.querySelector('.todo-1').appendChild(specialCard);
        console.log(i);
        var g =document.querySelectorAll(`.para-head`);
        console.log(g[i-2])
        g[i-2].textContent = document.querySelector('#todo-input').value
        
      }); // add end


      // close
      document.querySelector('#close-btn').addEventListener('click', () => {
        document.querySelector('#pop-up').style.visibility = "hidden";
      });  // close end


   }); // fa dice add button end


     }); // para-click end


    }     // for loop ends


    // add task
    let addBtn = document.querySelectorAll('.btn-primary');
    let addTask = document.querySelector('#dialog-box');
    let addItemDiv = document.querySelectorAll('.markdone')

   for(let k = 0; k<arr.length; k++) {
    addBtn[k].addEventListener('click', () => {
      addTask.innerHTML = popUp;
      document.querySelector('#para-part-2').textContent = "Add New Items"

      // add
      document.querySelector('#add-btn').addEventListener('click', () => {

        addItemDiv[k].innerHTML += '<p class="lists"></p><button class="list-btn">mark done</button><br />'
        let addItem = document.querySelectorAll('.lists')
        let markDoneBtn = document.querySelectorAll('.list-btn')

      for(let a = 0; a < addItem.length; a++) {
        document.querySelector('#pop-up').style.visibility = "hidden";
        addItem[d].textContent = document.querySelector('#todo-input').value 
        markDoneBtn[a].style.visibility = "visible";

        markDoneBtn[a].addEventListener('click', () => {
          addItem[a].style.textDecoration = "line-through";
          markDoneBtn[a].style.display = "none";
          });

      }
          d++

      });


      // close
      document.querySelector('#close-btn').addEventListener('click', () => {
        document.querySelector('#pop-up').style.visibility = "hidden";
      });
});

   }


  // removing container task
    let deleteBtn = document.querySelectorAll('.btn-light');
    let remove = document.querySelectorAll('.list-pop-up-div');

   for(let j = 0; j<arr.length; j++) {
    deleteBtn[j].addEventListener('click', () => {
       remove[j].style.display = "none";
   });
   
   }
      
});


// close pop-up
document.querySelector('#close-btn').addEventListener('click', () => {
  document.querySelector('#pop-up').style.visibility = "hidden";
});

})












