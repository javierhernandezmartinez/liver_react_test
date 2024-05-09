import React, {useRef, useState} from 'react';
import InputButton from "../../Components/InputButton";
import InputText from "../../Components/InputText";
import axios from "axios";
import {BsFillSendFill, BsTrash3Fill} from "react-icons/bs";
import { Toast } from 'primereact/toast';

const Home =()=>{
    let URL_API='http://localhost:9091'
    const [folio, setFolio] = new useState('')
    const [folio2, setFolio2] = new useState('')
    const [message, setMessage] = new useState(null)
    const toast = useRef(null);

    const onChange=(event)=>{
        setMessage(null)
        setFolio(event.target.value)
    }
    const showNotificacion = (severity, detail) => {
        toast.current.show({severity:severity, summary: 'Mensaje', detail: detail, life: 3000});
    }
    const getFolio=()=>{
        if (folio){
            showNotificacion('success', 'Enviando folio')
            axios.post(URL_API + '/api/services/post/folio/concat',{
                params: {
                    folio: folio
                }
            }).then(res=>{
                console.log(res)
                if (res.status === 200){
                    setFolio2(res.data.folio)
                }
            }).catch(err=>{
                console.log(err)
            })
        }else {
            showNotificacion('warn', 'Agrega un folio')
            setMessage('Agrega un folio')
        }

    }
    const cleanButton=()=>{
        setFolio('')
        setFolio2('')
    }

        return(
            <div className={'row'} style={{justifyContent: "center", width: '70vw'}}>
                <Toast ref={toast} style={{width: "200px"}}/>

                <div className={'col-sm-8 col-md-10 '}>
                    <div className={'row'}>
                        <div className={'col-sm-12 col-md-12 '}>
                            <p className={'titlePanel'}>Hola</p>
                        </div>
                        <div className={'col-md-6'}>
                            <div className={'row'}>
                                <div className={'col-sm-12 col-md-12 '}>
                                    <InputText title={'Folio'}
                                               placeholder={'folio...'}
                                               value={folio}
                                               onChange={onChange}
                                               important={message}
                                    />
                                </div>
                                <div className={'col-sm-12 col-md-12'}>
                                    <div className={'row'} style={{height:"100%", justifyContent: "end", alignItems: "end"}}>
                                        <div className={'col-auto col-sm-auto col-md-auto'}>
                                            <InputButton label={"Enviar"}
                                                         icon={<BsFillSendFill />}
                                                         onClick={getFolio}
                                                         tooltip={'Enviar'}
                                            />
                                        </div>
                                        <div className={'col-auto col-sm-auto col-md-auto'}>
                                            <InputButton label={"Limpiar"}
                                                         onClick={cleanButton}
                                                         icon={<BsTrash3Fill />}
                                                         severity={"secondary"}
                                                         tooltip={'Limpiar'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-md-6'} >
                            <div className={'row'}  style={{height: "100%"}}>
                                <div className={'col-12 col-sm-12 col-md-12'}>
                                    <div className={'div-panelText'}>
                                        {
                                            folio2 ? <p>{folio2}</p> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-md-6'} >
                            <p className={"dimension"}></p>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Home