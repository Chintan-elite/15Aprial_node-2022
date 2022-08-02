fetch("http://localhost:3000/viewProduct", { mode: 'no-cors' }).then(data => {
    //return data.json()
    console.log(data)
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err);
})