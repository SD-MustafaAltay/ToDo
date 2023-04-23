import React, { useContext } from "react";
import { applicationContext } from "../context/ApplicationContext";


function AddTask() {
  const context = useContext(applicationContext);
  const Save = () => {
    var t = document.getElementById("title").value;
    var d = document.getElementById("desc").value;
    var c = document.getElementById("content").value;
    context.todo
      .addTodo({
        title: t,
        description: d,
        content: c,
        iscompleted: false,
      })
      .then(() => {
        alert("Kayıt İşlemi Tamamlandı");
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
        document.getElementById("content").value = "";
        
      });
  };
  return (
    <div>
      <div className="form-group">
        <label className="yazi fw-bolder" htmlFor="title">Başlık</label>
        <input type="text" className="form-control" id="title" name="title" />
      </div>
      <div className="form-group">
        <label className="yazi fw-bolder" htmlFor="description">Açıklama</label>
        <input
          type="text"
          className="form-control"
          id="desc"
          name="description"
        />
      </div>
      <div className="form-group">
        <label className="yazi fw-bolder" htmlFor="content">İçerik</label>
        <textarea
          rows="3"
          type="text"
          className="form-control "
          id="content"
          name="content"
        />
      </div>
      <div className="form-group">
        <button  className="btn btn-success mt-1 mb-1"  onClick={Save}>
          Kaydet
        </button>

       
      </div>
    </div>
  );
}

export default AddTask;
