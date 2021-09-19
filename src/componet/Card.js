import React from 'react';

function Card() {
  return (
    <div class="col">
      <div class="card">
        <img
          src="https://picsum.photos/200/300"
          class="card-img-top"
          alt="..."
          width="100px"
          height="100px"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
