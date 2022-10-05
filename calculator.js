const btns = document.querySelectorAll('.btn');
const currentResult = document.querySelector('.current-result');


btns.forEach(btn => btn.addEventListener('click', (e) => {
    console.log(e.target.id);
    currentResult.innerHTML = e.target.id;
}))