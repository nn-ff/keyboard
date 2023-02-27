import React, { FC } from 'react';

interface NotFoundProps {
  length: number;
}

const NotFound: FC<NotFoundProps> = ({ length }) => {
  return (
    <div className={length > 0 ? 'notfound_container' : 'notfound_container active'}>
      Не найдено!
    </div>
  );
};

export default NotFound;
