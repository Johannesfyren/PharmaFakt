const customer = [{
    name: "John Deer",
    address: "Bakers Street 39",
    deliverAddress: "Bakers Street 39",
},
{
    name: "Kathrina Baker",
    address: "Country Street 1",
    deliverAddress: "Bakers Mainroad 39",
},
{
    name: "Hans Hinterseer",
    address: "South Avenue 2",
    deliverAddress: "South Avenue 2",
}];

const body = document.querySelector("body");
const createDispatchBtn = document.querySelector("#new-dispatch-btn");

const dispatchContainer = document.createElement("div");
const upperSectionWrapper = document.createElement("div");
const custVetWrapper = document.createElement("div");
const selectCustomer = document.createElement("select");
const selectVet = document.createElement("select");
const custDetailsWrapper = document.createElement("div");
const vetDetailsWrapper = document.createElement("div");

const customerName = document.createElement("p");
const customerAddress = document.createElement("p");
const customerDeliveryAddress = document.createElement("p");

const vetName = document.createElement("p");
const vetAddress = document.createElement("p");
const vetAuthID = document.createElement("p");

dispatchContainer.setAttribute("class","dispatch-container");
upperSectionWrapper.setAttribute("id","custvet-detail-wrapper");
custVetWrapper.setAttribute("id","customer-vet-wrapper");
custDetailsWrapper.setAttribute("id","customer-details-wrapper");
vetDetailsWrapper.setAttribute("id","vet-details-wrapper");
selectCustomer.setAttribute("id","customers");
selectCustomer.setAttribute("name","customers");
selectVet.setAttribute("id","vets");

createDispatchBtn.addEventListener("click", ()=>{
    createDispatchElements();
});


function createDispatchElements(){
    body.append(dispatchContainer);

    //first div with select elements
    dispatchContainer.append(upperSectionWrapper);
    upperSectionWrapper.append(custVetWrapper);
    upperSectionWrapper.append(custDetailsWrapper);
    upperSectionWrapper.append(vetDetailsWrapper);
    custVetWrapper.append(selectCustomer);
    getAllCustomerOptions();
    custVetWrapper.append(selectVet);

    //second div with p elements
    custDetailsWrapper.append(customerName);
    custDetailsWrapper.append(customerAddress);
    custDetailsWrapper.append(customerDeliveryAddress);


    //third div with p elements
    vetDetailsWrapper.append(vetName);
    vetDetailsWrapper.append(vetAddress);
    vetDetailsWrapper.append(vetAuthID);
}


function getAllCustomerOptions(){
    for (let i = 0;i<customer.length;i++){
        const createOption = document.createElement("option");
        createOption.textContent = customer[i].name;
        selectCustomer.append(createOption); 
    }
}