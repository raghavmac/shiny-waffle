import React from 'react';
import { Column, Row } from 'react-rasta';
import Input from 'components/common/Input';
import Select from 'components/common/Select';
import Button from 'components/common/Button';

const Header = props => (
  <Row>
    <Column size="4">
      <Input
        placeholder="Node JS, Postgres, React, etc."
        onChange={e => props.actions.addSkill(e.target.value)}
      />
    </Column>
    <Column size="3">
      <Select
        options={props.options}
        placeholder="Experience"
        onChange={e => props.actions.selectExperience(e.target.value)}
      />
    </Column>
    <Column size="3">
      <Button content="ADD SKILLS" disabled={props.isSkillValid} onClick={props.onCreate} />
    </Column>
  </Row>
);

export default Header;