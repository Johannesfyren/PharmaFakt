const dispatchContainer = document.createElement("div");
const createDispatchBtn = document.querySelector("#new-dispatch-btn");
const body = document.querySelector("body");
dispatchContainer.setAttribute("class","dispatch-container");

createDispatchBtn.addEventListener("click", ()=>{
    body.prepend(dispatchContainer);
    console.log("pols");
});
