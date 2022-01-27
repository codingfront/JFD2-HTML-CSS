let body= document.body
cardsData = {title:"mangement",
            data:["5000000","monthly payment","tehran"]}
let wrapper = document.createElement("div");
wrapper.className = "wrapper";
let image = document.createElement("img");
image.className = "image";
image.src="https://s100.divarcdn.com/static/thumbnails/1643035338/QYuPIi6z.webp"
let content = document.createElement("div");
content.className="content"
let title = document.createElement("p")
title.className = "title"
title.textContent=cardsData.title;
content.appendChild(title);
for (let i=0; i<3; i++){
    let text = document.createElement("p");
    text.className="text"; 
    text.textContent = cardsData.data[i];
    content.appendChild(text)
    
}
wrapper.appendChild(image);
wrapper.appendChild(content);
body.appendChild(wrapper);

