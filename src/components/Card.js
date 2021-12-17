import './Card.css';

export default function Card({ card, handleChoice, flipped, disabled }) {
  const { src } = card;

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div>
      <div className='card'>
        <div className={flipped ? 'flipped' : ''}>
          <img className='front' draggable={false} src={src} alt='card front' />
          <img
            className='back'
            onClick={handleClick}
            draggable={false}
            src='/img/cover.png'
            alt='card back'
          />
        </div>
      </div>
    </div>
  );
}
