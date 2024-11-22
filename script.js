let firstrub=document.querySelector('.firstrub');
let firstusd=document.querySelector(".firstusd");
let firsteur=document.querySelector('.firsteur');
let firstgbp=document.querySelector('.firstgbp');
let secondrub=document.querySelector('.secondrub');
let secondusd=document.querySelector('.secondusd');
let secondeur=document.querySelector('.secondeur');
let secondgbp=document.querySelector('.secondgbp');
let btn1=document.querySelectorAll('.btn1');
let btn2=document.querySelectorAll('.btn2');
let firstinp=document.querySelector('.firstinp');
let secondinp=document.querySelector('.secondinp');
let firstval=document.querySelector('.firstval')
let secondval=document.querySelector('.secondval');
let input=document.querySelector('input');
firstusd.classList.remove('pressbtn1');
firsteur.classList.remove('pressbtn1');
firstgbp.classList.remove('pressbtn1');
secondrub.classList.remove('pressbtn2');
secondeur.classList.remove('pressbtn2');
secondgbp.classList.remove('pressbtn2');
let error=document.querySelector('.error');
let menu=document.querySelector('.menu');
let text=document.querySelector('.text');
// // .....
// // firstrub.addEventListener('click',()=>{
// //     firstusd.classList.remove("pressbtn1");
// //     firstgbp.classList.remove('pressbtn1');
// //     firsteur.classList.remove('pressbtn1');
// //     firstrub.classList.add('pressbtn1');
// //     fetch(' https://v6.exchangerate-api.com/v6/f7151199e2e50ceb87b984aa/latest/RUB')
// //     .then(res=>res.json())
// //     .then(data=>{
// //         console.log(data);
// //     })
// //     let pressbtn1=document.querySelector('.pressbtn1');
// // });
// // firstusd.addEventListener('click',()=>{
// //     firstrub.classList.remove('pressbtn1');
// //     firstgbp.classList.remove('pressbtn1');
// //     firsteur.classList.remove('pressbtn1');
// //     firstusd.classList.add('pressbtn1');
// // });
// // firsteur.addEventListener('click',()=>{
// //     firstusd.classList.remove('pressbtn1');
// //     firstrub.classList.remove('pressbtn1');
// //     firstgbp.classList.remove('pressbtn1');
// //     firsteur.classList.add('pressbtn1');
// //     let pressbtn1=document.querySelector('.pressbtn1');
// // });
// // firstgbp.addEventListener('click',()=>{
// //     firsteur.classList.remove('pressbtn1');
// //     firstusd.classList.remove('pressbtn1');
// //     firstrub.classList.remove('pressbtn1');
// //     firstgbp.classList.add('pressbtn1');
// // });
// // secondusd.classList.add('pressbtn2');
// // secondrub.addEventListener('click',()=>{
// //     secondusd.classList.remove("pressbtn2");
// //     secondgbp.classList.remove('pressbtn2');
// //     secondeur.classList.remove('pressbtn2');
// //     secondrub.classList.add('pressbtn2');
// // });
// // secondusd.addEventListener('click',()=>{
// //     secondrub.classList.remove('pressbtn2');
// //     secondgbp.classList.remove('pressbtn2');
// //     secondeur.classList.remove('pressbtn2');
// //     secondusd.classList.add('pressbtn2');
// // });
// // secondeur.addEventListener('click',()=>{
// //     secondusd.classList.remove('pressbtn2');
// //     secondrub.classList.remove('pressbtn2');
// //     secondgbp.classList.remove('pressbtn2');
// //     secondeur.classList.add('pressbtn2');
// // });
// // secondgbp.addEventListener('click',()=>{
// //     secondeur.classList.remove('pressbtn2');
// //     secondusd.classList.remove('pressbtn2');
// //     secondrub.classList.remove('pressbtn2');
// //     secondgbp.classList.add('pressbtn2');
// // });

let ffff='RUB';
let ssss='USD';


