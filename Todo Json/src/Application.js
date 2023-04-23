import React, { useState } from "react";
import AppContext from "./context/ApplicationContext";
import AddTask from "./pages/AddTask";
import ListTask from "./pages/ListTask";
var ayGunYaz = {
  gunler:['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'],
  aylar:['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']
  };
function tarihYaz() {
  
  var simdi = new Date(),
  saat = simdi.getHours().toString().replace(/^(.)$/,'0$1'),
  dakika = simdi.getMinutes().toString().replace(/^(.)$/,'0$1'),
  saniye = simdi.getSeconds().toString().replace(/^(.)$/,'0$1'),
  

 T = simdi.getDate().toString().replace(/^(.)$/,'0$1'),
 A = ayGunYaz.aylar[simdi.getMonth()],
 Y = simdi.getFullYear().toString(),
 G = ayGunYaz.gunler[simdi.getDay()-1],

 tarih = [T,A,Y,G].join(' '),
 zaman = [saat,dakika].join(':');

return tarih;
};
function Application() {

  

    const [page, setPage] = useState(<ListTask/>)
  return (
    <AppContext>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="headercontainer" className="shadow">
              <img onClick={()=>setPage(<ListTask/>)} className="foto" src="https://i.ibb.co/McMwGRz/notebook-and-pencil-icon-vector-3313524-removebg-preview.png" alt=""/>
              <label className="text-white"> {tarihYaz()} </label>
              <button onClick={()=>setPage(<AddTask/>)}  className="btn btn-success"> Yeni Görev Ekle </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 s shadow">
            <button onClick={()=>setPage(<AddTask/>)} className="btn btn-success w-100 mt-1 mb-1">Görev Ekle</button>
            <button onClick={()=>{setPage(<ListTask/>)}}  className="btn btn-warning w-100 mt-1 mb-1">Görevleri Listele</button>
          </div>
          <div className="col-9 btngrup">
            {page}
          </div>
        </div>
      </div>
    </AppContext>
  );
}

export default Application;
