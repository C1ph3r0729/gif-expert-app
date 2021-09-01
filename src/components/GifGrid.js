import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category}</h3>
      {loading && <p>Loading ...</p>}
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifGridItem {...gif} key={gif.id} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
