import Proptypes from "prop-types";

export const Searcher = ({ initialValue, onSearch }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.({ value: e.target.searcher[0].value });
      }}
    >
      <div className="input-group mb-3">
        <input
          defaultValue={initialValue}
          name="searcher"
          type="text"
          className="form-control"
          placeholder="Busca aquí los post "
          aria-label="Busca aquí los post "
        ></input>
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          className="input-group-text"
          id="searcher"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

Searcher.propTypes = {
  initialValue: Proptypes.string.isRequired,
  onSearch: Proptypes.func.isRequired,
};
