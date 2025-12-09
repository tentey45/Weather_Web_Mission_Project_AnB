import "./searchBar.css";

export default function SearchBar({ onSearch }) {
  let city = "";

  function handleSubmit() {
    onSearch(city);
  }

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Enter city..."
        onChange={(e) => (city = e.target.value)}
      />
      <button className="search-button" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
