//Dependencies
const PrettyJSON = require("prettyjson")
const WhoIs = require("whois-json")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <domain>")
    process.exit()
}

if(!Self_Args[0]){
    console.log("Invalid domain.")
    process.exit()
}

Main()
async function Main(){
    const results = await WhoIs(Self_Args[0])

    console.log(PrettyJSON.render(results))
}
