import React from 'react';
import PlaceDetails from '../../components/PlaceDetails';

function index(props) {
  return <PlaceDetails selectedPlace={props.selectedPlace} />;
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://online-lodging-marketplace.herokuapp.com/searchResult`
  );
  const data = await res.json();
  const places = data.data;

  return {
    fallback: 'blocking',
    paths: places.map((place) => ({
      params: { placeId: place._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
    const placeId = context.params.placeId;
  
    const res = await fetch(
        `https://online-lodging-marketplace.herokuapp.com/fetchSinglePlace`,
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
              id: placeId
            }),
        }
         
      );
      const data = await res.json();

      const selectedPlace = data.data;
  
    return {
      props: {
        selectedPlace: selectedPlace,
      },
    };
  }

export default index;
