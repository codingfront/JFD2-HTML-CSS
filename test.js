function Samira(){
    console.log("my name is samira");
    console.log(document.getElementById("test"));
    document.getElementById("test").innerHTML=Date()
}

function turnOffButton(){
    document.getElementsById("picture").src="assests/pic_bulboff.gif"
}
function turnOnButton(){
    document.getElementsById("picture").src="assests/pic_bulbon2.gif"
}
function change(){
    var test2 = "test2";
    var pElement=document.getElementById(test2);
    pElement.style.backgroundColor="red";
    pElement.style.fontSize="80px";
    pElement.style.color="green";
    pElement.classList.add("active")
}
function change2(){
    var test2= "test2";
    var pElement=document.getElementById(test2);
    pElement.classList.remove("active")
}