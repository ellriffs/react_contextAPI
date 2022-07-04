import {useState, useEffect, useContext} from 'react';
import {userContext} from '../User';

const MAIN_CONTENT = () => {
  const [count, setCount] = useState(0);
  const plusClickHandler = () => {
    setCount((prev) => prev + 1);
  };

  const minusClickHandler = () => {
    return count === 0 ? null : setCount((prev) => prev - 1);
  };

  useEffect(() => {
    console.log('Count has been mounted');
    return () => {
      console.log('Count has been unmounted ');
    };
  }, []);

  useEffect(() => {
    console.log(`Count has been updated to ${count}`);
  }, [count]);

  const {loggedIn, user} = useContext(userContext);

  return (
    <>
      {loggedIn ? (
        <>
          <p style={{textAlign: 'right', width: '99vw'}}>Welcome {user} 😌</p>
          <h1>Counter</h1>
          <h1>{count}</h1>
          <button onClick={plusClickHandler} className="add">
            +
          </button>
          <button onClick={minusClickHandler} className="subtract">
            -
          </button>
        </>
      ) : null}
    </>
  );
};

export default MAIN_CONTENT;
