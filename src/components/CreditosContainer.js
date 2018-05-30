import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const credits1 = {
    img: 'http://res.cloudinary.com/otnielitowsky/image/upload/v1525991708/173.png',
    title: '----->',
    author: 'jill111',
  }

  const credits2 =  {
    img: 'http://res.cloudinary.com/otnielitowsky/image/upload/v1525991714/275.png',
    title: '----->',
    author: 'pashminu',
  }

  const credits3 ={
    img: 'http://res.cloudinary.com/otnielitowsky/image/upload/v1525991720/600.png',
    title: '----->',
    author: 'Danson67',
  }

  const credits4 = {
    img: 'http://res.cloudinary.com/otnielitowsky/image/upload/v1525991726/1000.png',
    title: '----->',
    author: 'fancycrave1',
  }


/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const CreditosContainer = ({loadCredits1,loadCredits2,loadCredits3,loadCredits4}) => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      
        <GridTile
          key={credits1.img}
          title={credits1.title}
          actionIcon={<RaisedButton onClick={loadCredits1} primary={true} label="Comprar" />}
        >
          <img src={credits1.img} />
        </GridTile>
        <GridTile
          key={credits2.img}
          title={credits2.title}
          actionIcon={<RaisedButton onClick={loadCredits2} primary={true} label="Comprar" />}
        >
          <img src={credits2.img} />
        </GridTile>
        <GridTile
          key={credits3.img}
          title={credits3.title}
          actionIcon={<RaisedButton onClick={loadCredits3} primary={true} label="Comprar" />}
        >
          <img src={credits3.img} />
        </GridTile> 
        <GridTile
          key={credits4.img}
          title={credits4.title}
          actionIcon={<RaisedButton onClick={loadCredits4} primary={true} label="Comprar" />}
        >
          <img src={credits4.img} />
        </GridTile>     
    </GridList>
  </div>
);

export default CreditosContainer;