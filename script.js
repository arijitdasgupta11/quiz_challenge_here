const qustn = [
    {
        question: "Q1:AJAX stands for",
        a:"Asymmetric Java And XML",
        b:"Asynchronous JavaScript And XML",
        c:"Asynchronous Java And HTML",
        d:"There's no full form",
        ans:"ans2"
    },
    {
        question: "Q2:In which programming language variables are hoisted?",
        a:"C",
        b:"FORTRAN",
        c:"C++",
        d:"JS",
        ans:"ans4"
    },
    {
        question: "Q3:Which tag is used to write the javascript code in html?",
        a:"<style>",
        b:"<js>",
        c:"<script>",
        d:"<javascript>",
        ans:"ans3"
    },
    {
        question: "Q4:Which is not a keyword in Javascript?",
        a:"Var",
        b:"Let",
        c:"Const",
        d:"Global",
        ans:"ans4"
    },
    {
        question: "Q5:Which one of the following DOM method does not exist in JS?",
        a:"document.getElementByid()",
        b:"document.getElementById()",
        c:"document.getElementByoutput()",
        d:"document.getelementById()",
        ans:"ans2"
    },
    {
        question: "Q6:which one of the following is used to compare to variables in JS?",
        a:"equal",
        b:"True",
        c:"===",
        d:"==",
        ans:"ans3"
    },
    {
        question: "Q7:Which one is used to write the dynamic text on the html document?",
        a:"innerText",
        b:"innerHTML",
        c:"a & b both",
        d:"None of the above",
        ans:"ans3"
    },
    {
        question: "Q8:How can you add a comment in a JavaScript??",
        a:"//",
        b:"<! >",
        c:"#",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question: "Q9:To give an alert in JS we use:?",
        a:"addEventListener()",
        b:"alert()",
        c:"Alert()",
        d:"None of the above",
        ans:"ans2"
    },
    {
        question: "Q10:How do you declare a JavaScript variable?",
        a:"var c=0",
        b:"variable c=0",
        c:"Let c=0",
        d:"cosnt c=0",
        ans:"ans1"
    }

];

const question= document.querySelector('.question');

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit  = document.querySelector('#button');
const answers= document.querySelectorAll('.answer');

const showscore= document.querySelector('#showscore');



let c=0;
let score=0;
const load = () =>{
    const list = qustn[c];
    question.innerText = list.question; 

    option1.innerText = list.a; 
    option2.innerText = list.b; 
    option3.innerText = list.c; 
    option4.innerText = list.d; 

}
load();
const getans = () => {
    let answer;
    answers.forEach((curans)=> {
        if(curans.checked){
            answer=curans.id;
        }
    });
    return answer;
};
const deselect = () =>{
    answers.forEach((curans)=> curans.checked = false);
    }
button.addEventListener('click', () => {
    const checkans= getans();
    console.log(checkans);
    if(checkans === qustn[c].ans){
       score++;
    }
    c++;
    
     deselect();
    if(c<qustn.length)
    {
        load();
    }
    else
    {
        showscore.innerHTML= `
          <h3> Your Score -> ${score}/${qustn.length}☺</h3>
          <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showscore.classList.remove('sscore');
    }

});
