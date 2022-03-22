const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: '50', display: 'flex', alignItems: 'center', padding: '4px' }}
            onClick={onClick}
        />

    );
}

export default NextArrow;