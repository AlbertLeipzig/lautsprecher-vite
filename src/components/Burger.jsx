import { useContext } from 'react';
import { BurgerContext } from '../context/BurgerContext.jsx';
export const Burger = () => {
  const { burgerState, setBurgerState } = useContext(BurgerContext);

  const updateState = () => {
    /* if(state === 'closed') {
      setState("open");
    } else {
      setState("closed");
    } */
    setBurgerState(burgerState === 'closed' ? 'open' : 'closed');
  };

  return (
    <div className={`burger-menu burger-menu--${burgerState}`} onClick={() => updateState()}>
      <div className={`line1__${burgerState}`} />
      <div className={`line2__${burgerState}`} />
      <div className={`line3__${burgerState}`} />
      <div className={`line4__${burgerState}`} />
      <div className={`line5__${burgerState}`} />
    </div>
  );
};
