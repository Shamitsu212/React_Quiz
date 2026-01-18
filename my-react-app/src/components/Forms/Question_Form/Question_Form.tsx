
import styles from './Question_Form.module.css'

import { useState } from 'react';

import Question_UI from '../../UI/Question_UI/Question_UI';
import FinalWindow from '../FinalWindow/FinalWindow';

interface Answer {
  id: number;
  text: string;
}

interface Question {
  label: string;
  q: Answer[];
}
    
interface Question_FormProps {
    questions: Question[]
    correct: number[]
}

function Question_Form({questions, correct}:Question_FormProps) {

    const [userInput, setUserInput] = useState<number[]>([])


  return (

    <form className={styles.Form}>
      {questions.map((q, i) => userInput.length == i ? (

        <Question_UI question={q} key={i} setUserInput={setUserInput} userInput={userInput} correct={correct}/>

      ): null)}
      {userInput.length == correct.length && (
        <FinalWindow correct={correct} userInput={userInput}/>
      )}
    </form>
  )
}

export default Question_Form
