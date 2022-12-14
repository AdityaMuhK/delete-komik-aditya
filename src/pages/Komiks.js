import { useState } from "react";
import FormKomik from "../components/FormKomik";
import Komik from "../components/Komik";

function Komiks() {
  const [komiks, setKomik] = useState([]);

  const saveKomik = (title, rilis, author, synop, typek, status, Img) => {
    // console.log('Save Movie dari parent ' + newTitle)
    setKomik(currentState => {
      //currentState.push({ id: 2, title: title }) // ngga bisa
      // return currentState.filter()
      return [
        ...currentState,
        {
          id: currentState.length + 1,
          title: title,
          rilis: rilis,
          author: author,
          synop: synop,
          typek: typek,
          status: status,
          Img: Img,
        },
      ];
    });
  };

  const deleteKomik = (id) => {
    console.log(`id yang ingin di hapus ${id}`);
    setKomik((currentState) => {
      return currentState.filter((komik) => {
        if (komik.id !== id) {
          return komik;
        }
      });
    });
  };

  return (
    <div className="row">
      <FormKomik saveKomik={saveKomik} />
      {komiks.map((komik) => (
        <Komik key={komik.id} komik={komik} deleteKomik={deleteKomik} />
      ))}
    </div>
  );
}

export default Komiks;
