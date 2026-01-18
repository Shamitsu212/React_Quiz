
import styles from './Answer_UI.module.css'

interface AnswerProps {
    q: {
        id: number;
        text: string;
    }
    setUserInput: React.Dispatch<React.SetStateAction<number[]>>;
}

function Answer_UI({q, setUserInput}:AnswerProps) {

    function answerPush(id:number):void {
        setUserInput(prev => [...prev, id])
    }
  
  return (

    <button className={styles.button} onClick={() => answerPush(q.id)}>
        {q.id + 1}. {q.text}
    </button>

  )
}

export default Answer_UI
