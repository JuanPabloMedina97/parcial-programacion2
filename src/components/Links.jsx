import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm'
import {db} from '../firebase'
import { addDoc, collection, deleteDoc, onSnapshot, query, QuerySnapshot, doc } from 'firebase/firestore'
import { toast } from "react-toastify"


const Links = () => {
  const [turns, setTurns] = useState([]); /*Estado para guardar los turnos obtenidos desde los inputs */

  const addOrEditTurn = async (turn)=>{
    try {
      if(window.confirm("Estás seguro de agregar nuevo turno? No se puede modificar")){
        await addDoc(collection(db, "turnos"), turn); /*desde la base de datos de firebase quiero crear una coleccion llamada turnos, en el cual quiero guardar el documento turn, con el .doc genera un id nuevo*/
        toast('Nuevo turno agregado',
          {
            type: 'success',
            autoClose : 2000
          });
        }
    } catch (error) {
      console.log(error)
    }
 
  }


  const deleteTurn = async (id) =>{ /*Funcion para eliminar el documento */
    try {
      if(window.confirm("Estas seguro de eliminar el turno?")){
        await deleteDoc(doc(db, "turnos", id)); /*El registro que tenga este id se elimina */
  
        toast('Turno eliminado',
        {
          type: 'error',
          autoClose: 2000
        });
      }
    } catch (error) {
      console.log(error);
    }
  }



  const getTurns = () =>{ /*Funcion para obtener datos en tiempo real */
    const q = query(collection(db, "turnos")); /*Obtenemos datos en tiempo real */
    const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{ /*Funcion que obtiene resultados de una consulta, cambia cada vez que se modifica el documento */
      const docs = [];

      QuerySnapshot.forEach(doc =>{
        docs.push({...doc.data(), id:doc.id}) /*Cada vez que me traigan datos nuevos, lo convinamos con el objeto data con su id */
      });
      setTurns(docs)
    })
  }

  useEffect(() => {
    getTurns();
  }, []);


  return (
    <>
      <div className="col md-4 p-2">
        <LinkForm addOrEditTurn = {addOrEditTurn}/>
      </div>
      

      <div className="col-md-8">
        {
          turns.map( turn =>(
              <div className="card mb-1" key={turn.id}>
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <h4>{turn.name}</h4>
                    <i className="material-icons text-danger" type="button" onClick={()=> deleteTurn(turn.id)}>close</i>
                  </div>
                  <p>{turn.date}</p>
                  <p>{turn.observation}</p>
                </div>
              </div>
          ))
        }
      </div>
    </>
  )
}

export default Links