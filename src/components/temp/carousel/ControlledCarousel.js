import React from "react";
import Carousel from 'react-bootstrap/Carousel';


class ControlledCarousel extends React.Component {

  constructor(props) {
    super(props);
    //console.log(props);
    this.items = this.props.data;
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  //const [index, setIndex] = React.useState(0);
  //const [direction, setDirection] = React.useState(null);
  
  // handleSelect(selectedIndex, e){
  //   setIndex(selectedIndex);
  //   setDirection(e.direction);
  // };

  render() {
    const { activeIndex } = this.state;

    const slides = this.items.map((item, i) => {
      //console.log('Iterating....');
      //console.log(item.src);
      //console.log(item.caption);
      //console.log(item.desc);
      return (
          <Carousel.Item key={i}  >
              <img  src= {item.src.default} alt={'Slide'}  />
              <Carousel.Caption>
                <h3>{item.caption}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
          </Carousel.Item>
      );
    });

  return (
    <Carousel /*activeIndex={index} direction={direction} onSelect={handleSelect} */ interval={10000}>
            {slides}
    </Carousel>
  );
  }
}

  
export default ControlledCarousel;