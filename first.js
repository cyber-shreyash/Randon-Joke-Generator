const URL=`https://v2.jokeapi.dev/joke/Any`;

const midEl1=document.getElementById('mid1');
const midEl2=document.getElementById('mid2');

function getJoke(){
fetch(URL)
.then(res=>{
if(!res.ok){
    throw new Error("Failed to fetch the joke");

}
return res.json();
})
.then(data=>{
    if(data.type==="single"){
    midEl1.textContent=data.joke;
    midEl2.textContent="";
}else if(data.type==="twopart"){
    midEl1.textContent=data.setup;
    midEl2.textContent=data.delivery;
}
})
.catch(error=>{
console.log("Error: ",error);
});}

const generateBtn=document.getElementById('generate').addEventListener("click",()=>{
getJoke();})

