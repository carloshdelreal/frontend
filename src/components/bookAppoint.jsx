import axios from 'axios';
import Calendar from 'react-calendar';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackCaretWhite from '../images/backCaretWhite.png';
import CarrouselSelector from './carrousel';

class BookAppointment extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    do {
      date.setDate(date.getDate() + 1);
    } while (date.getDay() === 0 || date.getDay() === 6);

    this.state = {
      date,
      booking: {
        '1/19/2020': [['8:00 AM', 8, 0], ['8:30 AM', 8, 30], ['9:00 AM', 9, 0], ['9:30 AM', 9, 30], ['10:00 AM', 10, 0]],
        '1/20/2020': [['8:30 AM', 8, 30], ['9:00 AM', 9, 0], ['9:30 AM', 9, 30], ['10:00 AM', 10, 0]],
        '1/21/2020': [['8:00 AM', 8, 0], ['10:00 AM', 10, 0]],
        '1/22/2020': [['8:00 AM', 8, 0], ['9:30 AM', 9, 30], ['10:00 AM', 10, 0]],
      },
    };
    this.calendarChange = this.calendarChange.bind(this);
    this.newTime = this.newTime.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/api/v1/book/:id')
  //     .then((bookingData) => {
  //       const booking = bookingData.data;
  //       this.setState({ booking });
  //     });
  // }

  calendarChange(date) {
    this.setState({ date });
  }

  newTime(time) {
    this.setState({ time: time.time });
  }

  render() {
    const { date, booking } = this.state;
    const timeList = booking[date.toLocaleDateString('en-US')];
    const minBookinDate = new Date();
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
