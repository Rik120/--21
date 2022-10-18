let boxInfo = document.querySelector('.boxInfo')

function fetchUsers() {
    axios.get("http://localhost:3001/users")
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                reload(res.data)
            }
        })
}
fetchUsers()

let contThree = document.querySelector('.contThree')
let contThreeH1 = document.querySelector('.contThreeH1')
let contThreeP = document.querySelector('.contThreeP')
let cv = document.querySelector('.cv')
let btnCont = document.querySelector('.btnCont')
let contOne = document.querySelector('.contOne')
let contTwo = document.querySelector('.contTwo')



const reload = (arr) => {
    for (let item of arr) {
        let boxBig = document.createElement('div')
        let h1 = document.createElement('h1')
        let pOne = document.createElement('p')
        let pTwo = document.createElement('p')
        let pThree = document.createElement('p')
        let btn = document.createElement('button')

        boxBig.classList.add('boxBig')
        h1.innerHTML = item.name
        pOne.innerHTML = "Company" + " " + item.company.name
        pTwo.innerHTML = "Website" + " " + item.website
        pThree.innerHTML = "Phone" + " " + item.phone
        btn.classList.add("btn")
        btn.innerHTML = "Подробнее"

        boxBig.append(h1, pOne, pTwo, pThree, btn)
        boxInfo.append(boxBig)
        contThree.append(contThreeH1, contThreeP)

        

        btnCont.onclick = () => {
            let be = document.createElement('button')
            be.classList.add("be")
            be.innerHTML = "На главную"
            cv.append(be)
            
            if (btnCont.innerHTML === "О нас") {
                console.log("hjk");
                be.style.display = "none"
                btnCont.innerHTML = "На главную"
                contOne.style.display = "none"
                contTwo.style.display = "block"
                contThree.style.display = "none"
                
            } else if (btnCont.innerHTML === "На главную") {
                be.style.display = "none"
                btnCont.innerHTML = "О нас"
                contOne.style.display = "block"
                contTwo.style.display = "none"
            }
        }
        btn.onclick = () => {
            let be = document.createElement('button')
            be.classList.add("be")
            be.innerHTML = "На главную"
            cv.append(be)
            
            be.onclick = () => {
                if (be.innerHTML === "На главную") {
                    be.style.display = "none"
                    contOne.style.display = "block"
                    contTwo.style.display = "none"
                    contThree.style.display = "none"

                } else if (btnCont.innerHTML === "О нас") {

                    console.log("hjk");
                    btnCont.style.display = "none"
                    be.style.display = "none"
                    // btnCont.innerHTML = "На главную"
                    contOne.style.display = "none"
                    contTwo.style.display = "block"
                    contThree.style.display = "none"
                }
            }

           

            contOne.style.display = "none"
            contTwo.style.display = "none"
            contThree.style.display = "block"
            contThreeH1.innerHTML = "Used:" + " " + item.id + " - Leanne Graham"
            contThreeP.innerHTML = `
            {   
                <br>
                "id": ${item.id},<br>
                "name": ${item.name},<br>
                "username": ${item.username},<br>
                "email": ${item.email},<br>
                "address": {<br>
                  "street": ${item.address.street},<br>
                  "suite": ${item.address.suite},<br>
                  "city": ${item.address.city},<br>
                  "zipcode": ${item.address.zipcode},<br>
                  "geo": {<br>
                    "lat": ${item.address.geo.lat},<br>
                    "lng": ${item.address.geo.lng}<br>
                  }<br>
                },<br>
                "phone": ${item.phone},<br>
                "website": ${item.website},<br>
                "company": {<br>
                  "name": ${item.company.name},<br>
                  "catchPhrase": ${item.company.catchPhrase},<br>
                  "bs": ${item.company.bs}<br>
                }
            `
        }
    }
}
