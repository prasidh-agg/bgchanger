const btn= document.getElementById('btn');
const container = document.getElementById("container");

btn.addEventListener('click',()=>{
	
	randomBg();
	
});


function randomBg() {
	
	var x = Math.floor(Math.random() * 360);
	var bgcolor = "hsl(" + x + "," + "100%,50%)";
	document.body.style.background=bgcolor;
	const notif = document.createElement("div");//create a div everytime we call function
    notif.classList.add("toast");//add a class called toast to CSS

    notif.innerText = bgcolor //Inner text in the Container

    container.appendChild(notif);//append notif in the container

    setTimeout(() => {
        notif.remove();
    }, 3000);
	
}
