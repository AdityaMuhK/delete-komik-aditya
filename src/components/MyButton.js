function MyButton(props) {
    const { title, funcClick} = props;

    return (
        <button onClick={funcClick} className="btn btn-danger" type="submit">
            {title}
          </button>
    )
}

export default MyButton
