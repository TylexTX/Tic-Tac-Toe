let player = true;
let playing = true;
const squares = {
    lt:"",
    mt:"",
    rt:"",
    lm:"",
    mm:"",
    rm:"",
    lb:"",
    mb:"",
    rb:""
}

function restart() {
    const squaresID = document.querySelectorAll('td');
    squaresID.forEach(function(square) {
        square.innerText = "";
    });

    for (let i in squares) {
        squares[i] = "";
    }
    
    document.getElementById("output").innerText = "It's X's turn";
    playing = true;
    player = true;
}

function checkRow(one, two, three) {
    if (one == two && two == three) {
        document.getElementById("output").innerText = one + " won the game";
        playing = false;
    }
}

function click(event) {
    if (playing) {
        const id = event.target.id;
        if (squares[id] == "") {
            if (player) {
                document.getElementById(id).innerText = "X";
                document.getElementById(id).style.color = "#dd2222";
                document.getElementById("output").innerText = "It's O's turn";
                squares[id] = "X";
                player = false;
            } else {
                document.getElementById(id).innerText = "O";
                document.getElementById(id).style.color = "#2222dd";
                document.getElementById("output").innerText = "It's X's turn";
                squares[id] = "O";
                player = true;
            }
            if (squares.lt != "" &&
                squares.mt != "" &&
                squares.rt != "" &&
                squares.lm != "" &&
                squares.mm != "" &&
                squares.rm != "" &&
                squares.lb != "" &&
                squares.mb != "" &&
                squares.rb != ""
            ) {
                document.getElementById("output").innerText = "It's a tie";
                playing = false;
            }
        }

        if (squares.lt != "") {
            checkRow(squares.lt, squares.mt, squares.rt);
            checkRow(squares.lt, squares.lm, squares.lb);
        }
        if (squares.mm != "") {
            checkRow(squares.lt, squares.mm, squares.rb);
            checkRow(squares.lm, squares.mm, squares.rm);
            checkRow(squares.lb, squares.mm, squares.rt);
            checkRow(squares.mb, squares.mm, squares.mt);
        }
        if (squares.rb != "") {
            checkRow(squares.rb, squares.rm, squares.rt);
            checkRow(squares.rb, squares.mb, squares.lb);
        }
    }
}

const squaresID = document.querySelectorAll('td');
squaresID.forEach(function(square) {
    square.addEventListener('click', click);
});