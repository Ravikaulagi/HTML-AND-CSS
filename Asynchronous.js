/*addition=()=>{ let a=20,b=30; let c=a+b; console.log(c);     
};
subtraction=()=>{
    setTimeout(()=> {let a=10,b=2;let c=a-b;console.log(c);},1000);
};
multiplication=()=>{
    setTimeout(()=>{let a=10,b=3;let c=a*b;console.log(c);},2000)
};
division=()=>{
    setTimeout(()=>{let a=10,b=5;let c=a/b;console.log(c);},1000)
};
addition();
subtraction();
division();
multiplication();
*/
//callback
/*
addition=()=>{ let a=20,b=30; let c=a+b; console.log(c);     
};
subtraction=(callback)=>{
    setTimeout(()=> {let a=10,b=2;let c=a-b;console.log(c); callback()},1000);
};
multiplication=()=>{
    setTimeout(()=>{let a=10,b=3;let c=a*b;console.log(c);},2000);
};
division=()=>{
    setTimeout(()=>{let a=10,b=5;let c=a/b;console.log(c);},1000);
};

subtraction(function()
{
addition();
division();
multiplication();
}
)
*/
/*
addition=()=>{
     let a=20,b=30; let c=a+b; console.log(c);}

subtraction=()=>{
    let a=true;
    if(!a)
    setTimeout(()=> {let a=10,b=2;let c=a-b;console.log(c);},1000);
};
multiplication=()=>{
    setTimeout(()=>{let a=10,b=3;let c=a*b;console.log(c);},2000)
};
division=()=>{
    setTimeout(()=>{let a=10,b=5;let c=a/b;console.log(c);},1000)
};
async function calculator()
{
  await addName();
 await subtraction();
 await multiplication();
 await division();
};
calculator().then(()=>{setTimeout(()=>{console.log("working")},1000)});
*/
addition=()=>{ 
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{let a=10,b=2;let c=a-b;console.log(c);},1000);resolve();});
    } ;  
subtraction=()=>{
    return new Promise((resolve,reject)=>{
        let a=false;
         if(!a)
        {
        setTimeout(()=> {let a=10,b=2;let c=a-b;console.log(c);},1000);resolve();}
    else
      reject("here");})
    
};

multiplication=()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{let a=10,b=3;let c=a*b;console.log(c);},2000);resolve();})    
};
division=()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{let a=10,b=5;let c=a/b;console.log(c);},1000);resolve()});
};
addition().then(subtraction).then(multiplication).then(division);


