


export default function pageLoad(){
    const body = document.querySelector("body");
    const divContainer = document.createElement("div");
    divContainer.classList.add = "content";
    body.append(divContainer); 
    const header = document.createElement("h1");
    const para = document.createElement(`p`);
    header.textContent = "my page";
    para.textContent = "Welcome to my stupid site"
    divContainer.append(header);
    divContainer.append(para);
    
}