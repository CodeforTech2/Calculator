const btns = document.querySelectorAll('.btn');
const currentResult = document.querySelector('.current-result');
const previousResult = document.querySelector('.previous-result');
const clearAll = document.querySelector('#clear-all');
const clearEntry = document.querySelector('#clear-entry');

btns.forEach(btn => btn.addEventListener('click', (e) => {
    console.log(e.target.id);
    const firstNumber = e.target.innerHTML; 
    currentResult.innerHTML += firstNumber;
}));

function resetAll() {
    clearAll.addEventListener('click', () => {
        currentResult.innerHTML = '';
        previousResult.innerHTML = '';
    });
};
resetAll();

function resetEntry() {
    clearEntry.addEventListener('click', () => {
        currentResult.innerHTML = '';
    })
}
resetEntry();