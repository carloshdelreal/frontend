import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import BackCaretWhite from '../images/backCaretWhite.png';
import CarrouselSelector from './carrousel';
 
class BookAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.calendarChange = this.calendarChange.bind(this)
  }

  componentDidMount() {
    let date = new Date();
    do {
      date.setDate(date.getDate() + 1);
    } while(date.getDay()=== 0 || date.getDay() === 6)

    this.setState({ date: date })
  }
 
  calendarChange = date => {
    this.setState({ date })
  }

  newTime = item => {
    const d = this.state.date;
    const arr = item.item;
    d.setHours(arr[1])
    d.setMinutes(arr[2])

    this.setState({ time: d })
  }

  render() {
    // const timeList = [["8:00 AM", 8, 0], ["8:30 AM", 8, 30], ["9:00 AM", 9, 0], ["9:30 AM", 9, 30], ["10:00 AM", 10, 0]];
    const timeList = []
    let minBookinDate = new Date();
    minBookinDate.setDate(minBookinDate.getDate() + 1);

    return (
      <div className="bookAppointment">
        <div className="bookAppointment__header container">
          <div className="doctorProfile__nav row">
            <div className="col-2 text-left">
              <Link to="/">
                <img src={BackCaretWhite} alt="back caret" />
              </Link>
            </div>
            <div className="col-8 d-flex justify-content-center">
              <div className="bookAppointment__header--title align-self-center">
                Make Booking
              </div>
            </div>
          </div>
          <Calendar
            onChange={this.calendarChange}
            minDate={minBookinDate}
            value={this.state.date}
            tileDisabled={({activeStartDate, date, view }) => date.getDay() === 0}
          />
          <CarrouselSelector
            newTime={this.newTime}
            timeList={timeList} />
          <div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default BookAppointment;
