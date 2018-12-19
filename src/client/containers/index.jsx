import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authActions from 'actions/skillsActions';

const SkillsContainer = props => (<div {...props} />);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(authActions, dispatch)
});

export default connect(null, mapDispatchToProps)(SkillsContainer);