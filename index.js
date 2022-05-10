// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;



let set= new Set();
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
let setOfCompanies = new Set()

for (const company of companies) {
  setOfCompanies.add(company)
}


console.log( setOfCompanies)