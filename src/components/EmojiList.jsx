import EmojiItem from "./EmojiItem";

function EmojiList({ emojis }) {
    if (emojis.length === 0) {
        return <p>Nenhum emoji encontrado 😢</p>;
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
