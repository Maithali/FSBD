const btn = document.getElementById('button');

const randomColor = () =>{
    let val = '0123456789ABCDEF';
    let val1 = '#';

    for (let i = 0; i < 6; i++) {
        val1 = val1 + val[Math.floor(Math.random() * 16)];
        
    }
    return val1;
};

console.log(randomColor());

function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click', changeRandomColor);