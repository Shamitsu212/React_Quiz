
import styles from './App.module.css'
import Question_Form from './components/Forms/Question_Form/Question_Form';

import { questions} from './data/questions'

function App() {

const correct: number[] = [0, 0, 0, 0, 0]

  return (
    <main className={styles.App}>
      
      <Question_Form questions={questions} correct={correct}/>

    </main>
  )
}

export default App
