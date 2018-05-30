import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import '../carousel.css';
import { relative } from 'path';
import RaisedButton from 'material-ui/RaisedButton';


class Carousel extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        return (
          <div style={slider}>
          <Slider  {...settings} className="carousel">
            <div>
              <h3> <img style={img} src="https://panamericana.vteximg.com.br/arquivos/ids/267926-370-370/movil-asus-zenfone-go-3g-gris-titanio-dual-sim-1-889349770115.jpg?v=636385655530930000" alt=""/> </h3>
              <h4>Precio $80000.00</h4>
              <h4>Tiempo 23:04:12</h4>
              <h4>Lider: Otniel Gutiérrez</h4>
              <RaisedButton   label="Participar" secondary={true}  />
            </div>
            <div>
              <h3><img style={img} src="https://pisces.bbystatic.com//image2/BestBuy_US/Gallery/MXFlex_Celulares3-12561.jpg;maxHeight=288;maxWidth=520" alt=""/></h3>
              <h4>Precio $80000.00</h4>
              <h4>Tiempo 23:04:12</h4>
              <h4>Lider: Otniel Gutiérrez</h4>
              <RaisedButton   label="Participar" secondary={true}  />
            </div>
            <div>
              <h3><img style={img} src="https://d3lfzbr90tctqz.cloudfront.net/epi/resource/r/celular-libre-samsung-galaxy-j7-2016-negro/d940a5ba9a7163f0bb684bb1e28343386c57e4e302018e6c41ee0e3b73e44a29_250" alt=""/></h3>
              <h4>Precio $80000.00</h4>
              <h4>Tiempo 23:04:12</h4>
              <h4>Lider: Otniel Gutiérrez</h4>
              <RaisedButton   label="Participar" secondary={true}  />
            </div>
            <div>
              <h3><img style={img} src="http://blog.ripley.com.pe/wp-content/uploads/2017/05/los-5-celulares-gama-alta-media-baja-del-momento.jpg" alt=""/></h3>
              <h4>Precio $80000.00</h4>
              <h4>Tiempo 23:04:12</h4>
              <h4>Lider: Otniel Gutiérrez</h4>
              <RaisedButton   label="Participar" secondary={true}  />
            </div>
            <div>
              <h3><img style={img} src="http://locomotor.mx/wp-content/uploads/2017/02/celulares.jpg" alt=""/></h3>
              <h4>Precio $80000.00</h4>
              <h4>Tiempo 23:04:12</h4>
              <h4>Lider: Otniel Gutiérrez</h4>
              <RaisedButton   label="Participar" secondary={true}  />
            </div>
            <div>
              <h3><img style={img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePIzofDQ9MQ1XGcJNBfvUksMcBAgSO3XwkvdCS5Q3shhHrMo9" alt=""/></h3>
              <h4>Precio $80000.00</h4>
              <h4>Tiempo 23:04:12</h4>
              <h4>Lider: Otniel Gutiérrez</h4>
              <RaisedButton   label="Participar" secondary={true}  />
            </div>
          </Slider>
          </div>
        );
      }
    }
 
    const img = {
      width:200,
      height:160

    }

    const slider = {
      marginLeft:700
    }

    
    



  export default Carousel