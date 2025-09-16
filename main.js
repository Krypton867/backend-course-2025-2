const currency = "EUR";
const exact_date = "10.09.2024";


const nbuURL = new URL("NBU_ovdp", "https://bank.gov.ua/");


nbuURL.searchParams.append("date", exact_date);
nbuURL.searchParams.append("val_code", currency);
nbuURL.searchParams.append("json", "");


console.log(nbuURL.toString());
