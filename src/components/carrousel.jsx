import React from 'react';

class CarrouselSelector extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    selected: 0,
  }

  handleClick(index){
    const { timeList } = this.props;
    this.setState({ selected: index });
    this.props.newTime({item: timeList[index]})
  }


  render (){
    const { timeList: list } = this.props
    const x = (-25 * this.state.selected) -12.5;
    const styles = { 
      transform: `translateX(${x}%)`,
    };

    return (
      <div className="carrouselSelector">
        { list.length > 0 ? (<h5>Select a Time</h5>) : (<h5>The agenda is full </h5>) }
        <div className="container">
          <div className="row carrouselSelector__row" style={styles}>
            <div className="col-3"></div>
            <div className="col-3"></div>
            { list.map((item, index) => {
              if (index === this.state.selected){
                return (
                  <div key={item[0]} className="col-3 selected">
                    <button
                      type="button" 
                      onClick={() => this.handleClick(index)}>
                        {item[0]}
                    </button>
                  </div>
                );
              } else{
                return (
                  <div key={item} className="col-3">
                    <button
                      type="button"
                      onClick={() => this.handleClick(index)}>
                        {item[0]}
                    </button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  };
}

export default CarrouselSelector;