btn1.forEach(button => {
    button.addEventListener("click", () => {
        btn1.forEach(btn =>
            btn.classList.remove("pressbtn1"));
        button.classList.add("pressbtn1");
        ffff=button.textContent;
        updateCurrency(ffff,ssss);
        wifi();
    });
});

btn2.forEach(button => {
    button.addEventListener("click", () => {
        btn2.forEach(btn =>
            btn.classList.remove("pressbtn2")
        );
        button.classList.add("pressbtn2");
        ssss=button.textContent;
        updateCurrency(ffff,ssss);
        wifi();
    }); 
});
let a;
function updateCurrency(currency1,currency2) {
    console.log(currency1);
    console.log(currency2);
        fetch(`https://v6.exchangerate-api.com/v6/3dcc35aa92242ef58e90d04a/latest/${currency1}`)
        .then(res=>res.json())
        .then(data=>{
            let val1=(data.conversion_rates[currency2]);
            firstval.textContent=`1 ${currency1} = ${val1} ${currency2}`
            let val2=(1/data.conversion_rates[currency2]).toFixed(5);
            secondval.textContent=`1 ${currency2} = ${val2} ${currency1}`
                // function updateSecond(item){
                if(a==1){
                  secondinp.value=(firstinp.value * val1).toFixed(5);
                  console.log(secondinp.value);
                }else if(a==2){
                    firstinp.value = (secondinp.value * val2).toFixed(5);
                }
                // }updateSecond(val1);
           
            })
            error.classList.add('none');  
            }updateCurrency(ffff,ssss);
            firstinp.addEventListener('input',()=>{
                a=1;
                updateCurrency(ffff,ssss);
                numberOfZero(firstinp);
            })
            secondinp.addEventListener('input',()=>{
                a=2;
                updateCurrency(ffff,ssss);
                numberOfZero(secondinp);
            })
function numberDots(input) { 
    let value = input.value; 
    let parts = value.split('.'); 
    if (parts.length > 2) { 
        value = parts[0] + '.' + parts.slice(1).join(''); 
    } 
    input.value = value;
};
input.addEventListener('input', () =>{ 
    input.value = input.value.replace(/[^0-9.,]/g, '');
    input.value=input.value.replace(',','.');
    numberDots(input);
    if(input.value.startsWith('.'))
        {  input.value = 0 + input.value}
    wifi();
    
});

// // firstinp.addEventListener('input',()=>{
// //     secondinp.textContent=firstinp.value*data.conversion_rates[currency1];
// //     console.log(secondinp);
// // });
function wifi() {
    while (!navigator.onLine) {
        error.classList.remove('none');
        if (ffff == ssss){
            if (a == 1){
                secondinp.value = firstinp.value;
                console.log('AAAA');
            }else if(a == 2){
                firstinp.value = secondinp.value
            }break;
        }else if(ffff != ssss){
            if(a == 1){
            secondinp.value = "";
        }
        else if(a == 2){
            firstinp.value = "";
        }
        break;
    }
    }
    while (navigator.onLine) {
        if (error.className != "none") {
            error.classList.add('none');
            updateCurrency(ffff,ssss);
        }
        break;
    }
    
}
window.addEventListener('online', ()=>{
    updateCurrency(ffff,ssss);
    
});
window.addEventListener('offline', ()=>{
    wifi();
});
function numberOfZero(zeroInput) {
    let value = zeroInput.value;
    let cut = value.split("");
    
    if (cut[0] === "0") {
        if (cut[1] === "0") {
            cut.splice(0, 1);
            value = cut.join("");
        }
        else if (cut[1] && cut[1].match(/[1-9]/)) {
            cut.splice(0, 1);
            value = cut.join("");
        }
        else if (cut[1] === ".") {
            value = cut.join("");
        }
    }
    zeroInput.value = value;
}
menu.addEventListener('click',()=>{
    text.classList.toggle('hide');
})