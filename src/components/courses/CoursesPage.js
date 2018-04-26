import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {loadCoursesSuccess}  from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    );
  }

  render() {
    // debugger;
    return (
      <div>
        <h1>Courses</h1>
        { this.props.courses.map(this.courseRow) }
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCourses: bindActionCreators(loadCoursesSuccess, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);