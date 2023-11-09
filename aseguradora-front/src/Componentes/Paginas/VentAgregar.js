import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Flex,
  Upload,
  message,
  Spin,
  InputNumber,
  Select,
  Modal,
} from 'antd';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const boxStyle = {
  /*borderRadius: 6,
  border: '2px solid',
  paddingTop: '10%',
  paddingLeft: '1%',
  paddingRight: '2%',
  paddingBottom: '10%',*/
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

export default function VentAgregar() {

  
    const [justify, setJustify] = React.useState(justifyOptions[1]);
    const [alignItems, setAlignItems] = React.useState(alignOptions[1]);
  
    const [componentSize, setComponentSize] = useState('default');
  
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
  
    const normFile = (e) => {
      if (Array.isArray(e)) {
        return e;
      }
      return e?.fileList;
    };
  
    const getBase64 = file => {
      return new Promise(resolve => {
        let baseURL = "";
  
        let reader = new FileReader();
  
        // Convert the file to base64 text
        reader.readAsDataURL(file);
  
        // on reader load somthing...
        reader.onload = () => {
          baseURL = reader.result;
          resolve(baseURL);
        };
      });
    };
  
    const handleFileInputChange = e => {
      let file = e.target.files[0];
  
      getBase64(file)
        .then(result => {
          file["base64"] = result;
          let nombre = file.name;
          let base64 = file.base64;
          // console.log("Nombre: ", nombre);
          // console.log("Base64: ", base64);
        })
        .catch(err => {
          console.log(err);
        });
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {   setIsModalOpen(true); };
    const handleOk = () => {    setIsModalOpen(false);};
    const handleCancel = () => { setIsModalOpen(false); };
  
  return (
    <Flex style={boxStyle} justify={justify} gap="middle" vertical >
      
      <h2 style={{marginLeft: '40%'}}>Añadir repuestos</h2>

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
          maxWidth: 1000,
        }}
      >
        
        <Flex /*contenedor completo*/>  
          <Flex gap="middle" vertical style={{width:'50%'}} /*Contenedor izquierdo*/>
            
            <Form.Item label="Proveedor">
              <Input />
            </Form.Item>

            <Form.Item label="Categoria">
              <Input />
            </Form.Item>

            <Form.Item label="Marca">
              <Select />
            </Form.Item>

            <Form.Item label="Modelo">
              <Input />
            </Form.Item>

            <Form.Item label="Tienda">
              <Input />
            </Form.Item>

          </Flex>


          <Flex gap="middle" vertical style={{width:'50%'}} /*Contenedor derecho*/>
            <Form.Item label="Cantidad">
              <InputNumber placeholder='Cantidad' />
            </Form.Item>


            <Form.Item label="Costo $">
              <InputNumber />
            </Form.Item>

            <Form.Item label="Precio de Venta $">
              <InputNumber />
            </Form.Item>

            <Form.Item label="Cargar fotografia" valuePropName="fileList" getValueFromEvent={normFile}>
              <input id="upload" type="file" accept="image/*" onChange={handleFileInputChange}/>
            </Form.Item>

            <Form.Item label="" style={{marginLeft: '42%'}}>
              <Button type="primary" onClick={showModal}>Guardar Repuesto </Button>
              <Modal title="Completado" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Registro Realizado</p>
        </Modal>
            </Form.Item>

          </Flex>
        </Flex>


            
      </Form>
    </Flex>
  );
};




