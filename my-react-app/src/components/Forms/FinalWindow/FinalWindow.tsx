
import styles from './FinalWindow.module.css'


    interface FinalWindowProps {
        correct: number[]
        userInput: number[]
    }

function FinalWindow({correct, userInput}: FinalWindowProps) {

    let total = 0
    for(let i = 0; i < correct.length; i++){
        if(correct[i] == userInput[i]){
            total++
        }
    }


  return (
    <p className={styles.p}>
        <span>
            Вы ответили правильно на
        </span>
        <span>
            {total} вопросов из {correct.length}
        </span> 

    </p>
  )
}

export default FinalWindow
