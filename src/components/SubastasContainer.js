import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

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

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const SubastasContainer = ({products}) => {
  return (
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {products.map((product) => (
          <GridTile
            key={product.name}
            title={product.name}
            subtitle={product.initPrice}
            actionIcon={<Link to={`/detail/${product._id}`} ><RaisedButton  primary={true} label="Ir a Subasta" /></Link>}
          >
            <img src={product.image[0]} />
            
  
          </GridTile>
        ))}
       
      </GridList>
      
    </div>
  );
} 

export default SubastasContainer;