import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import { white } from 'material-ui/styles/colors';
import { blueGrey900 } from 'material-ui/styles/colors';
import {signup} from '../services/authService'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { pink300 } from 'material-ui/styles/colors';
import React, { Component } from 'react';
import Carousel from './Carousel'

class SubbappyHome extends Component {
  
  state={
    newUser:{},
    open:false
  }
  onChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const {newUser} = this.state;
    newUser[field] = value;
    //console.log(newUser)
    this.setState({newUser}); 
  }
  sendUser = (e) => {
    signup(this.state.newUser)
    .then(user=>{
      this.props.history.push(`/profile/${user._id}`);
    })
    .catch(e=>alert(e))
  }
  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const {password,password2} = this.state.newUser;

    return (
      <div className="app" >
         <h6>SUBBAPPY</h6>
         <div>
           <div className="conoce">
           <RaisedButton
          label="CONOCE MÁS"
          onClick={this.handleToggle}
          labelStyle={boton}
          buttonStyle={botonn}
        />
        <Drawer width={350} openSecondary={true} open={this.state.open} >
    <AppBar style={appBar} title="Conoce más..."  iconElementLeft={<IconButton><NavigationClose onClick={this.handleToggle} /></IconButton>} />
        <h5 className="appBar">Subbappy esuna pagina de subastas en linea en donde todos los usuarios pueden subastar los productos que ellos desean.
          Lo unicosque necesitas hacer es crear una cuenta con tu correo electronico y una contraseña, elegir un producto, 
          establecer un valor inicial, un tiempo minimoy maximo en el que estara en subasta tu producto y esperar al mejor postor.
          Y no solo podras crear subastas sino que tambien podrás participar en cualquiera de las existentes en SUBBAPPY.
          ¡¡Con SUBBAPPY el que no subasta no gana!!
        </h5>
        <img style={images} src="https://staticshop.o2.co.uk/product/images/iphone-x-space-grey-sku-header.png?cb=25dc5afb0412fc40a28aa29d82cb53d0" alt=""/>
        <h5 className="appBar">Subbappy esuna pagina de subastas en linea en donde todos los usuarios pueden subastar los productos que ellos desean.
          Lo unicosque necesitas hacer es crear una cuenta con tu correo electronico y una contraseña, elegir un producto, 
          establecer un valor inicial, un tiempo minimoy maximo en el que estara en subasta tu producto y esperar al mejor postor.
          Y no solo podras crear subastas sino que tambien podrás participar en cualquiera de las existentes en SUBBAPPY.
          ¡¡Con SUBBAPPY el que no subasta no gana!!
        </h5>
        <img style={images} src="https://staticshop.o2.co.uk/product/images/iphone-x-space-grey-sku-header.png?cb=25dc5afb0412fc40a28aa29d82cb53d0" alt=""/>
        <h5 className="appBar">Subbappy esuna pagina de subastas en linea en donde todos los usuarios pueden subastar los productos que ellos desean.
          Lo unicosque necesitas hacer es crear una cuenta con tu correo electronico y una contraseña, elegir un producto, 
          establecer un valor inicial, un tiempo minimoy maximo en el que estara en subasta tu producto y esperar al mejor postor.
          Y no solo podras crear subastas sino que tambien podrás participar en cualquiera de las existentes en SUBBAPPY.
          ¡¡Con SUBBAPPY el que no subasta no gana!!
        </h5>
        </Drawer>
           </div>
           <div>
            <Paper  style={style3} >
            <h2 style={registrate}>Regístrate</h2>
            </Paper>
          </div>
          <div>
          <p>ó si ya tienes cuenta<Link style={sesion} to="/login"> Inicia sesión</Link></p>
          </div>

          <Paper style={style2} zDepth={2}>
            <TextField onChange={this.onChange} name="name" hintText="Nombre" type="Text" style={style} underlineShow={false} />
            <Divider />
            <TextField onChange={this.onChange} name="lastName" hintText="Apellido" type="Text" style={style} underlineShow={false} />
            <Divider />
            <TextField onChange={this.onChange} name="email" hintText="Correo electrónico" type="Text" style={style} underlineShow={false} />
            <Divider />
            <TextField onChange={this.onChange} name="password" hintText="Contraseña" type="Password" style={style} underlineShow={false} />
            <Divider />
            <TextField onChange={this.onChange} name="password2" hintText="Repite Contraseña" type="Password" style={style} underlineShow={false} />
            <Divider />
          </Paper>
          <RaisedButton onClick={this.sendUser} disabled={password !== password2 ? true : false } label="Enviar" secondary={true} style={button} />
          
             <Carousel/>
           
         </div>
      </div>
    );
  }
}

const images = {
  width:140,
  height:140
}

const botonn = {
  width:100,
  height:40
}

const boton = {
  color: 'black',
  fontSize: 10,
  fontFamily: 'Lucida Grande',
}

const appBar = {
  backgroundColor: pink300
}


const registrate = {
  color: blueGrey900,
  fontSize: 40,
  textAlign: 'center',
  fontFamily: 'Lucida Grande'
}

const sesion = {
  color: white,
  fontSize: 20,
  textDecoration: 'none'
}


const button = {
  margin: 12,
  marginLeft: 200
};

const style = {
  marginLeft: 20,
};
const style2 = {
  width:400,
  marginTop:20,
  marginLeft: 50
}
const style3 = {
    width:250,
    marginTop: 280,
    height: 50,
    marginLeft: 50
}


export default SubbappyHome;
