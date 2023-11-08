
import React, {useState} from 'react'
import { Flex, Form, Button, Input, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem';
import ObjEsperaMarket from '../Registros/ObjEsperaMarket';


const boxStyle = {
    borderRadius: 6,
    border: '0px solid',
    paddingTop: '1.5%',
    paddingLeft: '2%',
    //paddingRight: '2%',
    //paddingBottom: '5%',
    backgroundColor: '#bdac9791',
    marginRight: '2%',
    marginLeft: '2%'
  };

  const boxStyle1 = {
    borderRadius: 6,
    border: '0px solid',
    paddingTop: '1.5%',
    paddingLeft: '2%',
    paddingRight: '5%',
    paddingBottom: '5%',
    backgroundColor: '#bdac9791',
    marginRight: '2%',
    marginLeft: '2%'
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

export default function EnEsperaMarket() {

    const [justify, setJustify] = useState(justifyOptions[0]);
    const [alignItems, setAlignItems] = useState(alignOptions[1]);

  return (
    <Flex gap="middle" vertical style={{}} /*Contenedor externo*/>

        <Flex style={boxStyle} /*contenedor de inputs*/>    

          <Flex gap="middle" vertical style={{width:'50%', marginRight:'2%'}} /*Contenedor izquierdo*/>
            <Form.Item label="Filtrar por ubicacion">
                <Select
                  defaultValue="Ubicacion"
                  style={{ }}
                  onChange={"ubicacion"}
                  options={[
                    {
                      value: 'ubicacion1',
                      label: 'ubicacion1',
                    },
                    {
                      value: 'ubicacion2',
                      label: 'ubicacion2',
                    },
                  ]}
                />

              <br/><br/>
              <label>Buscar repuesto por codigo</label>
              <Input placeholder='Ingresar codigo'/>
            </Form.Item>
          </Flex>
    
    
          <Flex gap="middle" vertical style={{width:'45%', marginRight:'2%'}} /*Contenedor derecho*/>
            <Form.Item style={{paddingLeft: '2%',}}label="Filtrar por categoria">
                  <Select
                    defaultValue="Categoria"
                    style={{ }}
                    onChange={"Categoria"}
                    options={[
                      {
                        value: 'categoria1',
                        label: 'categoria1',
                      },
                      {
                        value: 'categoria2',
                        label: 'categoria2',
                      },
                    ]}
                  />
                  
              <br/><br/>
              <label>Comprar</label>
              <Input placeholder='Ingresar codigo'/>
            </Form.Item>
          </Flex>
        </Flex>



            
      <Flex style={boxStyle1} gap="middle" vertical>
          <Flex gap="middle">
            <ObjEsperaMarket  />
            <ObjEsperaMarket  />
            <ObjEsperaMarket  />
          </Flex>

          <Flex gap="middle">
            <ObjEsperaMarket  />
            <ObjEsperaMarket  />
            <ObjEsperaMarket  />
          </Flex>
      </Flex>
      
    </Flex>
  )
}
