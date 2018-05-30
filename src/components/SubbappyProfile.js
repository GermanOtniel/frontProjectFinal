import React, {Component} from 'react';
import {getSingleUser} from '../services/authService';
import {getSingleProduct} from '../services/auctionService';
import {getProducts} from '../services/productService';
import {logout} from '../services/authService';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {newProduct} from '../services/productService';
import {sendUser} from '../services/authService';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Icon from '../images/baseline-account_circle-24px.svg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import { blueGrey900 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import SubastasContainer from '../components/SubastasContainer';
import CreditosContainer from '../components/CreditosContainer'
import SubastasUser from '../components/SubastasUser';
import { deepOrange500 } from 'material-ui/styles/colors';
import { lightGreen800 } from 'material-ui/styles/colors';
import {addCredits} from '../services/authService';
import {message} from 'antd';



import '../profile.css';


class SubbappyProfile extends Component{


  state={
    open: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    user:{},
    id: null,
    newProduct:{},
    products:[]
  }

  componentWillMount(){
     const id = this.props.match.params.id
    // console.log('aqui deberia de llegar el id ' + id);
     this.setState({id})
    //usar el service para obtener el entry desde el backend 
    getSingleUser(id)
    .then(user=>{
      //console.log(user)
      this.setState({user})
    })
    .catch(e=>alert(e));
    getProducts()
    .then(products=>{
      this.setState({products})
      console.log(this.state.products)
    })
    .catch(e=>alert(e));
    
  }

  onChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const {newProduct} = this.state;
    newProduct[field] = value;
    this.setState({newProduct});
    //console.log(newProduct)

  }
  loadFile = (e) => {
    const {newProduct} = this.state;
    newProduct["image"] = e.target.files[0];
    //console.log(newProduct)
    this.setState({newProduct})
    this.componentWillMount();
};
loadCredits1 = (e) => {
  const {user} = this.state;
  user["creditos"] = user.creditos + 173 ;
  //console.log(newProduct)
 this.setState({user})
 addCredits(user)
  .then(res=>{
    alert(res.message);
  })
};
loadCredits2 = (e) => {
  const {user} = this.state;
  user["creditos"] = user.creditos + 275 ;
  //console.log(newProduct)
 this.setState({user})
 addCredits(user)
  .then(res=>{
    alert(res.message);
  })
};
loadCredits3 = (e) => {
  const {user} = this.state;
  user["creditos"] = user.creditos + 600 ;
  //console.log(newProduct)
 this.setState({user})
 addCredits(user)
  .then(res=>{
    alert(res.message);
  })
};
loadCredits4 = (e) => {
  const {user} = this.state;
  user["creditos"] = user.creditos + 1000 ;
  //console.log(newProduct)
 this.setState({user})
 addCredits(user)
  .then(res=>{
    alert(res.message);
  })
};
  sendProduct = (e) => {
    newProduct(this.state.newProduct)
    .then(product=>{
      //console.log(product)
      this.componentWillMount()
      this.setState({open:false});
      //this.props.history.push("/profile/" + this.state.user._id);


    })
    .catch(e=>console.log(e))
  }
//   ABRIR Y CERRAR MODALES DE EDITAR PERFIL-CREAR SUBASTA-VER MAS SUBASTAS-VER MIS SUBASTAS
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleOpen2 = () => {
    this.setState({open2: true});
  };
  handleClose2 = () => {
    this.setState({open2: false});
  };
  handleOpen3 = () => {
    this.setState({open3: true});
  };
  handleClose3 = () => {
    this.setState({open3: false});
  };
  handleOpen4 = () => {
    this.setState({open4: true});
  };
  handleClose4 = () => {
    this.setState({open4: false});
  };

  handleOpen5 = () => {
    this.setState({open5: true});
  };
  handleClose5 = () => {
    this.setState({open5: false});
  };
  // TERMINAN FUNCIONES PARA ABRIR Y CERRAR MODALES

  
//desloguear al usuario
  outUser = (e) => {
    console.log('si se ejecuta...')
    logout()
    .then(logoutUser=>{
      this.props.history.push("/");
    })
    .catch(e=>alert(e))
  }
