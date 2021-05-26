name1 = localStorage.getItem("Player 1");
name2 = localStorage.getItem("Player 2");

document.getElementById("player1name").innerHTML=name1+" : ";
document.getElementById("player2name").innerHTML=name2+" : ";

player1score = 0;
player2score = 0;

document.getElementById("playerscore1").innerHTML=player1score;
document.getElementById("playerscore2").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="Question Turn : "+name1;
document.getElementById("playeranswer").innerHTML="Answer Turn : "+name2;

function send() {

    number1 = document.getElementById("input1").value;
    number2 = document.getElementById("input2").value;
    
    remove_charat3 = number1 + " x " + number2;

    questionWORD = "<h4 id='word_display'> Q. " + remove_charat3 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    checkbutton = "<br> <button id='button_check_box' class='btn btn-primary' onclick='check()'>Check</button>";

    row = questionWORD+input_box+checkbutton;
    document.getElementById("output").innerHTML=row;

    document.getElementById("input1").value=" ";
    document.getElementById("input2").value=" ";

}

questionTURN = "player1";
answerTURN = "player2";

function check() {

    getAns = document.getElementById("input_check_box").value;
    ans = number1*number2;
    console.log(ans);

    if (getAns == ans) {

        if (answerTURN == "player1") {

            player1score += 1;
            document.getElementById("playerscore1").innerHTML=player1score;

        }

        else {
            
            player2score += 1;
            document.getElementById("playerscore2").innerHTML=player2score;

        }

    }

    if (questionTURN == "player1") {

        questionTURN = "player2"
        document.getElementById("playerquestion").innerHTML= "Question Turn : "+name2;

    }

    else {

        questionTURN = "player1"
        document.getElementById("playerquestion").innerHTML= "Question Turn : "+name1;

    }

    if (answerTURN == "player1") {

        answerTURN = "player2"
        document.getElementById("playeranswer").innerHTML= "Answer Turn : "+name2;

    }

    else {

        answerTURN = "player1"
        document.getElementById("playeranswer").innerHTML= "Answer Turn : "+name1;

    }

    document.getElementById("output").innerHTML=" ";

}