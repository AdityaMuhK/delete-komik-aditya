import MyButton from "./MyButton";

function Komik(props) {

  const { komik, deleteKomik } = props;
  const removeKomik = () => {
      console.log('delete komik');
      deleteKomik(komik.id);
  }


  return (
    <div className="card-group col-6 bckg my-2 ">
      <div className="card">
        <img src={komik.Img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{komik.title}</h5>
          <h6 className="card-title text-muted">
            <b>Author: </b>
            {komik.author}
          </h6>
          <br />
          <h6 className="card-title text-muted">
            <b>Type:</b> {komik.typek}
          </h6>
          <br />
          <h6 className="card-title text-muted">
            <b> status:</b> {komik.status}
          </h6>
          <br />
          <h6 className="card-text">
            <b>synopsis: </b>
            {komik.synop}
          </h6>
        </div>
        <div className="card-footer">
          <small className="text-muted">Released: {komik.rilis}</small>
        </div>
        <MyButton title="Delete" funcClick={removeKomik}/>
      </div>
    </div>
  );
}

export default Komik;
