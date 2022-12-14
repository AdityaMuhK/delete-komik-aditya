import React, { useState } from "react";
import MyButton2 from "./MyButton2";

function FormKomik(props) {
  const { saveKomik } = props;
  // const movies = useState([{ id: 1, title: 'Pengabdi Setan 2'}]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rilis, setRilis] = useState("");
  const [synop, setSynop] = useState("");
  const [typek, setTypek] = useState("");
  const [status, setStatus] = useState("");
  const [Img, setImg] = useState("");

  const save = (e) => {
    e.preventDefault(); // function ini mencegah page ke-refresh
    saveKomik(title, author, rilis, synop, typek, status, Img); // memanggil function dari parent
  };

  return (
    <div className="bg">
      <h1 className="text-center green">
        <b>
          <i>COMIC STORE</i>
        </b>
      </h1>
      <div className="card-footer row g-8 bckg">
        <label className="form-label" htmlFor="blogs_name">
          Masukkan Judul Komik
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label" htmlFor="blogs_name">
            Pembuat Komik(author)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label" htmlFor="blogs_name">
            Tanggal/Bulan/Tahun Rilis
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Released"
            value={rilis}
            onChange={(e) => setRilis(e.target.value)}
          />
        </div>

        <label className="form-label" htmlFor="blogs_name">
          Masukkan Synopsis
        </label>
        <div className="input-group mb-3">
          <textarea
            className="form-control"
            aria-label="With textarea"
            type="text"
            placeholder="synopsis"
            value={synop}
            onChange={(e) => setSynop(e.target.value)}
          ></textarea>
        </div>

        <label className="form-label" htmlFor="blogs_name">
          Type komik
        </label>
        <div
          className="input-group mb-3"
          type="text"
          placeholder="type-komik"
          value={typek}
          onChange={(e) => setTypek(e.target.value)}
        >
          <select className="form-select" id="inputGroupSelect02">
            <option selected>Type</option>
            <option value="Manhua">Manhua</option>
            <option value="Manhwa">Manhwa</option>
            <option value="Manga">Manga</option>
          </select>
        </div>

        <label className="form-label" htmlFor="blogs_name">
          Status komik
        </label>
        <div
          className="input-group mb-3"
          type="text"
          placeholder="type-komik"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <select className="form-select" id="inputGroupSelect02">
            <option selected>Status</option>
            <option value="OnGoing">OnGoing</option>
            <option value="Complited">Completed</option>
          </select>
        </div>

        <label className="form-label" htmlFor="blogs_name">
          URL
        </label>
        <div className="input-group mb-3">
          <br />
          <input
            type="url"
            className="form-control"
            placeholder="Masukkan URL"
            value={Img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <MyButton2 title="Save" funcClick={save} />
      </div>
      <h1 className="text-center list">
        <b>
          <i>LIST COMIC</i>
        </b>
      </h1>
    </div>
  );
}

export default FormKomik;
