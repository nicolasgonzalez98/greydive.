import { useEffect } from 'react'
import {
    useParams
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { get_data_by_id } from '../redux/actions';
import styled from "styled-components";

//Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import NotF404 from './404';
//Estilos


export default function Test(){
    

    const Video = styled.video`
      width: 80vw;
      height: 60vh;
    `

    const Transcripcion = styled.div`
        overflow: scroll;
        width: 70vw;
        height: 40vh;
    `

    

    let { nombre , id} = useParams();
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(get_data_by_id(id))
    })

    let linkVideo = useSelector(state => state.linkVideo)
    
    let transcripcion = useSelector(state => state.transcripcion)

    let escenario = useSelector(state => state.escenario)

    let preguntas = useSelector(state => state.preguntas)
    

    
    
    return (
        <>
            {linkVideo !== ''?
            <div className="col-md-5 mx-5 mt-5 pb-3">
            <div className='text-left mb-5'>
                {nombre ? <h1 className="text-capitalize">{nombre}</h1>:<></>}

                <h2 className='mb-5'>Test: Test de usabilidad en el sitio web</h2>

                {id ? <h3>Testeador {id}</h3> : <></>}
            </div>
            {linkVideo ? 
            <div className="embed-responsive embed-responsive-1by1 ">
                <Video
                    
                    src={linkVideo} 
                    controls
                    autoPlay
                    
                />
            </div>
            :<></>    
        }
            {transcripcion ? 
            <div className='mb-5'>
                <h3 className='mt-5'>Transcripcion</h3>
                <Transcripcion className='mt-5'>
                    
                    <p className='text-justify' dangerouslySetInnerHTML={{ __html: transcripcion }} />
                    
                </Transcripcion>
            </div>
            :
            <></>
            }
            <div>
                <h3>Tareas</h3>

                {escenario ? <p><span className="fw-bold">Escenario:</span> {escenario}</p> : <></>}
                {
                    preguntas ? 
                    <ListGroup as="ul" >
                    {
                        preguntas?.map((e, i) => <>{
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            variant='info'
                            key={i}
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">‍Tarea {i+1}:</div>
                                    <div className='mb-3'>{e.texto}</div>

                                    <p className="text-danger">Duración de la tarea: {e.tiempo}</p>
                                    
                                </div>
                            </ListGroup.Item>
                        }</>)
                    }
                </ListGroup>
                :
                <></>
                }
            </div> 
        </div>
        :
        <NotF404 />    
        }
        </>
    )
}



