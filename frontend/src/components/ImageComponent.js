import { useState } from "react";

const ImageComponent = ({ src, alt, message }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <figure>
      <img
        src={src}
        alt={alt}
        onClick={handleClick}
        className={showMessage ? "faded" : ""}
        style={{ height: "200px", width: "200px" }}
      />
      {showMessage && <p>{message}</p>}
    </figure>
  );
};

export default ImageComponent;
