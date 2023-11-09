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
  Select,
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

export default function Ingresar() {

  
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


  return (
    <Flex style={boxStyle} justify={justify} gap="middle" vertical >
      
      <h2 style={{marginLeft: '40%'}}>Registrar Incidente</h2>

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
            
            <Form.Item label="Nombre de Cliente">
              <Input />
            </Form.Item>

            <Form.Item label="Registrar Marca">
            <Select />
            </Form.Item>

            <Form.Item label="Registrar Modelo">
              <Input />
            </Form.Item>

            <Form.Item label="Ingresar N. de Placa">
              <Input />
            </Form.Item>

            <Form.Item label="Ingresar Color">
              <Input />
            </Form.Item>

          </Flex>


          <Flex gap="middle" vertical style={{width:'50%'}} /*Contenedor derecho*/>
            <Form.Item label="Fecha de ingreso">
              <DatePicker style={{width: '85%'}} />
            </Form.Item>

            <Form.Item name={['user', 'informacion']} label="Informacion detallada">
              <Input.TextArea style={{width: '85%', minHeight: 90, maxHeight: 90}} />
            </Form.Item>

            <Form.Item label="Cargar fotografia" valuePropName="fileList" getValueFromEvent={normFile}>
              <input id="upload" type="file" accept="image/*" onChange={handleFileInputChange}/>
            </Form.Item>

            <Form.Item label="" style={{marginLeft: '42%'}}>
              <Button type="primary">Guardar Nuevo Incidente</Button>
            </Form.Item>

          </Flex>
        </Flex>


            
      </Form>
    </Flex>
  );
};



