import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 700,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://images.kogan.com/image/fetch/s--mK0ZGztD--/b_white,c_pad,f_auto,h_630,q_auto:good,w_1200/https://assets.kogan.com/files/product/HKI/20170324_New_iPad/KHIPADAIR332WGLD_1.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://www.todoautos.com.pe/portal/images/stories/00_Fotos_Noticias/escoge-tu-carro-tipo-vehiculo-1.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://jarris.co/wp-content/uploads/2015/11/HAMBURGUESA-DE-CARNE-jarris-e1508331595394.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://http2.mlstatic.com/carro-a-bateria-y-control-remoto-para-ninos-ford-ranger-D_NQ_NP_706283-MEC26555767999_122017-F.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://jarris.co/wp-content/uploads/2015/11/HAMBURGUESA-DE-CARNE-jarris-e1508331595394.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://jarris.co/wp-content/uploads/2015/11/HAMBURGUESA-DE-CARNE-jarris-e1508331595394.png',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://jarris.co/wp-content/uploads/2015/11/HAMBURGUESA-DE-CARNE-jarris-e1508331595394.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://jarris.co/wp-content/uploads/2015/11/HAMBURGUESA-DE-CARNE-jarris-e1508331595394.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const SubastasUser = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<RaisedButton  primary={true} label="Ir a Subasta" />}
        >
          <img src={tile.img} />
          

        </GridTile>
      ))}
    </GridList>
  </div>
);

export default SubastasUser;