
let cel = document.getElementById('cel');
let  fah = document.getElementById('fah');
let  kel = document.getElementById('kel');

cel.addEventListener('input' , function(){
    let c = +this.value;

    let f = (c * 9/5 + 32);

    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }

     let ke = (c + 273.15);

     if(!Number.isInteger(ke)){
        ke = ke.toFixed(4);
    }

     kel.value = ke;

    fah.value = f;
   
})

fah.addEventListener('input' , function(){
   let f = +this.value;
   let c = (f-32)*5/9;

   if(!Number.isInteger(c)){
    c = c.toFixed(4);
}
   let ke =((f -32 )*5 ) / 9 + 273.15;


   if(!Number.isInteger(ke)){
    ke = ke.toFixed(4);
}

   cel.value = c;
   kel.value = ke;
});

kel.addEventListener('input' , function(){
    let ke = +this.value;
    let c = ke - 273.15;
    
   if(!Number.isInteger(c)){
    c = c.toFixed(4);
}
    let f = (( ke - 273.15 )*9 ) / 5 + 32;

    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }


    cel.value = c;
    fah.value = f;
}) 
