import "../../App.css";
import React, { useState } from "react";
import { Space, Layout, Menu, Button, Form, Input, Image, Row, Flex } from "antd";
import EncabezadoGeneral from "../Elementos/EncabezadoGeneral";
import MostrarContenidoGeneral from "../Elementos/MostrarContenidoGeneral";

const boxStyle = {
  //borderRadius: 6,
  //border: '2px solid',
  paddingTop: '10%',
  //paddingLeft: '1%',
  //paddingRight: '2%',
  paddingBottom: '10%',
  backgroundColor: '#bdac9791',
};

const justifyOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];
const alignOptions = ['flex-start', 'center', 'flex-end'];
const { Header, Footer, } = Layout;




export default function Login() {
    
  const [PaginaMostrada, setPaginaMostrada] = useState("0");
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  
  const [justify, setJustify] = React.useState(justifyOptions[1]);
  const [alignItems, setAlignItems] = React.useState(alignOptions[1]);

  const PagMostrada = (pagina) => {
    setPaginaMostrada(pagina);
  };

  return (
    <>
      {PaginaMostrada === "1" ? (
        <MostrarContenidoGeneral PagMostrada = {PagMostrada}/>
      ) : 
      (
        <>
          <Header className="App-header">
          <EncabezadoGeneral />
          </Header>

            
          <Flex style={boxStyle} justify={justify} /*contenedor de inputs*/>    

            <br/><br/><br/>

            <Form>
              <img src={require('../Imagenes/users.png')} style={{width:150, height:150}} />
            </Form>

            <Form
              labelCol={{
                span: 10,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
              style={{
                maxWidth: 600,
              }}
            >

                <Form.Item label="Ingresar usuario">
                    <Input />
                </Form.Item>

                <Form.Item label="Ingresar contraseña">
                    <Input />
                </Form.Item>
                
                <br/><br/><br/>

                <Button type="primary" style={{marginLeft:325}} 
                                      onClick={() => {setPaginaMostrada("1");}}>
                    Iniciar sesion
                </Button>
                <br/><br/><br/>

            </Form>
          </Flex>

        <Footer className="Footer"></Footer>
        </>
       )}
    </>
  )
}
