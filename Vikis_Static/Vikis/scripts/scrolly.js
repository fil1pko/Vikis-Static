window.addEventListener("scroll", function(){
    let header = document.getElementById('sticky');
    header.classList.toggle('sticky', window.scrollY > 0);
})



// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav a').forEach(link =>{
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active');
//     }
// })
