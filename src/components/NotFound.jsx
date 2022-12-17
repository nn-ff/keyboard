import React from 'react';

const NotFound = ({ length }) => {
  return (
    <div className={length > 0 ? 'notfound_container' : 'notfound_container active'}>
      Не найдено!
    </div>
  );
};

export default NotFound;
