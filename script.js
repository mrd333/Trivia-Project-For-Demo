var userAnswer1;
var userAnswer2;
var userAnswer3;
var total = 0;
var userNum = 0;
//ask how many questions user wants 
var questions = ["<h1 class='question1'>1. What borough is AoIT in?</h1>", "<h1 class='question2'>2. What city is AoIT in?</h1>", "<h1 class='question3'>3. What state is AoIT in?</h1>"];
var disIpt = [".ipt1", ".ipt2", ".ipt3"];

//allow user to reverse the order the questions are asked

    $(".btn2").hide();
    $(".ipt1").hide();
    $(".ipt2").hide();
    $(".ipt3").hide();
    $(".ans").hide();
    $(".btnReverse").hide();

$(".btn").click(function(){
    userNum = parseInt($(".ipt").val());
    for(var i = 0; i<userNum; i++){
            $(".questionTarget").append(questions[i]);
            buttonClick();
        }
        buttonClick();
        showIpts();
});

$(".btnReverse").click(function(){
        $(".questionTarget").html(" ");
        for(var i = userNum; 0<i; i--){
            $(".questionTarget").append(questions[i-1]);
            buttonClick();
            console.log(i);
        }
    });

$(".btn2").click(function(){
    userAnswer1 = $(".ipt1").val();
    userAnswer2 = $(".ipt2").val();
    userAnswer3 = $(".ipt3").val();
    
    if(userNum === 1){
        question1(userAnswer1);
    }else if(userNum === 2){
        question1(userAnswer1);
        question2(userAnswer2);
    }else{
        question1(userAnswer1);
        question2(userAnswer2);
        question3(userAnswer3);
    }
    
});

function question1(a){
            if(a === "Brooklyn"){
                total++;
                alert("You got " + Math.round(total/1*100) + "%");
                $(".correctTotal").html("Answers Correct: " + total);
            }else{
                alert("You got " + Math.round(total/1*100) + "%");
                $(".correctTotal").html("Answers Correct: " + total);
            }
           
}

function question2(a){     
            //Question 2
            if(a === "New York"){
                total++;
                alert("You got " + Math.round(total/2*100) + "%");
                $(".correctTotal").html("Answers Correct: " + total);
            }else{
                alert("You got " + Math.round(total/2*100) + "%");
                $(".correctTotal").html("Answers Correct: " + total);
            }
           
}

function question3(a){
            //Question 3
            if(a === "New York"){
                total++;
                alert("You got " + Math.round(total/3*100) + "%");
                $(".correctTotal").html("Answers Correct: " + total);
            }else{
                alert("You got " + Math.round(total/3*100) + "%");
                $(".correctTotal").html("Answers Correct: " + total);
            }
           
}

function buttonClick(){
    $(".btn").hide();
    $(".ipt").hide();
    $(".btn2").show();
    $(".ans").show();
    $(".btnReverse").show();
}

function showIpts(){
    $(".ipt1").show();
    $(".ipt2").show();
    $(".ipt3").show();
}


