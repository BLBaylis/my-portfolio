import React from 'react'
import styles from './projectPage.module.css'
import Typography from '@material-ui/core/Typography'
import pomodoroScreenShot from '../static/images/pomodoro.png'

const PomodoroProject = () => (
  <div className={styles.outerDiv}>
    <Typography variant="display3" align="center">
      Pomodoro Timer
    </Typography>
    <figure>
      <a
        href="https://blbaylis.github.io/pomodoro-timer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.image} src={pomodoroScreenShot} />
      </a>
      <figcaption>
        <Typography variant="body1" align="center">
          Click the screenshot to visit my project!
        </Typography>
      </figcaption>
    </figure>
    <Typography className={styles.info} variant="title">
      When I read about this project on Freecodecamp, I was unfamiliar with the
      concept of a pomodoro. The technique is used to increase your productivity
      and originally consisted of a 25 minute work session followed by a 5
      minute break, which combined make up a single pomodoro. You would then
      repeat this process until the work is done or your work session finishes.
      It is named after the Italian word for tomato due to the inventor using a
      tomato timer to time himself.
    </Typography>
    <Typography className={styles.info} variant="title">
      The biggest challenge of the project was probably trying to make a
      responsive circle. I felt the timer had to be circular, because circles
      and time are most associated with each other, for example clocks. I also
      made a keyframes animation that syncs a line going around the screen with
      the timer like the hand of a clock. Each stage of the pomodoro has a
      different colour, which the background colour slowly changes to as time
      goes on. The work phase is green for go and the break phase is red to
      stop. Check the animation out, I&#39;ve set the phases to only be a minute
      each for demonstration purposes and I&#39;m pretty pleased with how it
      turned out!
    </Typography>
    <Typography className={styles.info} variant="title">
      I had never worked with audio before this project, though the hard part
      was deciding on a alarm tone. I settled on chimes for a relaxed feel, not
      to mention the last thing I would want when I&#39;m concentrating deeply
      on my work is a loud buzzer to make me jump.
    </Typography>
    <Typography className={styles.info} variant="title">
      Unfortunately, I hadn&#39;t learnt React when I made this as it would have
      been ideal. The idea of the different phases in a pomodoro is a textbook
      example of state. This combined with the constant updating of the clock
      would have lent itself very well to React. Maybe one day, I&#39;ll come
      back and remake it, though this isn&#39;t high priority!
    </Typography>
  </div>
)

export default PomodoroProject
