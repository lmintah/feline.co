import React from 'react';

const Card = (props) => {
  const {name, email} = props;
  return (
    <div className= 'bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='cats' src={`https://robohash.org/${props.id}/set_set4/?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card
