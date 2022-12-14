function MyButton2(props) {
    const { title, funcClick} = props;

    return (
        <button onClick={funcClick} className="btn btn-outline-primary" type="submit">
            {title}
          </button>
    )
}

export default MyButton2
