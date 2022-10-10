let pr = new Promise<void>((resolve)=>{
    setTimeout(()=>{resolve()}, 3000);
});

console.log(pr);