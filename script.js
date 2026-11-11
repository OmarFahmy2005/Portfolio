const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.main-nav');
if(menuButton&&navigation){
 menuButton.addEventListener('click',()=>{
  const open=navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.textContent=open?'×':'☰';
 });
 navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';
 }));
}
document.querySelector('#year').textContent=new Date().getFullYear();
