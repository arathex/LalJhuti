import useSound from 'use-sound';
import boopSfx from '../../sound/3 Cute Pop Sounds.mp3';

const BoopButton = ({className}) => {
  const [play] = useSound(boopSfx);

  return (
    <>
    <button className={`bg-red-500 ${className}`} onClick={play}>Boop</button>
    </>
  )
};

export default BoopButton