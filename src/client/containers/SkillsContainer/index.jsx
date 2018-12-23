import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container } from 'react-rasta';

import constants from 'metadata';
import * as skillsActions from 'actions/skillsActions';
import Header from './Header';
import Lists from './Lists';

export class SkillsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.actions.getAllSkills();
  }

  handleCreate() {
    const { value: name, selection: experience } = this.props;
    this.props.actions.createSkill({ name, experience });
  }

  handleDelete(id) {
    this.props.actions.deleteSkill(id);
  }

  render() {
    return (
      <Container fluid>
        <Header
          options={constants.experience}
          actions={this.props.actions}
          onCreate={this.handleCreate}
          isSkillValid={
            this.props.value.length >= constants.minLength &&
            this.props.value.length <= constants.maxLength
          }
        />
        <Lists data={this.props.data} onDelete={this.handleDelete} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  value: state.skillsReducer.value,
  selection: state.skillsReducer.selection,
  data: state.skillsReducer.data
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(skillsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);