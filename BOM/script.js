

// localStorage.setItem("name", "Avinash")
// localStorage.setItem("email", "avi@gmail.com")
// localStorage.setItem("rollno", 100)


// const dialog=document.getElementById('my-model');
// const 

const newApi = async () => {
    const result = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=***********************')
    const json = await result.json()
    console.log(json)
}

newApi()



