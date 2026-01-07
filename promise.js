function processsingleorder(orderid){
    return new Promise(resolve=> {
        const processtime =500+Math.random()*100+2000;
        setTimeout(()=> {
            resolve({
                orderid,
                status:'processed',
                processtime:Math.round(processtime)
            });
        }, processtime);
    });
}
const orderbatch=['od1','od2','od3','od4'];
Promise.all(orderbatch.map(processsingleorder))
.then(results=> {
    console.log('all orders processed');
    console.table(results);
    const totaltime =results.reduce((sum,order)=>
    sum+ order.processtime,0);
    console.log(`total processing time : ${totaltime}ms`);

}
)
.catch(Error=>{
    console.error('batch processing failed',error);
});
