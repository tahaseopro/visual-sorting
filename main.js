
function random () {
    return Math.floor(Math.random() * (90 - 15 + 1)) + 15;

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function randamizeBars  ()  {
    
    Array.from(childrens).forEach(element => {
        let height = random()
        element.style.height = height + '%';
        element.textContent = height
        element.style.backgroundColor = green;
        console.log(height, 'dfd')

    });
    childrens[0].style.backgroundColor =  yellow;

    stop=true; //stop the sorting


}


const green = "#86efac";
const yellow = "#fde047";
const dark_green = "#047857";
let time = 500;
let stop=true;           //to stop when reset
let container = document.getElementById("ct");
const childrens = container.children;










randamizeBars()  //rondom on start of wesite


let reset = document.getElementById("reset")       //to randmozie
reset.addEventListener('click', () => {
    randamizeBars()
})



let slider = document.getElementById('speedControl')            //slider time controler of delay
slider.addEventListener('input', () => {
    time =2500- parseInt(slider.value); 
    
});



sort.addEventListener('click', async () => {            // Sorting 
    stop=false;
    let arr = Array.from(childrens);

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {

            if(stop) return;
            let a = arr[i];
            let b = arr[i + 1];

            if (a.offsetHeight > b.offsetHeight) {

                const aRect = a.getBoundingClientRect();
                const bRect = b.getBoundingClientRect();

                a.parentNode.insertBefore(b, a);

                const aRectAfter = a.getBoundingClientRect();
                const bRectAfter = b.getBoundingClientRect();

                const aDeltaX = aRect.left - aRectAfter.left;
                const bDeltaX = bRect.left - bRectAfter.left;

                a.style.transition = 'none';
                b.style.transition = 'none';
                a.style.transform = `translateX(${aDeltaX}px)`;
                b.style.transform = `translateX(${bDeltaX}px)`;

                a.offsetWidth; b.offsetWidth;

                a.style.transition = 'transform 0.5s';
                b.style.transition = 'transform 0.5s';
                a.style.transform = 'translateX(0)';
                b.style.transform = 'translateX(0)';

                await delay(time);
                arr = Array.from(childrens);
            } else {
                a.style.backgroundColor=green
                b.style.backgroundColor = yellow;
                await delay(time);
            }
        }

        arr[0].style.backgroundColor = yellow;
        arr[arr.length - 1 - j].style.backgroundColor = dark_green;

        await delay(time);
    }
arr[0].style.backgroundColor = dark_green;
    
});
