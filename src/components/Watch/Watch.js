import styles from './Watch.module.scss';

const Watch = props => {
  let time = props.time;
  let hours =parseInt(time / (1000 * 60 * 60));
  time -= hours * (1000 * 60 * 60);
  let minutes = parseInt(time / (1000 * 60));
  time -= minutes * (1000 * 60);
  let seconds = parseInt(time / (1000));
  time -= seconds * (1000);
  let miliSeconds = time;

  if(hours < 10){
    hours = '0' + hours;
  }
  if(minutes < 10){
    minutes = '0' + minutes;
  }
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  if(miliSeconds < 10){
    miliSeconds = '00' + miliSeconds;
  } else if(miliSeconds < 100){
    miliSeconds = '0' +miliSeconds
  }
  return (
    <h1 className={styles.watch}>{hours}:{minutes}:{seconds}.{miliSeconds}</h1>
  )
}

export default Watch;