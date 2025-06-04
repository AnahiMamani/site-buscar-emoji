function SearchBar({ search, onSearchChange }) {
    return (
        <input
            type="text"
            placeholder="Digite o nome do emoji..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />
    );
}

export default SearchBar;
