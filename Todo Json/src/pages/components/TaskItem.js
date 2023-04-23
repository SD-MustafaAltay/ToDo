import React, { useContext, useState } from "react";
import { applicationContext } from "../../context/ApplicationContext";
import Button from "./Button";
import Modal from "./Modal";

export default function TaskItem(props) {
  var context = useContext(applicationContext);
  const [completion, setcompletion] = useState(props.data.iscompleted);
  const [editing, setEditing] = useState(false);
  return (
    <li className="list-group-item">
      <span className="d-flex ">
        <i className="bi bi-check"></i>

        <p className=" fw-bolder border-end border-success p-3 mb-0">{props.data.title } </p>
        <p className="abc p-3">{props.data.description} 
          
        </p> 
        <p className="ssss p-3 overflow-scroll">{props.data.content}</p>
      </span>
      <div className="btn-group">
        {completion ? (
          <Button
         
            text="İncele"
            type="warning"
            ismodal={true}
            modalid={`#modal_${props.data.id}`}
            click={() => {
              setEditing(false);
            }}
          />
        ) : (
          <></>
        )}
        {!completion ? (
          <Button
          
            text="Düzenle"
            type="warning"
            ismodal={true}
            modalid={`#modal_${props.data.id}`}
            click={() => {
              setEditing(true);
            }}
          />
        ) : (
          <></>
        )}

        <Button
        
          text={completion ? "Görev Devam Ediyor" : "Görev Bitti"}
          type="warning"
          click={() => {
            context.todo.changeStatus(props.data.id);

            setcompletion(!completion);
          }}
        />
        <Button
        
          text="Sil"
          type="danger"
          click={() => {
            var id = props.data.id;
            context.todo.deleteTodo(id).then(() => {
              props.changeHandler();
            });
          }}
        />
      </div>
      <Modal
        isedit={editing}
        changeHandler={props.changeHandler}
        id={`modal_${props.data.id}`}
        data={props.data}
      />
    </li>
  );
}
