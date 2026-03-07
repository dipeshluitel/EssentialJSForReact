async function apiCall() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const data = await res.json()
    console.log(data)
}
apiCall()
console.log('REACT')