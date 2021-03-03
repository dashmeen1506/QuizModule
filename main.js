const question = document.getElementById("question"); 
let questions = [{

    question: "A complete graph can have",
    choices : ["n2 spanning trees", "nn - 2 spanning trees","nn - 2 spanning trees", "nn - 2 spanning trees"],
    correctAnswer: 1
    },
    {
    question: "What is the full form of CSS",
    choices: ["Javascript", "Java", "HTML", "None of these"],
    correctAnswer: 3
    },
    {
    question: "How to include javascript in HTML document",
    choices: ["script", "link", "meta", "body"],
    correctAnswer: 0
    },
    { 
    question: "How to declare variable in javscript",
    choices: ["int", "float", "var", "double"],
    correctAnswer: 3
    },
    {
    question: "What => means in javascript",
    choices: ["Equals", "Arrow function", "Pointer", "Function"],
    correctAnswer: 1
    }, 
    {
    question: "Which of these is not a javascipt framework",
    choices: ["Angular", "React", "Django", "None of these"],
    correctAnswer: 2
    },
    {
    question: "How do you define objects in js",
    choices: ["{}", "[]", "()", "None of these"],
    correctAnswer: 0
    }, 
    {
        question: "Which of these is not a valid js version",
        choices: ["ES2", "EX19", "ES4", "ES6"],
        correctAnswer: 1
    },
    {
        question: "Whats the output of '2' + 2",
        choices: ["4", "'2'+2", "0", "22"],
        correctAnswer: 3
    }, 
        {
        question: "How to check if a value if NaN in javascript",
        choices: ["isNaN(val)", "isVal", "NaN", "None of these"],
        correctAnswer: 0
}];

var j=0;
var score=0;
getNewQuestion(j);
var next=document.getElementById("next");
var submit=document.getElementById("submit");
var result=document.getElementById("result");
var restart=document.getElementById("restart");
next.style.display='none';
restart.style.display='none';
next.addEventListener("click",function(){
    document.getElementById("result").style.display='none';
    if(j<9)
    {
        getNewQuestion(j+=1);
        submit.style.display='block';
        next.style.display='none';
    }
    else
    {
        document.getElementById("heading").innerHTML="Score: "+score;
        showScore();
    }
});


function getNewQuestion(j){
    question.innerHTML=j+1+"."+" "+questions[j].question;
    var ul=document.getElementById("choice");
    document.getElementById("ans").innerHTML="";
    ul.innerHTML="";
    for(let i=0;i<4;i++)
    {
        var li=document.createElement("li");
        var span=document.createElement("span");
        span.innerHTML=questions[j].choices[i];
        var input=document.createElement("input");
        input.type="radio";
        input.name="option";
        input.id=i;
        input.value=i;
        li.appendChild(input);
        li.appendChild(span);
        ul.appendChild(li);
    }
};

function showScore()
{
    var ul=document.getElementById("choice");
    ul.innerHTML="";
    var ul=document.getElementById("ans");
    document.getElementById("question").innerHTML="Answer Key";
    for(let i=0;i<10;i++)
    {
        var li=document.createElement("li");
        var span=document.createElement("span");
        span.innerHTML=questions[i].question+" - ";
        var span1=document.createElement("span");
        span1.style.background="green";
        span1.style.color="white";
        span1.style.padding="5px";
        span1.style.borderRadius="4px";
        span1.innerHTML=questions[i].choices[questions[i].correctAnswer];
        li.appendChild(span);
        li.appendChild(span1);
        ul.appendChild(li);
    }

    var restart=document.getElementById("restart");
    next.style.display="none";
    restart.style.display='block';
    restart.addEventListener("click",function(){
        j=0;
        getNewQuestion(j);
        next.style.display='block';
        restart.style.display='none';
        score=0;
        document.getElementById("heading").innerHTML="QUIZ";
    })
}

var submit = document.getElementById("submit");
    submit.addEventListener("click", function(){
        var ele = document.getElementsByName("option");
        let f=0;
        document.getElementById("result").style.display = "block";
            for(let i = 0; i < ele.length; i++) { 
                if(ele[i].checked)
                {
                    if(ele[i].value==questions[j].correctAnswer)
                    {
                        document.getElementById("result").innerHTML = "CORRECT";
                        document.getElementById("result").style.background="rgb(183, 230, 174)";
                        ++score;
                    }
                    else{
                        document.getElementById("result").innerHTML = "INCORRECT";
                        document.getElementById("result").style.background="rgb(240, 210, 210)";
                    }
                    f=1;
                }
            }
            if(f==0)
            {
                window.alert("Please select an option");
            }
            else{
            submit.style.display = "none";
            next.style.display = "block";
            }
    });

