import React from 'react'
import LargeLink from '../components/largeLink/LargeLink'
import styles from './project.module.css'
import ticTacToeScreenShot from '../static/images/tictactoe.png'

const TicTacToeProject = () => (
  <div className={styles.outerDiv}>
    <h1 className={styles.heading}>Tic Tac Tor Game</h1>
    <figure>
      <a
        href="https://blbaylis.github.io/tic-tac-toe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={ticTacToeScreenShot} />
      </a>
      <figcaption>Click the screenshot to visit my project!</figcaption>
    </figure>
    <p className={styles.info}>
      The primary aim of this project was to create a Tic-TacToe game that
      can&#39;t be beaten. I emjoyed breaking the game down into a system and I
      was interested in solving games anyway as someone who enjoys some chess
      from time to time. Not that we are likely to ever solve chess with how
      many different game boards are possible!
    </p>
    <p className={styles.info}>
      I opted to think about the game&#39;s symmetry to eliminate large groups
      of the intially many different permutations of the game. On top of that,
      having the computer play optimally eliminates many more potential paths,
      so it isn&#39;t as daunting a task as it seems from the outset.
    </p>
    <p className={styles.info}>
      I&#39;ve come to the conclusion that I succeeded in making the game
      unbeatable by creating a function that selects random moves on behalf of
      the player and records the result of the game. I then ran this function in
      a loop, which in the end ran as many as a million at a time with no
      losses. This testing was quite taxing for my poor old computer! I have
      also been unable to beat it the old fashioned way, playing against it
      myself. This was only slightly taxing for my poor old brain.
    </p>
    <p className={styles.info}>
      I also seized the opportunity to get a bit creative with icons, firing up
      the lowly Microsoft Paint to create a few funvariations of the classic
      noughts and crosses along with the oppunity to choose your colour. A fun
      project.
    </p>
    <div className={styles.largeLink}>
      <LargeLink to="projects/" buttonText="PROJECTS" />
    </div>
  </div>
)

export default TicTacToeProject
