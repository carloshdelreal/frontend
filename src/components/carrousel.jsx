import React from 'react';
import PropTypes from 'prop-types';

class CarrouselSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.backToStart = this.backToStart.bind(this);
    this.state = {
      selected: 0,
    };
  }

  handleClick(index) {
    // eslint-disable-next-line react/prop-types
    const { newTime, timeList } = this.props;
    const arr = timeList[index];
    const time = new Date();
    time.setHours(arr[1]);
    time.setMinutes(arr[2]);
    newTime({ time });
    this.setState({ selected: index });
  }

  backToStart() {
    this.setState({ selected: 0 });
  }


  render() {
    // eslint-disable-next-line react/prop-types
    const { timeList: list } = this.props;
    const { selected } = this.state;
    const x = (-25 * selected) - 12.5;
    const styles = {
      transform: `translateX(${x}%)`,
    };

    return (
      <div className="carrouselSelector">
        { list ? (<h5><button type="button" onClick={() => this.backToStart()}> Select a Time </button></h5>) : (<h5>The agenda is full </h5>) }
        <div className="container">
          <div className="row carrouselSelector__row" style={styles}>
            <div className="col-3" />
            <div className="col-3" />
            { list.map((item, index) => {
              if (index === selected) {
                return (
                  <div key={item[0]} className="col-3 selected">
                    <button
                      type="button"
                      onClick={() => this.handleClick(index)}
                    >
                      { item[0] }
                    </button>
                  </div>
                );
              }
              // eslint-disable-next-line no-unused-expressions
              return (
                <div key={item} className="col-3">
                  <button
                    type="button"
                    onClick={() => this.handleClick(index)}
                  >
                    {item[0]}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

CarrouselSelector.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  timeList: [],
};

CarrouselSelector.propTypes = {
  newTime: PropTypes.instanceOf(Function).isRequired,
};

export default CarrouselSelector;
