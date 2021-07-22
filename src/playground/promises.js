const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("rejected!!!!!!")
    }, 2000)
})

promise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('error:', err)
})