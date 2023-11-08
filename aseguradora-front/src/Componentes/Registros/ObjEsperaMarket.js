import React from 'react'
import { Form, Button } from 'antd'
  
export default function ObjEsperaMarket( ) {

  return (
        <Form.Item  style={{width:'27%', marginLeft:'3%', marginRight:'3%', marginTop:'1%',}} >
                <img src="https://th.bing.com/th/id/OIP.iwE3cgT35eYPOSj6nG2NjQHaEo?pid=ImgDet&rs=1" 
                    style={{width:'95%', height:125, paddingLeft: '3%'}} 
                />
                <div style={{paddingLeft: '5%',}}>
                <label>Nombre: Auto</label><br/>
                <label>Marca: Marca</label><br/>
                <label>Modelo: Modelo</label><br/>
                <label>Costo: $0.00</label><br/>
                <label>Categoria: Categoria</label><br/>
                <label>Codigo: 1234</label><br/><br/>
                </div>
                <Button type="primary" 
                style={{
                    backgroundColor: 'green',
                    width: '100%'}}> Agregar</Button>
        </Form.Item>
  )
}

