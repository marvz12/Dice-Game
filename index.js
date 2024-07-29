const ranNum1 = Math.floor(Math.random() * 6) + 1;
const ranNum2 = Math.floor(Math.random() * 6) + 1;
// const ranNum1 = 1;
// console.log(ranNum1);

function dice1 (ranNum1) {
    if (ranNum1 === 1) {
        document.getElementById("one").classList.add("hide");
        document.getElementById("two").classList.add("hide");
        document.getElementById("five").classList.add("hide");
        document.getElementById("six").classList.add("hide");
        document.getElementById("four").remove();
        console.log("one")
    }
    else if (ranNum1 === 2) {
        document.getElementById("one").remove()
        document.getElementById("five").remove()
        document.getElementById("three").classList.add("hide");
        document.getElementById("four").classList.add("hide");
    }
    else if (ranNum1 === 3) {
        document.getElementById("two").classList.add("hide")
        document.getElementById("five").classList.add("hide")
        document.getElementById("three").remove()
    }
    else if (ranNum1 === 4) {
        document.getElementById("three").classList.add("hide")
        document.getElementById("four").classList.add("hide")
    }
    else if (ranNum1 === 5) {
        document.getElementById("four").remove()
    }else { console.log(ranNum1) } 
}

function dice2 (ranNum2) {
    if (ranNum2 === 1) {
        document.getElementById("one-2").classList.add("hide");
        document.getElementById("two-2").classList.add("hide");
        document.getElementById("five-2").classList.add("hide");
        document.getElementById("six-2").classList.add("hide");
        document.getElementById("four-2").remove();
        console.log("one")
    }
    else if (ranNum2 === 2) {
        document.getElementById("one-2").remove()
        document.getElementById("five-2").remove()
        document.getElementById("three-2").classList.add("hide");
        document.getElementById("four-2").classList.add("hide");
    }
    else if (ranNum2 === 3) {
        document.getElementById("two-2").classList.add("hide")
        document.getElementById("five-2").classList.add("hide")
        document.getElementById("three-2").remove()
    }
    else if (ranNum2 === 4) {
        document.getElementById("three-2").classList.add("hide")
        document.getElementById("four-2").classList.add("hide")
    }
    else if (ranNum2 === 5) {
        document.getElementById("four-2").remove()
    }else { console.log(ranNum2) } 
}

dice1(ranNum1);
dice2(ranNum2);