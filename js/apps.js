showNotes()
//if user add a note and add it to a localstorage
let addBtn=document.getElementById('addBtn').addEventListener("click",function(e){
    let addText=document.getElementById("addTxt")
    let notes=localStorage.getItem("notes");
    if(notes==null){
         notesobj=[];
    }
    else{
        //qk local storage se hume obj milta h or hum array m km krna charhe h islye json.parse
        notesobj=JSON.parse(notes)
    }
    notesobj.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notesobj))
    addText.value="";
    console.log(notesobj);
    
})

//read then show element from localstorage
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[]
    }
    else{
        notesobj=JSON.parse(notes)
    }
    //html var use ko display dynamil in index page
    let html="";
    notesobj.forEach(function(element,index) {
       html +=
      `<div class="mx-2 my-2 card noteCard" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${index+1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
    </div>`;
});
   let notesElm=document.getElementById('notes');
   if(notesobj.length!=0){
       notesElm.innerHTML=html;
  }
  else{ 
      notesElm.innerHTML=`Nothing to show!`;
    }

}


function deleteNotes(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[]
    }
    else{
        notesobj=JSON.parse(notes);
    }
    //phlea index delete krdia splice se
    notesobj.splice(index,1)
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes()
  }

let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputval=search.value;
    console.log("Input event",inputval)

    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(element => {
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        
          if(cardTxt.includes(inputval)){
              element.style.display="block";
          }
          else{
            element.style.display="none";
          }
        
    });

})
