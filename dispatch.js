const customer = [{
    ID:1,
    name: "John Deer",
    address: "Bakers Street 39",
    deliverAddress: "Bakers Street 39",
},
{
    ID:2,
    name: "Kathrina Baker",
    address: "Country Street 1",
    deliverAddress: "Bakers Mainroad 39",
},
{
    ID:3,
    name: "Hans Hinterseer",
    address: "South Avenue 2",
    deliverAddress: "South Avenue 2",
}];
const vet = [{
    ID:1,
    name: "Alicia Dog",
    address: "Bakers Street 39",
    authID: "3151",
},
{
    ID:2,
    name: "James Cat",
    address: "Country Street 1",
    authID: "5462",
},
{
    ID:3,
    name: "Catherine Parrot",
    address: "South Avenue 2",
    authID: "1290",
}];


const body = document.querySelector("body");
const createDispatchBtn = document.querySelector("#new-dispatch-btn");

//Left div with selectors
const dispatchContainer = document.createElement("div");
const upperSectionWrapper = document.createElement("div");
const custVetWrapper = document.createElement("div");
const customerIcon = document.createElement("img");
const vetIcon = document.createElement("img");
const iconSelectDiv1 = document.createElement("div");
const iconSelectDiv2 = document.createElement("div");
const selectCustomer = document.createElement("select");
const selectVet = document.createElement("select");
const custDetailsWrapper = document.createElement("div");
const vetDetailsWrapper = document.createElement("div");




//Middle div with Customer details
const custHeaderIconDiv1 = document.createElement("div");
const custHeaderIconDiv2 = document.createElement("div");
const custHeaderIconDiv3 = document.createElement("div");
const nameIcon = document.createElement("img");
const addressIcon = document.createElement("img");
const deliveryIcon = document.createElement("img");

const customerNameLabel = document.createElement("h3");
const customerName = document.createElement("p");
const customerAddressLabel = document.createElement("h3");
const customerAddress = document.createElement("p");
const customerDeliveryAddressLabel = document.createElement("h3");
const customerDeliveryAddress = document.createElement("p");
customerNameLabel.textContent = "Name";
customerAddressLabel.textContent = "Address";
customerDeliveryAddressLabel.textContent = "Delivery Address";




//right div with Vet details
const vetNameLabel = document.createElement("h3");
const vetName = document.createElement("p");
const vetAddressLabel = document.createElement("h3");
const vetAddress = document.createElement("p");
const vetAuthIDLabel = document.createElement("h3");
const vetAuthID = document.createElement("p");

dispatchContainer.setAttribute("class","dispatch-container");
upperSectionWrapper.setAttribute("id","custvet-detail-wrapper");
custVetWrapper.setAttribute("id","customer-vet-wrapper");
custDetailsWrapper.setAttribute("id","customer-details-wrapper");
vetDetailsWrapper.setAttribute("id","vet-details-wrapper");
selectCustomer.setAttribute("id","customers");
selectCustomer.setAttribute("name","customers");
selectVet.setAttribute("id","vets");
selectVet.setAttribute("name","vets");


iconSelectDiv1.setAttribute("class", "flex-icon-element");
iconSelectDiv2.setAttribute("class", "flex-icon-element");
customerIcon.setAttribute("src", "img/icons/customer_icon.png");
vetIcon.setAttribute("src", "img/icons/vet_icon.png");

custHeaderIconDiv1.setAttribute("class","flex-header-paragraph");
custHeaderIconDiv2.setAttribute("class","flex-header-paragraph");
custHeaderIconDiv3.setAttribute("class","flex-header-paragraph");
nameIcon.setAttribute("src", "img/icons/name_icon.png");
addressIcon.setAttribute("src", "img/icons/home_icon.png");
deliveryIcon.setAttribute("src", "img/icons/delivery_icon.png");



createDispatchBtn.addEventListener("click", ()=>{
    createDispatchElements();
});

