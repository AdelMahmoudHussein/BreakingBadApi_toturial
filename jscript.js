api = "https://www.breakingbadapi.com/api/characters/"

header = document.querySelector("#header")
content = document.querySelector("#content")

async function get(){
    try {
        const response = await fetch(api);
        const data = await response.json()
        printData(data)
        //console.log(data)
    } catch (error) {
        console.log(error)
    }
}

function printData(data){
    header.innerHTML += 
    `<select class="form-control" onchange="get_char(this.value)">
        <option>Please select</option>
        ${data.map(actor => `<option>` + actor.name + `</option>`)}
    </select>`
    
}

async function get_char(actor){
    if(actor != "Please select"){
        const response = await fetch(api+"?name="+actor);
        const data = await response.json()
        console.log(data)
    
        content.innerHTML = 
        `
        <h2>${data[0].name + " ( " + data[0].nickname + " ) "}</h2>
        <h6>${data[0].birthday}</h6>
        <h4>${data[0].portrayed}</h4>
        <img src=${data[0].img} width=250>
        `
    }
    
}

get();
