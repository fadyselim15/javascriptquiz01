function clac(num1,num2){
    function sum(){
        return num1+num2;
    }
    function sub(){
        return num1-num2;
    }
    function mul(){
        return num1*num2;
    }
    function div(){
        return num1/num2;
    }

    var array1=  [clac.sum() ,clac.sub() ,clac.mul() ,clac.div() ];
   return array1; 
}

console.log(clac(100,4));
console.log(clac.sum());