// desloguear al usuario

 
  

  render(){
    const {user} =this.state;
   
      return (
        <div>
          <div>
            <AppBar
              title="SUBBAPPY"
              iconElementRight={<RaisedButton style={{marginTop:5}} secondary={true} onClick={this.outUser} label="Salir"  />}
              style={styleAppbar}
              titleStyle={titleStyle}
              iconStyleLeft={iconStyle}
            />
        
          </div>
          <div>
  <Card>
                <CardHeader
                  title={user.name} 
                  subtitle={user.lastName}
                  avatar="http://res.cloudinary.com/otnielitowsky/image/upload/v1525911220/upload/otni.jpg.jpg"
                />
    
                <CardMedia overlay={<CardTitle title="Creditos:" subtitle={user.creditos} />}>
                  <img style={image} src="https://transformtheworldartistically.files.wordpress.com/2013/11/stalpob.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Biografía"  />
                <CardText>
                  {user.bio}
                </CardText>
    
    
    
                <CardActions>


    <RaisedButton secondary={true} style={centrar} label="Crear Subasta" onClick={this.handleOpen} />
      <Dialog
          title="Crea tu Subasta"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <Paper  zDepth={2}>
            <TextField onChange={this.onChange} name="name" hintText="Nombre del producto" type="text"  underlineShow={false} />
            <Divider />
            <TextField onChange={this.onChange} name="initPrice" hintText="Precio inicial" type="Number"  underlineShow={false} />
            <Divider />
            <TextField onChange={this.onChange} name="description" hintText="Descripción del producto" type="Text"  underlineShow={false} />
            <Divider />
            <TextField onChange={this.onChange} name="time" hintText="Tiempo de la subasta" type="Number"  underlineShow={false} />
            <Divider />
           Imágenes de tu Producto (max. 6)<input type="file" name="image" onChange={this.loadFile} />
        </Paper>
            <RaisedButton onClick={this.sendProduct}  label="Crear Subasta" secondary={true}  />

      </Dialog>
        
    <RaisedButton labelStyle={letras} backgroundColor={lightGreen800} label="Otras Subastas" onClick={this.handleOpen2} />
      <Dialog
          title="Aqui estan las mejores subastas."
          modal={false}
          open={this.state.open2}
          onRequestClose={this.handleClose2}
      >
        <Paper zDepth={2} >
          <div>
          <SubastasContainer products={this.state.products} /> 
          </div>
        </Paper>
      </Dialog>
    
    
    <RaisedButton onClick={this.handleOpen3} primary={true} label="Mis Subastas"  />
      <Dialog
          title="Tus Subastas."
          modal={false}
          open={this.state.open3}
          onRequestClose={this.handleClose3}
      >
        <Paper zDepth={2} >
          <div>
          <SubastasUser/> 
          </div>
        </Paper>
      </Dialog>

    <RaisedButton backgroundColor={blueGrey900} labelStyle={letras}  label="Editar Perfil" onClick={this.handleOpen4} />
        <Dialog
          title="Actualiza tu Perfil"
          modal={false}
          open={this.state.open4}
          onRequestClose={this.handleClose4}
        >
          <Paper  zDepth={2}>
            <TextField onChange={this.onChange} name="name" hintText="Nombre" type="text"  underlineShow={false} />
            <Divider />
            <TextField onChange={this.onChange} name="lastName" hintText="Apellido" type="text"  underlineShow={false} />
            <Divider />
            <TextField onChange={this.onChange} name="bio" hintText="Acerca de ti..." type="Text"  underlineShow={false} />
            <Divider />
            Selecciona una foto para tu perfil <input name="profilePic" placeholder="Foto de perfil" type="file" />
            <Divider />
          </Paper>
              <RaisedButton onClick={this.sendProduct}  label="Actualizar Perfil" secondary={true}  />

        </Dialog>    

        <RaisedButton backgroundColor={deepOrange500} labelStyle={letras}  label="Comprar créditos" onClick={this.handleOpen5} />
        <Dialog
          title="Compra créditos"
          modal={false}
          open={this.state.open5}
          onRequestClose={this.handleClose5}
        >
          <Paper  zDepth={2}>
          <div>
          <CreditosContainer loadCredits1={this.loadCredits1} loadCredits2={this.loadCredits2} loadCredits3={this.loadCredits3} loadCredits4={this.loadCredits4} />
          </div>  
          </Paper>

        </Dialog>    
        </CardActions>
  </Card>
          </div>
            
        </div>
      );
    }
    
  }
  

 const letras = {
   color:'white'
 }

  const centrar = {
    marginLeft:325
  }

const image = {
  height:520
}

const styleAppbar = {
  height:60
}
const titleStyle = {
  fontSize:30,
  marginTop:0,
  fontFamily:'Paytone One' 
}

const iconStyle = {
  
  marginTop:10
}



  

 


export default SubbappyProfile;