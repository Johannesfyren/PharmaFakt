const collapseNavButton = document.querySelector('.collapseButton');
const navigationContainer = document.querySelector('.left-nav');

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