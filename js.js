const collapseNavButton = document.querySelector('.collapseButton');
const navigationContainer = document.querySelector('.left-nav');
const internalNoteContainer = document.querySelector('.internal-note-container');
const addNoteButton = document.querySelector('#add-note-button');

let navClosed = false;


collapseNavButton.addEventListener("click", (e) =>{
    if (navClosed == false){
        navigationContainer.setAttribute("style", "right:230px;width:0; transition:0.2s;");
        collapseNavButton.setAttribute("style", "left:0; transition:0.2s; rotate:180deg;");
        
        navClosed = true;
    }else{
        navigationContainer.setAttribute("style", "right:0px;width:230; transition:0.2s;");
        collapseNavButton.setAttribute("style", "left:230; transition:0.2s; rotate:0deg;");
        navClosed = false;
    };
});


addNoteButton.addEventListener("click", (e)=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
    ];
    const currentDate = new Date;
    const userInput = prompt("Write note..");
    console.log(userInput);


    if (userInput) {
        const userInitials = "CU";
        const noteContainer = document.createElement("div");
        const noteDate = document.createElement("p");
        const noteInput = document.createElement("p");

        noteContainer.setAttribute("class", "internal-notes");
        noteDate.textContent = `${currentDate.getUTCDate()}. ${monthNames[currentDate.getUTCMonth()]}`;
        noteInput.textContent = `${userInitials}: ${userInput}`;
        
        internalNoteContainer.prepend(noteContainer);
        noteContainer.append(noteDate);
        noteContainer.append(noteInput);
    }
});