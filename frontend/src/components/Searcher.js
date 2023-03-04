import PropTypes from "prop-types";

export const Searcher = ({ initialValue, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.searcher.value;
    onSearch?.({ value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searcher">Buscar</label>
      <input
        defaultValue={initialValue}
        name="searcher"
        type="text"
        className="form-control"
        placeholder="Busca aquí los posts"
        aria-label="Busca aquí los posts"
        onChange={(e) => onSearch?.(e.target.value)}
      />
      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
        type="submit"
      >
        Buscar
      </button>
    </form>
  );
};

Searcher.propTypes = {
  initialValue: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Searcher;
