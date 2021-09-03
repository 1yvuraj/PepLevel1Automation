let puppeteer = require('puppeteer');
// creates headless browser
let browserStartPromise = puppeteer.launch({
    
    // visible browser window
    headless: false,
    // type spped 1 sec to prove it is done manually 
   //slowMo : 500,
    //to open the browser full screen
    // setViewport:{ width: 1920, height: 1040 },
    defaultViewport: null,
    args:[ '--window-size=1920,1040',"--disable-notifications"]
});

let nextTab1,Ntab;

browserStartPromise.then(function (browserObj){
    console.log("browser opened");
    nextTab1=browserObj;
    let browserTabOpenPromise =  browserObj.newPage();
   return  browserTabOpenPromise;

}).then(function (newtab){
   
     page=newtab;
     console.log("new tab opened");
     let gpageopen=newtab.goto("https://www.google.com/");
     return gpageopen;


}).then(function (){
   console.log("GooglePagrOpen");
   
    let pepcodingSite=page.type("input[title ='Search']","pepcoding");
    return pepcodingSite;

}).then(function (){
    console.log("wait for element to be visibale");
    
     let enterwillbedone=page.keyboard.press("Enter",{delay:100});
     return enterwillbedone;
}).then(function (){
    console.log("wait for element to be visibale");
    
     let waitForElement=page.waitForSelector(".LC20lb.DKV0Md",{visible:true});
     return waitForElement;
}).then(function (){
    
    console.log("click");
     let elemClick=page.click(".LC20lb.DKV0Md");
     return elemClick;


}).then(function (){
    console.log("AllList");
    
     let AllList=page.$$(".site-nav-li");
     return AllList;
}).then(function (allelem){
    console.log("ElementWillBeClick");
    
     let ElementWillBeClick=allelem[7].click({delay:100});
     return ElementWillBeClick;
}).then(function (){
    console.log(" wait");
    
     let wait=page.waitFor(2000);
     return wait;
}).then(function (){
    console.log("NextTab");
    //arry me karna karo
     let NextTab=nextTab1.pages();
     return NextTab;
 
}).then(function (arry){
    console.log("waitForLevel1");
    Ntab=arry[arry.length-1];
    let waitForLevel1=Ntab.waitForSelector('h2[ title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]',{visible:true});
    return waitForLevel1;

}).then(function (){
    console.log("openlevel1");
    
     let openlevel1=Ntab.click('h2[ title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
     return openlevel1;
     
}).then(function (){
    console.log("level1 will open");
    
    
     
})