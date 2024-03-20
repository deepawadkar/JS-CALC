const inputKey = document.getElementById("inputKey");
const inputvalue = document.getElementById("inputValue");

//INSERTING DATA
document.getElementById("btnInsert").onclick = function(){
    const key = inputKey.value;
    const value = inputvalue.value;
    if (key && value){
        localStorage.setItem(key,value);
        window.location.reload();
        inputKey.value = "";
        inputvalue.value = "";
    } else {
        alert("Must Enter key and Value");
    }
};

if(localStorage.length !== 0){
    document.getElementById("availRecords").innerHTML = "Records Available in Local Storage";
}

if(localStorage.length === 0){
    document.getElementById("btnAllDelete").style.display = "none";
    document.getElementById("autoFill").innerHTML = "Add Some Key - Value Records Using INSERT box";
    //document.getElementById("availRecords").style.display = "none";
}

//Read all the values
for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    document.getElementById("isOutput").innerHTML += `<br><hr><br> key is : ${key} <br> value is : ${value}<br><br>`;
}

{/* //delete all data */}
document.getElementById("btnAllDelete").onclick = function () {
    localStorage.clear();
    location.reload();
};

{/* //read single data */}
document.getElementById("btnReadData").onclick = function(){
    const inputReadDataKeyNew = document.getElementById("inputReadDataKey").value;

    const readedData = localStorage.getItem(inputReadDataKeyNew);

    if (inputReadDataKeyNew){
        document.getElementById("readedDataHere").innerHTML = `Data Value of Requested KEY is : ${readedData}`;
    }
};

 {/* /* delete single data */}
document.getElementById("btnDelete").onclick = function(){
    const keyName = document.getElementById("inputDelKey").value;

    if (keyName){
        localStorage.removeItem(keyName);
        location.reload();
    }
    document.getElementById("delete").innerHTML += `Data Deleted `;
}