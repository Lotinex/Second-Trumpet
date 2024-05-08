const go = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", `/go`)
    xhr.send()
    xhr.onload = (res) => {
        console.log(res)
    }
}
document.getElementById("go").addEventListener("click", e => {
    go()
})