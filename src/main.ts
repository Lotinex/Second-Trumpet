import Express from "express"
import * as Path from "path"
import Axios from "axios"
import * as Config from "../config.json"


const app = Express()

app.use(Express.static(Path.resolve(__dirname, "../../public")))
app.get("/alarmon", (req, res) => {
    res.sendFile(Path.resolve(__dirname, "../../public/page/alarmon/index.html"))
})
app.get("/alarmoff", (req, res) => {
    res.sendFile(Path.resolve(__dirname, "../../public/page/alarmoff/index.html"))
})
app.get("/test", (req, res) => {
    console.log("test good")
    res.send("a")
})
app.get("/off", (req, res) => {
    Axios.get(Config.off).then($res => {
        console.log("off")
        res.send("OK (off)")
    })
})
app.post("/go", (req, res) => {
    Axios.get(Config.on).then($res => {
        console.log("activated")
    })
    setTimeout(() => {
        Axios.get(Config.off).then($res => {
            console.log("off")
            res.send("OK (off)")
        })
    }, 30 * 1000)
})
app.listen(80, () => console.log("ready"))