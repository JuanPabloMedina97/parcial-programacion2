import React, {useState} from 'react'




const LinkForm = (props) => {

    const initialData = {
        name: '',
        date: '',
        observation: ''
    }

    const [values, setValues] = useState(initialData);

    const inputSubmit = e =>{ /*Funcion que maneja el cambio de los inputs */

        const {name, value} = e.target; //se almacena el nombre del input y el valor del mismo
        setValues({...values, [name]: value})/*Copio los valores actuales del estado, luego capturo valores actuales del input   */
        
    }


    const submit = e =>{ /*Funcion que cada vez que se envie se obtiene valores actuales de los inputs */
        e.preventDefault(); /*Cancelar comportamiento por defecto */
        props.addOrEditTurn(values); /*Le pasamos el valor del estado por props */
        setValues({...initialData})
    }







  return (
    <form className='card card-body' onSubmit={submit}>
       
        <div className="form-group input-group"> {/*Div formulario nombre */}
            <div className="input-group-text bg-ligth">
                <i className="material-icons">person</i>
            </div>
            <input type="text" className='form-control' placeholder='Nombre Y Apellido' name="name" onChange={inputSubmit} value={values.name}/>
        </div>

        <div className="form-group input-group"> {/*Div formulario fecha */}
            <div className="input-group-text bg-light">
                <i className="material-icons">date_range</i>
            </div>
            <input type="data" className='form-control' name='date' placeholder='Fecha' onChange={inputSubmit} value={values.date}/>
        </div>

        <div className="form-group">{/*Div formulario observaciones */}
            <textarea name="observation"  rows="3" className='form-control' placeholder='Escriba una observacion' onChange={inputSubmit} value={values.observation}></textarea>
        </div>

        <div className="d-grid gap-2"> {/*Div Boton  */}
            <button className="btn btn-primary" type="submit">Agendar</button>
        </div>
    </form>
  )
}

export default LinkForm