const emailText=document.getElementById("email");
const copyMsg=document.getElementById("copy-msg");

emailText.addEventListener("click",() => {
    navigator.clipboard.writeText(emailText.innerText);
    copyMsg.style.display="block";
    setTimeout(() =>{
        copyMsg.style.display="none";
    },2000);
});
const sections=document.querySelectorAll("section,footer");
const navLinks=document.querySelectorAll("nav a");
window.addEventListener("scroll",() =>{
    let current="";
    sections.forEach(section =>{
        const sectionTop=section.offsetTop;
        const sectionHeight=section.offsetHeight;
        if(scrollY >= sectionTop-100){
            current=section.getAttribute("id");
        }
});
navLinks.forEach(link =>{
    link.classList.remove("active");
    if(link.getAttribute("href")==="#"+current){
        link.classList.add("active");
}
});
});
const topbtn=document.getElementById("topbtn");
window.addEventListener("scroll",() =>{
    if(window.scrollY>300){
        topbtn.style.display="block";
    }
    else{
        topbtn.style.display="none";
    }
});
topbtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
const themeToggle=document.getElementById("themeToggle");
themeToggle.addEventListener("click",() =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        themeToggle.textContent="☀️";
    }
    else{
        themeToggle.textContent="🌙";
    }
});
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
