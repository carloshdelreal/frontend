import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Doctor from '../components/doctor';
import { loadDoctors } from '../actions/index';

// eslint-disable-next-line react/prefer-stateless-function
class DoctorList extends Component {
  componentDidMount() {
    const { loadDoctors } = this.props;
    axios.get('/api/v1/doctor')
      .then((doctors) => {
        loadDoctors(doctors.data);
      });
  }

  render() {
    const { doctors, specialties, specialtySelected } = this.props;
    let specialtydoctors;
    let specialty;
    if (specialtySelected === null) {
      specialtydoctors = doctors;
      specialty = null;
    } else {
      specialtydoctors = doctors.filter(doctor => doctor.specialization_id === specialtySelected);
      specialty = specialties[specialtySelected - 1];
    }
    return (
      <div className="doctorsList px-3">
        <p className="doctorsList__results">{ `Results showing ${specialty.area} Doctors` }</p>
        <div className="row p-1">
          {specialtydoctors.map(doctor => (
            <Doctor
              key={doctor.id}
              doctor={doctor}
              specialty={specialty}
            />
          ))}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  doctors: state.doctors,
  specialtySelected: state.specialtySelected,
  specialties: state.specialties,
});

const mapDispatchToProps = dispatch => ({
  loadDoctors: doctors => dispatch(loadDoctors(doctors)),
});

DoctorList.defaultProps = {
  specialtySelected: null,
};

DoctorList.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      docname: PropTypes.string,
      location: PropTypes.string,
      fullname: PropTypes.string,
      specialization_id: PropTypes.number,
    }).isRequired,
  ).isRequired,
  specialtySelected: PropTypes.number,
  loadDoctors: PropTypes.instanceOf(Function).isRequired,
  specialties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      area: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
