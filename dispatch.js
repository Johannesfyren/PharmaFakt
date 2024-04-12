const body = document.querySelector("body");
const createDispatchBtn = document.querySelector("#new-dispatch-btn");

const dispatchContainer = document.createElement("div");
const UpperSectionWrapper = document.createElement("div");
const CustVetWrapper = document.createElement("div");
const selectCustomer = document.createElement("select");
const selectVet = document.createElement("select");
const CustDetailsWrapper = document.createElement("div");
const VetDetailsWrapper = document.createElement("div");

dispatchContainer.setAttribute("class","dispatch-container");
UpperSectionWrapper.setAttribute("id","custvet-detail-wrapper");
CustVetWrapper.setAttribute("id","customer-vet-wrapper");
CustDetailsWrapper.setAttribute("id","customer-details-wrapper");
VetDetailsWrapper.setAttribute("id","vet-details-wrapper");
selectCustomer.setAttribute("id","customers");
selectVet.setAttribute("id","vets");

createDispatchBtn.addEventListener("click", ()=>{
    body.append(dispatchContainer);
    dispatchContainer.append(UpperSectionWrapper);
    UpperSectionWrapper.append(CustVetWrapper);
    UpperSectionWrapper.append(CustDetailsWrapper);
    UpperSectionWrapper.append(VetDetailsWrapper);

    CustVetWrapper.append(selectCustomer);
    CustVetWrapper.append(selectVet);
});
