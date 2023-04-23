import React from 'react'


export default function Button(p) {
  return (<button data-bs-toggle={p.ismodal ? "modal": ""}  data-bs-target={p.modalid} onClick={p.click} className={`slm btn btn-${p.type}`}>{p.text}</button>)
}
