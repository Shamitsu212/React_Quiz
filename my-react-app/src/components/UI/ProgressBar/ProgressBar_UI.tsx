
import styles from './ProgressBar_UI.module.css'

import { useEffect, useState } from 'react';

interface ProgressBarProps {
  correct: number[];
  userInput: number[];
}

function ProgressBar_UI({correct, userInput}:ProgressBarProps) {

  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const answeredCount = userInput.length;
    const totalQuestions = correct.length;   

    const progressValue = Math.round((answeredCount / totalQuestions) * 100);
    setProgress(progressValue);
  }, [userInput]);


  
  return (
    <div className={styles.ProgressBar}>
      
      <div className={styles.ProgressBar_progression}  style={{width: `${progress}%`}}/>

    </div>
  )
}

export default ProgressBar_UI
