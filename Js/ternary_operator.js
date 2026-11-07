let age=17;
let isAdult = age >= 18 ? true : false;
console.log(isAdult);

let actualStatusCode=100;
let expectedStatusCode=200;

let result = actualStatusCode>expectedStatusCode? "pass" : "fail";
console.log(result);

let environment = "production";
let url = environment === "production" ? "https://www.production.com" : "https://www.test.com";
console.log(url);

let isCI = true;
let browsermode = isCI ? "headless" : "headed";
console.log("Launching browser in " + browsermode + " mode");

let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);


// Template Literal
console.log(`What is the SLA time ? - ${sla}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);
console.log(`Value is , ${isSKMale}`);


let api_response1 = "Pramod";
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);
  
let api_response2 = null;
let responsedata2 = api_response2 ?? "{}";
console.log(responsedata2);


let api_response3;
let responsedata3 = api_response3 ?? "{}";
console.log(responsedata3);
  
  