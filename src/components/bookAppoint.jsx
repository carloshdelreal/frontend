import Calendar from 'react-calendar';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackCaretWhite from '../images/backCaretWhite.png';
import CarrouselSelector from './carrousel';

class BookAppointment extends Component {
  constructor(props) {
    super(props);
    this.calendarChange = this.calendarChange.bind(this);
  }

  componentDidMount() {
    const date = new Date();
    do {
      date.setDate(date.getDate() + 1);
    } while (date.getDay() === 0 || date.getDay() === 6);

    this.setState({ date });
  }

  calendarChange(date) {
    this.setState({ date });
  }

  newTime(item) {
    const { date } = this.state;
    const arr = item.item;
    date.setHours(arr[1]);
    date.setMinutes(arr[2]);

    this.setState({ date });
  }

  render() {
    // const timeList = [["8:00 AM", 8, 0], ["8:30 AM", 8, 30], ["9:00 AM", 9, 0], ["9:30 AM", 9, 30], ["10:00 AM", 10, 0]];
    const timeList = [];
    const minBookinDate = new Date();
    minBookinDate.setDate(minBookinDate.getDate() + 1);
    const { date } = this.state;

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
            value={date}
            tileDisabled={({ date }) => date.getDay() === 0}
          />
          <CarrouselSelector
            newTime={this.newTime}
            timeList={timeList}
          />
        </div>
      </div>
    );
  }
}

export default BookAppointment;
