import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import NavComponent from './nav';
import DoctorList from '../containers/doctorList';
import SpecialtiesList from '../containers/specialtiesList';
import SearchBox from './searchBox';


const SearchDoctor = (props) => {
  const { specialtySelected } = props;
  return (
    <div className="container">
      <NavComponent />
      { specialtySelected ? (null) : (<SearchBox />) }
      { specialtySelected ? (<DoctorList />) : (<SpecialtiesList />) }
    </div>
  );
};

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  specialtySelected: state.specialtySelected,
});


const mapDispatchToProps = () => ({

});


SearchDoctor.defaultProps = {
  specialtySelected: null,
};

SearchDoctor.propTypes = {
  specialtySelected: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDoctor);
