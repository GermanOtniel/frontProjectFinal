import React, {Component} from 'react';
import {getSingleProduct} from '../services/auctionService';
import {logout} from '../services/authService';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Icon from '../images/baseline-account_circle-24px.svg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import { red900 } from 'material-ui/styles/colors';
import { blue900 } from 'material-ui/styles/colors';
import { grey800 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import {message} from 'antd';
import {GridList, GridTile} from 'material-ui/GridList';
import {Link} from 'react-router-dom';
import { white } from 'material-ui/styles/colors';
import {date} from '../services/auctionService';
import {getSingleUser} from '../services/authService';
import {addCredits} from '../services/authService';




class SubbappyAuction extends Component{

  state={
    
    product:{},
    user:{}
  }

  perro;


  month(m){
    var month="";
    switch(m){
      case 0:
        month = "January";
        return month;
      break;
      case 1:
        month = "February";
        return month;
      break;
      case 2:
        month = "March";
        return month;
      break;
      case 3:
        month = "April";
        return month;
      break;
      case 4:
        month = "May";
        return month;
      break;
      case 5:
        month = "June";
        return month;
      break;
      case 6:
        month = "July";
        return month;
      break;
      case 7:
        month = "August";
        return month;
      break;
      case 8:
        month = "September";
        return month;
      break;
      case 9:
        month = "October";
        return month;
      break;
      case 10:
        month = "November";
        return month;
      break;
      case 11:
        month = "December";
        return month;
      break;
      default:
        month = "";
    }
  }
  aux(t){
    if(t<10){
      return "0"+t;
    }
    else{
      return t;
    }
  };
    
  date=()=>{
    
    this.perro = setInterval(()=>{
      var d = new Date();
      document.getElementById("year").innerHTML  = d.getFullYear();
      document.getElementById("month").innerHTML = this.month(d.getMonth());
      document.getElementById("day").innerHTML   = this.aux(d.getDate());
      document.getElementById("sec").innerHTML   = this.aux(d.getSeconds());
      document.getElementById("min").innerHTML   = this.aux(d.getMinutes());
      document.getElementById("hour").innerHTML  = this.aux(d.getHours());  
    },1000);
  }


  componentWillMount(){


     const id = this.props.match.params.id
    // console.log('aqui deberia de llegar el id ' + id);
     this.setState({id})
    //usar el service para obtener el entry desde el backend 
    getSingleProduct(id)
    .then(product=>{
      //console.log(user)
      this.setState({product})
    })
    .catch(e=>alert(e));
    this.date();
    const idUser = JSON.parse(localStorage.getItem('user'))._id;
    getSingleUser(idUser)
    .then(user=>{
      this.setState({user})
    })
    .catch(e=>alert(e))
    
  }


  componentWillUnmount(){
    clearInterval(this.perro);
  }
  restCredits = (e) => {
    const {user} = this.state;
    const {product} = this.state;
    user["creditos"] = user.creditos - product.initPrice ;
    //console.log(newProduct)
   this.setState({user})
   addCredits(user)
    .then(res=>{
      alert(user.name + " has pujado por este producto");
    })
  };



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
    const {product} =this.state;
    const {user} = this.state;

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
            
            <Card style={media}>
              <CardMedia
                overlay={<CardTitle title={<div>
                <span >31</span>
                <span>/</span>
                <span >May</span>
                <span>/</span>
                <span >2018</span>
                <span>-</span>
                <span >09</span>
                <span>:</span>
                <span >00</span>
                <span>:</span>
                <span >00</span>
              </div>} subtitle={<div className="relojito">
                <span id="day"></span>
                <span>/</span>
                <span id="month"></span>
                <span>/</span>
                <span id="year"></span>
                <span>-</span>
                <span id="hour"></span>
                <span>:</span>
                <span id="min"></span>
                <span>:</span>
                <span id="sec"></span>
              </div> } />}
              >
                <img className="image" src={product.image}  />
              </CardMedia>
                <CardTitle title={product.name} subtitle={<p className="pColor">Precio Inicial: ${product.initPrice}.00</p>}  />
              <CardText>
              {product.description}
              </CardText>
              <CardText style={style3}>
                
                <h1 style={h1}>
                Tus Créditos: ${user.creditos}.00
                </h1>
              </CardText>
              <CardActions className="marginTop">
                <RaisedButton style={margin} labelColor={white} backgroundColor={red900} label="Pujar" onClick={this.restCredits}/>
                <Link to={`/profile/${JSON.parse(localStorage.getItem('user'))._id}`} ><RaisedButton labelColor={white} backgroundColor={blue900} label="Volver" /></Link>
              </CardActions>
            </Card> 
            
            
                 
            
          </div>
          
          
            
        </div>
      );
    }
    
  }
  const h1 = {
    color:grey800,
    marginLeft:200 
  }

  const style3 = {
    marginTop:-30
  }

const margin = {
  marginLeft:280
} 
const imageAuction = {
  width: 1440,
  height:250
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
const media = {
  width:800,
  height:795,
  marginLeft:350
}
export default SubbappyAuction;