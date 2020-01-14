import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import NavComponent from './nav';
import DoctorList from '../containers/doctorList';
import SpecialtiesList from '../containers/specialtiesList';


const SearchDoctor = (props) => {
  const { specialtySelected } = props;
  return (
    <div>
      <NavComponent />
      { specialtySelected ? (<DoctorList />) : (<SpecialtiesList />) }
    </div>
  );
};

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
