const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 4, 7])
        reject('Error occured')
    }, 2000) 
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
//
//
// Promise --- Pending ---- reject or fullfilled
//
//
//