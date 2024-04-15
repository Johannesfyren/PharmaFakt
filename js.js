const internalNoteContainer = document.querySelector('.internal-note-container');
const addNoteButton = document.querySelector('#add-note-button');



addNoteButton.addEventListener("click", (e)=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
    ];
    const currentDate = new Date;
    const userInput = prompt("Write note..");


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