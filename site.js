const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});
nav.classList.toggle('scrolled',scrollY>40);
const btn=document.getElementById('menuBtn'),links=document.getElementById('navLinks');
btn.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
