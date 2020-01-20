import React from 'react';
import PropTypes from 'prop-types';

const specialties = [
  { id: 1, area: 'general' },
  { id: 2, area: 'pediatrics' },
  { id: 3, area: 'dermatology' },
  { id: 4, area: 'oncology' },
  { id: 5, area: 'internal medicine' },
  { id: 6, area: 'neurology' },
  { id: 7, area: 'obstetrics' },
  { id: 8, area: 'cardiology' },
];

const resAtend = {
  success: true,
  atends: [
    {
      id: 1,
      date: '2020-01-20',
    },
    {
      id: 2,
      date: '2020-01-21',
    },
    {
      id: 3,
      date: '2020-01-22',
    },
    {
      id: 4,
      date: '2020-01-23',
    },
    {
      id: 5,
      date: '2020-01-24',
    },
    {
      id: 6,
      date: '2020-01-25',
    },
    {
      id: 7,
      date: '2020-01-26',
    },
    {
      id: 8,
      date: '2020-01-27',
    },
  ],
};


const doctors = [
  {
    id: 1,
    docname: 'DickSchaden',
    location: 'los angeles',
    fullname: 'Dick Schaden',
    specialization_id: 1,
  },
  {
    id: 2,
    docname: 'HuongBernhard',
    location: 'knoxville',
    fullname: 'Huong Bernhard',
    specialization_id: 1,
  },
  {
    id: 3,
    docname: 'LakieshaBernier',
    location: 'albuquerque',
    fullname: 'Lakiesha Bernier',
    specialization_id: 4,
  },
  {
    id: 6,
    docname: 'LaurenHeaney',
    location: 'bogota',
    fullname: 'Lauren Heaney',
    specialization_id: 5,
  },
];

const booking = [
  {
    id: 77,
    label: '8:30 AM',
    hour: 8,
    minutes: 30,
    booked: true,
    doctor_id: 6,
    atend_id: 1,
    created_at: '2020-01-19T19:34:16.293Z',
    updated_at: '2020-01-19T19:36:26.454Z',
    user_id: 1,
  },
  {
    id: 76,
    label: '8:00 AM',
    hour: 8,
    minutes: 0,
    booked: true,
    doctor_id: 6,
    atend_id: 1,
    created_at: '2020-01-19T19:34:16.275Z',
    updated_at: '2020-01-19T19:36:15.718Z',
    user_id: 1,
  },
];

// eslint-disable-next-line react/prefer-stateless-function
class BookingComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listBooking: null,
    };
  }

  componentDidMount() {
    const dictAtend = {};
    resAtend.atends.forEach((item) => {
      const s = item.date;
      const year = s.slice(0,4);
      const month = s.slice(5,7);
      const day = s.slice(8);
      const date = new Date(year, month, day);
      dictAtend[item.id] = [item.date, date ];
    });

    const specialDict = {};
    specialties.forEach((item) => {
      specialDict[item.id] = item.area;
    });

    const dictDoctor = {};
    doctors.forEach((doctor) => {
      dictDoctor[doctor.id] = [
        doctor.fullname, doctor.location, specialDict[doctor.specialization_id]];
    });

    const listBooking = [];
    booking.forEach((item) => {
      listBooking.push(
        [item.id, item.label,
          ...dictDoctor[item.doctor_id], ...dictAtend[item.atend_id]]
      );
    });
    this.setState({ listBooking });
  }

  // async allBooking() {
  //   const { id } = this.props.match.params;
  //   const res = await axios.get(`/api/v1/doctor/${id}/booking`)
  //   const resAtend = await axios.get(`/api/v1/atend`)
  // }
  render() {
    const { upcoming } = this.props;
    const { listBooking } = this.state;

    if (!listBooking) {
      return (<div>Loading...</div>);
    }

    if (upcoming) {
      return (
        <div>
          upcomming
        </div>
      );
    }
    return (
      <div>
        { listBooking.map((item) => (
          <div key={item[0]} className="container">
            <div className="row">
              <div className="booking col-12">
                <h5>{ `${item[6].toDateString()}, at ${item[1]} ` }</h5>
                <p>{ `With Dr. ${item[2]}, ${item[4]}, at ${item[3]}` }</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );

  }

}

BookingComponent.defaultProps = {
  upcoming: false,
};

BookingComponent.propTypes = {
  upcoming: PropTypes.bool,
};

export default BookingComponent;
