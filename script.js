const qustn = [
    {
        question: "Q1:ARIJIT's favourite season",
        a:"Summer",
        b:"Winter",
        c:"Autumn",
        d:"Rainy",
        ans:"ans2"
    },
    {
        question: "Q2:Does he wear glasses?",
        a:"Once upon a time",
        b:"No",
        c:"Sometimes",
        d:"Yes",
        ans:"ans3"
    },
    {
        question: "Q3:Which type of wedding do you like?",
        a:"Registree Office",
        b:"Temple",
        c:"Banquet Hall",
        d:"Destination Wedding",
        ans:"ans4"
    },
    {
        question: "Q4:What is your favorite ice cream flavor?",
        a:"Chocolate",
        b:"Strawberry",
        c:"Vanilla",
        d:"Mango",
        ans:"ans4"
    },
    {
        question: "Q5:What is your favorite sport?",
        a:"Carrom",
        b:"Cricket",
        c:"Football",
        d:"Tennis",
        ans:"ans1"
    },
    {
        question: "Q6:If you get an opportunity for an adventurous journey, who would you prefer?",
        a:"Friends",
        b:"Life Partner",
        c:"Family",
        d:"Alone",
        ans:"ans1"
    },
    {
        question: "Q7:What your favorite movie genre?",
        a:"Horror",
        b:"Comedy",
        c:"Thriller",
        d:"Drama",
        ans:"ans3"
    },
    {
        question: "Q8:Arijit's relationship status:",
        a:"Married",
        b:"Single",
        c:"In a relationship",
        d:"Not interested",
        ans:"ans3"
    },
    {
        question: "Q9:Do you prefer the beach or the mountains?",
        a:"Mountain",
        b:"Beach",
        c:"Both",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question: "Q10:Arijit's most memorable place till date is",
        a:"Dhakuria Lake",
        b:"South City",
        c:"Patuli",
        d:"Princep Ghat",
        ans:"ans3"
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
