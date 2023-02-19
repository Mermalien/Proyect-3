import { useState } from "react";

const ImageComponent = ({ src, alt, message }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div>
      <img src={src} alt={alt} onClick={handleClick} />
      {showMessage && <div>{message}</div>}
    </div>
  );
};

export default ImageComponent;
