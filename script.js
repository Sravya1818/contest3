let dropdown = document.getElementById("dropdown");
let result = document.getElementById("result");
let filterbtn = document.getElementById("filterBtn");


let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
]


function filterbyprofession() {
    result.innerHTML = "";
    let dropdownValue = dropdown.value;

    if (dropdownValue == "profession") {
        alert("Select a profession before clicking the button.");
        return;
    }


    arr.forEach((item) => {
        if (item.profession === dropdownValue) {
            let div = document.createElement("div");
            div.setAttribute("class");
            div.innerText = item.id + ". Name: " + item.name + "  Profession: " + item.profession + "  Age: " + item.age;
            result.append(div);
        }
    })
    console.log(arr);
}

filterbtn.addEventListener("click", filterbyprofession);

