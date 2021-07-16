import React from 'react'

import Video from '@UI/Video';
import video from './video/han-solo.mp4';

import styles from './ErrorMessage.module.scss'

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won. <br />
        We cannot display data
        <br />
        <Video src={video} classes={styles.video} playbackRate={1.0} />.
      </p>
    </>
  )
}

export default ErrorMessage
