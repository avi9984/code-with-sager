

const newApi = async () => {
    const result = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=*****************')
    const json = await result.json()
    console.log(json.articles)
}

newApi()

const url = 'https://api.sample.lokeshdevcoder.com/get-params/101/Lokesh'

const result = async () => {
    const results = await fetch(url, { method: 'Get' })
    const res = await results.json();
    console.log(res)
}