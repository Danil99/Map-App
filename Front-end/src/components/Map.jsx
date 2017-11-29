import React from 'react';

export default function Map(props) {
  return (
    <div className="map">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDGEalMjpRTAJP0c6ddstu6qCRjoP93c2Y&q=${props.adress}`}>
      </iframe>
    </div>
  )
}
