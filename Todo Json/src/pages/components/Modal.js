import React, { useContext, useState } from "react";
import { applicationContext } from "../../context/ApplicationContext";

function Modal(props) {
  const context = useContext(applicationContext);
  const [title, setTitle] = useState(props.data.title);
  const [description, setDescription] = useState(props.data.description);
  const [content, setContent] = useState(props.data.content);
  function kaydet() {
    var veri = {
      id: props.data.id,
      iscompleted: props.data.iscompleted,
      title: title,
      description: description,
      content: content,
    };
    context.todo.updateTodo(props.data.id, veri).then(() => {
      props.changeHandler();
    });
  }
  return (
    <div
      className="modal fade"
      id={props.id}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {props.data.title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="title">Başlık</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Açıklama</label>
              <input
                type="text"
                className="form-control"
                id="desc"
                name="description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">İçerik</label>
              <textarea
                rows="3"
                type="text"
                className="form-control"
                id="content"
                name="content"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                value={content}
              />
            </div>
          </div>
          { 
            <div className={`modal-footer ${props.isedit ? "d-block" : "d-none"}`}>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Çıkış
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={kaydet}
              >
                Kaydet
              </button>
            </div>
          
            }
        </div>
      </div>
    </div>
  );
}

export default Modal;
