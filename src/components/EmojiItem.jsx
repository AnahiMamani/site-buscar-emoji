function EmojiItem({ emoji }) {
    return (
        <li style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            {emoji.emoji} - {emoji.name}
        </li>
    );
}

export default EmojiItem;
