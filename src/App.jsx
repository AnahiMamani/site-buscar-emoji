import { useState } from "react";
import { emojiData } from "./data/emojiData";
import SearchBar from "./components/SearchBar";
import EmojiList from "./components/EmojiList";
import "./App.css";

function App() {
    const [search, setSearch] = useState("");

    const filteredEmojis = emojiData.filter((emoji) =>
        emoji.code.toLowerCase().includes(search.toLowerCase()) ||
        emoji.description.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <div className="container-principal">
            <div className="titulo-container">
                <h1>🔍 Busca de Emojis</h1>
                <div className="search-bar">
                    <SearchBar search={search} onSearchChange={setSearch} />
                </div>
            </div>

            <div className="app-container">
                {search.trim() !== "" && (
                    <EmojiList emojis={filteredEmojis} />
                )}
            </div>
        </div>
    );

}

export default App;
