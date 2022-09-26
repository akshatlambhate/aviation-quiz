import React, { useEffect, useState } from 'react'
import '../components/AirQuiz.css'
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';



function AirQuiz() {
     const[question,setQuestion] = useState(0);
     const[currentQuestion,setcurrentQuestion] = useState(0);
     const [score , setScore] = useState(false);
     const [myScore, showMyScore] = useState(0);
    const questionAircraft =[
        { questionText: 'which aircraft is used in 9/11 attacks?',
           questionAnswer:[
            { answerText:'Airbus777', isCorrect:false },
            { answerText:'Airbus767', isCorrect:false },
            { answerText:'Boing767 223 ER', isCorrect: true},
            { answerText:'Airbus A32 Neo', isCorrect:false },
                ],
               questionImage: <img src={pic1} className='image-plane'></img>
        },
        { questionText: 'Which is the Biggest Aircraft in India?',
           questionAnswer:[
            { answerText:'Boing 787 Dreamliner', isCorrect:false },
            { answerText:'Airbus767', isCorrect:false },
            { answerText:'Airbus A400M atlas', isCorrect: false},
            { answerText:'Airbus A380', isCorrect:true },
                ],
                questionImage: <img src={pic2} className='image-plane'></img>

        },
        { questionText: 'How many passengers are allowed in Airbus A320?',
           questionAnswer:[
            { answerText:'170', isCorrect:true },
            { answerText:'182', isCorrect:false },
            { answerText:'220', isCorrect: false},
            { answerText:'320', isCorrect:false },
                ],
                questionImage: <img src={pic3} className='image-plane'></img>
        },
        { questionText: 'In which part of an Aircraft , the fuel is present?',
           questionAnswer:[
            { answerText:'Near tyres', isCorrect:false },
            { answerText:'Above Storage deck', isCorrect:false },
            { answerText:'in the wings', isCorrect: true},
            { answerText:'at the back', isCorrect:false },
                ],
                questionImage: <img src={pic4} className='image-plane'></img>
        },
        { questionText: 'Where the Auxillary engines are present in aircraft',
           questionAnswer:[
            { answerText:'At the back of an aircraft', isCorrect:true },
            { answerText:'On the Wings of an aircraft ', isCorrect:false },
            { answerText:'At the front of an aircraft', isCorrect: false},
            { answerText:'Auillarty engines are not present in aircrafts', isCorrect:false },
                ],
                questionImage: <img src={pic5} className='image-plane'></img>
        },
    ]

    useEffect(()=>{
       console.log('use effect worked')
      },[currentQuestion])
   const handleQuestionChange =(isCorrect)=> {
    if (isCorrect===true) {
     showMyScore( myScore +1)
    }
    const next = currentQuestion +1;
    if(  next < questionAircraft.length) {
      setcurrentQuestion(next);
    }
    else {
          setScore(true)
    }
       
   }

  return (
    <div className='quiz-card'>
       { score ? (<div className='score-card'> 
           Your Score is <span>{myScore}</span>/ 5
      </div>
       ) : (
        <>
      <div className='question-heading'><p>Question <span>{currentQuestion +1 }</span> / 5</p></div>
      <div className='question-text'><p>{questionAircraft[currentQuestion].questionText}</p></div>
      <div className='bottom'>
      <div className='answer-text'> { questionAircraft[currentQuestion].questionAnswer.map((questionAnswer)=>
         (<button className='answer-btn'onClick={()=>handleQuestionChange(questionAnswer.isCorrect)}>{questionAnswer.answerText}</button>))}
         </div>
       <div className='plane-image'>
         {questionAircraft[currentQuestion].questionImage}
       </div>
       </div>
       </>
       ) }
       
    </div>
  )
}

export default AirQuiz
