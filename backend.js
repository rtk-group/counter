let boxbtn = document.querySelectorAll('.boxbtn');
let wincontainer = document.querySelector('.wincontainer')
let win = document.querySelector('#win')
let newgame = document.querySelector('#new');
let resetbtn = document.querySelector('#reset')
let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let turnO = true;
boxbtn.forEach(function (boxbtn) {
    boxbtn.addEventListener('click', function () {
        // console.log("box was clicked");
        if (turnO) {
            boxbtn.innerText = "O"
            turnO = false;
        } else {
            boxbtn.innerText = "X"
            turnO = true;
        }
        boxbtn.disabled = true;
        checkwinner();
    })
});
function checkwinner() {
    for (pattern of winpattern) {
        console.log(boxbtn[pattern[0]], boxbtn[pattern[1]], boxbtn[pattern[2]]);
        let pos1val = boxbtn[pattern[0]].innerText;
        let pos2val = boxbtn[pattern[1]].innerText;
        let pos3val = boxbtn[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                wincontainer.classList.remove('hide');
                win.innerText = `Congrats The Winner is ${pos1val}`;
                disabledboxes();
            }
        }
    }
}
function disabledboxes() {
    for (box of boxbtn) {
        box.disabled = true;
    }
}
function enebleboxes() {
    for (box of boxbtn) {
        box.disabled = false;
        box.innerText = "";
    }
}
newgame.addEventListener('click', function () {
    turnO = true;
    enebleboxes();
    wincontainer.classList.add('hide');
});
resetbtn.addEventListener('click', function () {
    turnO = true;
    enebleboxes();
    wincontainer.classList.add('hide');
});
