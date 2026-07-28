const myPromise=new Promise((resolve,reject)=>{

    setTimeout(()=>{

        reject([10,20,30])

    },5000)

})

const myPromise2=new Promise((resolve,reject)=>{

    setTimeout(()=>{

        reject({"apple":1000,"mango":2000,"grapes":3000})

    },8000)

})

const myPromise3=new Promise((resolve,reject)=>{

    setTimeout(()=>{

        resolve(new Set([98,78,68]))

    },3000)

})

// Promise.all([myPromise,myPromise2,myPromise3]).then((ele)=>{

//     console.log(ele);

    

// }).catch((err)=>{

//     console.log(err);

    

// })

 

 

// Promise.race([myPromise,myPromise2,myPromise3]).then((ele)=>{

//     console.log(ele);

    

// }).catch((err)=>{

//     console.log(err);

    

// })

 

// Promise.any([myPromise,myPromise2,myPromise3]).then((ele)=>{

//     console.log("Resolve",ele);

    

// }).catch((err)=>{

//     console.log("Reject",err);

    

// })

 

// Promise.allSettled([myPromise,myPromise2,myPromise3]).then((ele)=>{

//     console.log(ele);

    

// }).catch((err)=>{

//     console.log(err);

// })