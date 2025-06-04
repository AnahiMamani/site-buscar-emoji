function SearchBar({ search, onSearchChange }) {
    return (
        <input
            type="text"
            placeholder="Digite o nome do emoji..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}

export default SearchBar;
