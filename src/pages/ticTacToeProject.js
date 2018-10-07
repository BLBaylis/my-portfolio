import React from 'react'
import styles from './projectPage.module.css'
import Typography from '@material-ui/core/Typography'
import ticTacToeScreenShot from '../static/images/tictactoe.png'

const TicTacToeProject = () => (
  <div className={styles.outerDiv}>
    <Typography variant="display3" align="center">
      Tic Tac Toe Game
    </Typography>
    <figure>
      <a
        href="https://blbaylis.github.io/tic-tac-toe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.image} src={ticTacToeScreenShot} />
      </a>
      <figcaption>
        <Typography variant="body2" align="center">
          Click the screenshot to visit my project!
        </Typography>
      </figcaption>
    </figure>
    <Typography variant="title" className={styles.info}>
      The primary aim of this project was to create a Tic-Tac-Toe game that
      can&#39;t be beaten. I enjoyed breaking the game down into a system and I
      was interested in solving games anyway as someone who enjoys some chess
      from time to time. Not that we are likely to ever solve chess with how
      many different game boards are possible!
    </Typography>
    <Typography variant="title" className={styles.info}>
      I opted to think about the game&#39;s symmetry to eliminate large groups
      of the initally many different permutations of the game. On top of that,
      having the computer play optimally eliminates many more potential paths,
      so it isn&#39;t as daunting a task as it seems from the outset.
    </Typography>
    <Typography variant="title" className={styles.info}>
      I&#39;ve come to the conclusion that I succeeded in making the game
      unbeatable by creating a function that selects random moves on behalf of
      the player and records the result of the game. I then ran this function in
      a loop, which in the end ran as many as a million at a time with no
      losses. This testing was quite taxing for my poor old computer! I have
      also been unable to beat it the old fashioned way, playing against it
      myself. This testing was only slightly taxing for my poor old brain.
    </Typography>
    <Typography variant="title" className={styles.info}>
      I also seized the opportunity to get a bit creative with icons, firing up
      the lowly Microsoft Paint to create a few fun variations of the classic
      noughts and crosses along with the opportunity to choose your colour. A
      fun project.
    </Typography>
  </div>
)

export default TicTacToeProject
