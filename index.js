let userinput;
let max=100;
let min=1;
let randomnum=Math.round(Math.random()*(max-min))+min;
let promt=window.prompt(`enter the number between ${min}-${max}`);
let togle=true;
while(togle)
{
    promt=Number(promt);
    if(promt===randomnum)
    {
        window.alert("ha ha ha you won brother");
        togle=false;
    }
    else if(promt<min || promt>max )
    {
        window.alert("ha ha ha enter valid number noob");
        promt=window.prompt(`enter the number between ${min}-${max}`);
    }
    else if(isNaN(promt))
    {
        window.alert("enter a vaild number");
        promt=window.prompt(`enter the number between ${min}-${max}`);
    }
    else{
        if(promt>randomnum)
            {
                
                promt=window.prompt(`enter the number between ${min}-${max}`);
                randomnum=Math.round(Math.random()*(max-min))+min;
            }
            else if(promt<randomnum)
            {
               
                promt=window.prompt(`enter the number between ${min}-${max}`);
                randomnum=Math.round(Math.random()*(max-min))+min;
            }
    }
}

