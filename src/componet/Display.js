import React from 'react';

function Display() {
  return (
    <div className="d-flex bd-highlight">
      <div className="p-2 w-100 bd-highlight">
        <iframe
          min-width="560px"
          width="500px"
          height="315"
          src="https://www.youtube.com/embed/h8lOrauHXJ0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="p-2 flex-shrink-1 bd-highlight">Flex item</div>
    </div>
  );
}

export default Display;
