import EmojiItem from "./EmojiItem";

function EmojiList({ emojis }) {
    if (!emojis || emojis.length === 0) {
        return null; // Ou um texto tipo "Nenhum resultado" se quiser
    }

    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {emojis.map((emoji, index) => (
                <EmojiItem key={index} emoji={emoji} />
            ))}
        </ul>
    );
}

export default EmojiList;
