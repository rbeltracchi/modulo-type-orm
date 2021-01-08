let btnSelect = document.querySelector("#btnSelect");
btnSelect.addEventListener("click", selectNumber);
let numeros = [];

function mostrarTablaCompras() {
    let html = "";
    for (let i = 0; i < numeros.length; i++) {
        r = numeros[i];
        html += `<tr>
                    <td><input type="text" value="${r.user}" id="prod${i}"></td>
                    <td><input type="number" value="${r.SequentialNumber}" id="prec${i}"></td>
                </tr>`;

    }
    let objTotal = {};
    let numPrev = 0;
    numeros.forEach(e => {
        console.log(objTotal);
        let numToAdd = e.SequentialNumber;
        numPrev = objTotal[e.user] || 0;
        console.log(numPrev,numToAdd);    
        objTotal[e.user] = numPrev + numToAdd;
        
    })

    console.log(objTotal);

    
    html += `<tr>
                    <h1> JUAN </h1>
                    <h1> ${objTotal.juan} </h1>

                    <h1> CARO </h1>
                    <h1> ${objTotal.caro} </h1>
                    
                </tr>`;

    document.querySelector("#tblCompras").innerHTML = html;

}

async function selectNumber() {
    let container = document.querySelector("#use-ajax");
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Loading';
    container.appendChild(h1);
    
        let response = await llamarBack("GET", '/numbers-app');
        if (response.ok) {
            
            let t = await response.json();
            numeros = [...t];

        } else {
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }

        mostrarTablaCompras();

        let randomNumber = Math.floor(Math.random() * 366) + 1;

        if (numeros.some(e => e == randomNumber)) {
            selectNumber();
        }else{
            let response = await llamarBack("POST", '/numbers-app',{user: document.getElementById(`user`).value, SequentialNumber: randomNumber});
            if (response.ok) {
            
                let t = await response.json();
                console.log(t);
                let NumDib = document.createElement('h1');
                NumDib.innerHTML = t.SequentialNumber;
                container.appendChild(NumDib);
    
            } else {
                container.innerHTML = "<h1>Error - Failed URL!</h1>";
            }
        }
        
        h1.parentNode.removeChild(h1);
        mostrarTablaCompras();
     
}

async function llamarBack(verbo, path, body = null) {
    let request = {
        method: verbo,
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (body) {
        request.body = JSON.stringify(body);
    }
    let response = await fetch(path, request);
    return response;
}