selectCustomer.addEventListener("change", (e)=>{
    const chosenCustomer = getCustomerDetails(e.target.value);
    customerName.textContent = chosenCustomer[0].name;
    customerAddress.textContent = chosenCustomer[0].address;
    customerDeliveryAddress.textContent = chosenCustomer[0].deliverAddress;
    
    custDetailsWrapper.append(custHeaderIconDiv1);
    custHeaderIconDiv1.append(customerNameLabel);
    custHeaderIconDiv1.append(nameIcon);
    custDetailsWrapper.append(customerName);

    custDetailsWrapper.append(custHeaderIconDiv2);
    custHeaderIconDiv2.append(customerAddressLabel);
    custHeaderIconDiv2.append(addressIcon);
    custDetailsWrapper.append(customerAddress);

    custDetailsWrapper.append(custHeaderIconDiv3);
    custHeaderIconDiv3.append(customerDeliveryAddressLabel);
    custHeaderIconDiv3.append(deliveryIcon);
    custDetailsWrapper.append(customerDeliveryAddress);
});

selectVet.addEventListener("change", (e)=>{
    const chosenVet = getVetDetails(e.target.value);
    vetName.textContent = chosenVet[0].name;
    vetAddress.textContent = chosenVet[0].address;
    vetAuthID.textContent = chosenVet[0].authID;
    vetDetailsWrapper.append(vetName);
    vetDetailsWrapper.append(vetAddress);
    vetDetailsWrapper.append(vetAuthID); 
});

function createDispatchElements(){
    body.append(dispatchContainer);

    //first div with select elements
    dispatchContainer.append(upperSectionWrapper);
    upperSectionWrapper.append(custVetWrapper);
    upperSectionWrapper.append(custDetailsWrapper);
    upperSectionWrapper.append(vetDetailsWrapper);

    custVetWrapper.append(iconSelectDiv1);
    iconSelectDiv1.append(customerIcon);
    iconSelectDiv1.append(selectCustomer);

    custVetWrapper.append(iconSelectDiv2);
    iconSelectDiv2.append(vetIcon);
    iconSelectDiv2.append(selectVet);
    
    getAllCustVetOptions();

    //second div with p elements
    custDetailsWrapper.append(custHeaderIconDiv1);
    custHeaderIconDiv1.append(customerNameLabel);
    custHeaderIconDiv1.append(nameIcon);
    custDetailsWrapper.append(customerName);

    custDetailsWrapper.append(custHeaderIconDiv2);
    custHeaderIconDiv2.append(customerAddressLabel);
    custHeaderIconDiv2.append(addressIcon);
    custDetailsWrapper.append(customerAddress);

    custDetailsWrapper.append(custHeaderIconDiv3);
    custHeaderIconDiv3.append(customerDeliveryAddressLabel);
    custHeaderIconDiv3.append(deliveryIcon);
    custDetailsWrapper.append(customerDeliveryAddress);


    //third div with p elements
    vetDetailsWrapper.append(vetName);
    vetDetailsWrapper.append(vetAddress);
    vetDetailsWrapper.append(vetAuthID);
}

function getAllCustVetOptions(){
    
    const createOption1 = document.createElement("option");
    const createOption2 = document.createElement("option");
    selectCustomer.append(createOption1); //Create blank, so list is not prefilled with info
    selectVet.append(createOption2); //Create blank, so list is not prefilled with info

    for (let i = 0;i<customer.length;i++){
        const createOption = document.createElement("option");
        createOption.textContent = customer[i].name;
        selectCustomer.append(createOption); 
    }
    for (let i = 0;i<vet.length;i++){
        const createOption = document.createElement("option");
        createOption.textContent = vet[i].name;
        selectVet.append(createOption); 
    }
}

function getCustomerDetails(customerName){
    return foundCustomer = customer.filter(customer => customer.name == customerName); 
}
function getVetDetails(vetName){
    return foundVet = vet.filter(vet => vet.name == vetName); 
}