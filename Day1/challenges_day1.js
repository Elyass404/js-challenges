let emptyArray = [];

let secondArray = ["hello",1,5,"code","phone","vs code"];

console.log(secondArray.length); // to show the length of the arrey: second array

console.log(secondArray[0]); // to show the first item in the table

console.log(secondArray[secondArray.length-1]);//to show the last item in the table

console.log(secondArray[Math.ceil(secondArray.length-1)]);

let mixedDataTypes= [15,"variable",1500,{name:"morocco",population:4000000,weather:"mostly even",ville:"Youssoufia"}];

let itCompanies = [];
itCompanies.push("Facebook","Google","Microsoft","Apple","Apple","Oracle","Amazon");

//Check if a company exitsts in an array---------------------------------------------------------------------------------

function doesExist(array, company){
    if (array.includes(company)){
        console.log("the company: "+ company + " exists in the table.");
    }else{
        console.log("the company: "+ company + " does not exists in the table.");

    }
}

doesExist(itCompanies,"Facebook");

//filter the companies with two O's in their name---------------------------------------------------------------------------------

let itCompanie = [];
itCompanie.push("Facebook","Google","Microsoft","Apple","Apple","Oracle","Amazon");

function hasOO(array){
let regex = /o{2}/;
let filtered = [];
for(let company of array){
    let result = regex.test(company) ;
    if (result){
        filtered.push(company);
    }
}
console.log(filtered);
}

hasOO(itCompanie);

//Sort the companies names---------------------------------------------------------------------------------




