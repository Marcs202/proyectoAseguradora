import "../../App.css";
import React, { useEffect, useState } from "react";
import { Space, Layout, Menu, Button, Form, Input, Image, Row, Flex } from "antd";
import EncabezadoGeneral from "../Elementos/EncabezadoGeneral";
import MostrarContenidoGeneral from "../Elementos/MostrarContenidoGeneral";
import VistaAseguradora from "./VistaAseguradora";
import VistaVentaRepuestos from "./VistaVentaRepuestos";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../config/firebase/FirebaseConfig";

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

  //Variables para sesion
  const auth = getAuth(app);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userInfo, setuserInfo] = useState(null);

  const [PaginaMostrada, setPaginaMostrada] = useState("0");
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setPaginaMostrada("1");
        setuserInfo(userCredentials);
      })
      .catch((error) => alert(error.message));
  };
  
  const [justify, setJustify] = React.useState(justifyOptions[1]);
  const [alignItems, setAlignItems] = React.useState(alignOptions[1]);

  const PagMostrada = (pagina) => {
    setPaginaMostrada(pagina);
  };

  useEffect(()=>{
    if(userInfo !== null){
      localStorage.setItem('token',userInfo.user.accessToken);
      localStorage.setItem('uid',userInfo.user.uid);
    }
  },[userInfo])

  useEffect(()=>{
    if(localStorage.getItem('token') !== null && localStorage.getItem('uid') !== null){
      setPaginaMostrada("1");
    }
  },[userInfo])

  return (
    <>
      {PaginaMostrada === "1" /* 1 */ ? (
        <MostrarContenidoGeneral PagMostrada = {PagMostrada}/>
      )  : 
      PaginaMostrada === "2" /* 2 */  ? (
        <VistaAseguradora PagMostrada = {PagMostrada}/>
      )   : 
      PaginaMostrada === "3" /* 3 */  ? (
        <VistaVentaRepuestos PagMostrada = {PagMostrada}/>
      ) 
      : (
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
                    <Input onChange={(e)=>{
                      setEmail(e.target.value)
                    }}/>
                </Form.Item>

                <Form.Item label="Ingresar contraseña">
                    <Input onChange={(e)=>{
                      setPassword(e.target.value)
                    }}/>
                </Form.Item>
                
                <br/><br/><br/>

                <Button type="primary" style={{marginLeft:325}} 
                                      onClick={handleLogin}>
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
