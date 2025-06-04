function EmojiItem({ emoji }) {
    return (
        <div className="emoji-item">
            <span>{emoji.emoji}</span>
            <span style={{ marginLeft: "1rem", color: "#666", fontSize: "1rem" }}>
                {emoji.code}
            </span>
            <span style={{ marginLeft: "1rem", color: "#999", fontSize: "0.9rem" }}>
                — {emoji.description}
            </span>
        </div>
    );
}

export default EmojiItem;
