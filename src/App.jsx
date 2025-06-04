import { useState } from "react";
import { emojiData } from "./data/emojiData";
import SearchBar from "./components/SearchBar";
import EmojiList from "./components/EmojiList";

function App() {
    const [search, setSearch] = useState("");

    const filteredEmojis = emojiData.filter((emoji) =>
        emoji.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: "2rem", fontFamily: "Arial" }}>
            <h1>🔍 Busca de Emojis</h1>
            <SearchBar search={search} onSearchChange={setSearch} />
            <EmojiList emojis={filteredEmojis} />
        </div>
    );
}

export default App;
