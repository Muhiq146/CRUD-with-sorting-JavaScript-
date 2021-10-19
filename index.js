const data = [];
var o=0;
var a = document.getElementById('tb');

function add() {
        if(validate()){
        const b = {
            name: document.getElementById('nam').value,
            mat: document.getElementById('mat').value,
            sci: document.getElementById('sci').value,
            eng: document.getElementById('eng').value,
            com: document.getElementById('com').value
        };
        
        data.push(b);
        console.log(b);
        console.log(data);
        document.getElementById('nam').value="";
        document.getElementById('mat').value="";
        document.getElementById('sci').value="";
        document.getElementById('eng').value="";
        document.getElementById('com').value="";
        display();
    }
}

function display(){
    a.innerHTML = "";
    for (var i = 0; i < data.length; i++){
        a.innerHTML += `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].mat}</td>
            <td>${data[i].sci}</td>
            <td>${data[i].eng}</td>
            <td>${data[i].com}</td>
            <td><button onclick="edit(${i})">Edit</button>
            <button onclick="del(${i})">Delete</button></td>
            </tr>`;
    }
}

function edit(item){
    document.getElementById('nam').value=data[item].name;
    document.getElementById('mat').value=data[item].mat;
    document.getElementById('sci').value=data[item].sci;
    document.getElementById('eng').value=data[item].eng;
    document.getElementById('com').value=data[item].com;
    del(item);
    
}


function del(n){
    data.splice(n,n+1);
    display();
    console.log(data);
}


function validate(){
    let a = document.getElementById('nam').value;
    let b = document.getElementById('mat').value;
    let c = document.getElementById('sci').value;
    let d = document.getElementById('eng').value;
    let e = document.getElementById('com').value;
    if(a == "" || b == "" || c == "" || d == "" || e == "" ){
        alert("Please fill all the fields");
        return false;
    }else{
        return true;
    }
}

function nameSort(){
    if(o==0 || o%2==0){
        data.sort(function (a, b) {
            let left = a.name;
            let right = b.name;
            return left === right ? 0 : left > right ? 1 : -1;
        });
    }else{
        data.sort(function (a, b) {
            let left = a.name;
            let right = b.name;
            return left === right ? 0 : left > right ? -1 : 1;
        });    
    }
    o++;
    display();
}

function matSort(){
    if(o==0 || o%2==0){
        data.sort((a,b) => (a.mat - b.mat));
    }else{
        data.sort((a,b) => (b.mat - a.mat));  
    }
    o++;
    display();
}

function sciSort(){
    if(o==0 || o%2==0){
        data.sort((a,b) => (a.sci - b.sci));
    }else{
        data.sort((a,b) => (b.sci - a.sci));    
    }
    o++;
    display();
}

function engSort(){
    if(o==0 || o%2==0){
        data.sort((a,b) => (a.eng - b.eng));
    }else{
        data.sort((a,b) => (b.eng - a.eng));  
    }
    o++;
    display();
}

function comSort(){
    if(o==0 || o%2==0){
        data.sort((a,b) => (a.com - b.com));
    }else{
        data.sort((a,b) => (b.com - a.com));  
    }
    o++;
    display();
}

// function sort(g){
//     if(o==0 || o%2==0){
//         data.sort((a,b) => (a.(g) - b.(g));
//     }else{
//         data.sort((a,b) => (b.g - a.g));  
//     }
//     o++;
//     display();
// }