import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavComponent from './nav';
import DoctorList from '../containers/doctorList';
import SpecialtiesList from '../containers/specialtiesList';
import SearchBox from './searchBox';
import { loadDoctors } from '../actions/index';


class SearchDoctor extends Component {

  componentDidMount() {
    const { loadDoctors } = this.props;
    axios.get('/api/v1/doctor')
      .then((doctors) => {
        loadDoctors(doctors.data);
      });
  }

  render() {
    const { specialtySelected } = this.props;
    return (
      <div className="container">
        <NavComponent />
        { specialtySelected ? (null) : (<SearchBox />) }
        { specialtySelected ? (<DoctorList />) : (<SpecialtiesList />) }
      </div>
    );
  }
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  specialtySelected: state.specialtySelected,
});


const mapDispatchToProps = dispatch => ({
  loadDoctors: doctors => dispatch(loadDoctors(doctors)),
});


SearchDoctor.defaultProps = {
  specialtySelected: null,
};

SearchDoctor.propTypes = {
  specialtySelected: PropTypes.number,
  loadDoctors: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDoctor);
