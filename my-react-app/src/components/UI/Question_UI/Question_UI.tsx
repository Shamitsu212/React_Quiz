
import Answer_UI from '../Answer_UI/Answer_UI';
import ProgressBar_UI from '../ProgressBar/ProgressBar_UI';
import styles from './Question_UI.module.css'


interface QuestionProps {
    question: {
        label: string;
        q: {
            id: number;
            text: string;
        }[]
    }
    setUserInput: React.Dispatch<React.SetStateAction<number[]>>;
    userInput: number[];
    correct: number[];
}

function Question_UI({question, setUserInput, userInput, correct}:QuestionProps) {
 


    return (
        <div className={styles.Question}>
        
            <div className={styles.ProgressBar}>
                <ProgressBar_UI correct={correct} userInput={userInput}/>
            </div>

            <h1 className={styles.Question__label}>
              {question.label}
            </h1>

            <div className={styles.Question__AnswerContainer}>

              {question.q.map((q) => (
                  <Answer_UI q={q} key={q.id}  setUserInput={setUserInput}/>
              ))}

            </div>
          
        </div>
    )
}

export default Question_UI
