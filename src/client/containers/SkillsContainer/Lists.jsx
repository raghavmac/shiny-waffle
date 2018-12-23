import React from 'react';
import { Column, Row } from 'react-rasta';
import Card from 'components/common/Card';

const Lists = props => (
  <Row className="list">
    {props.data.map(skill => (
      <Column key={skill.id} className="card-list" size="3">
        <Card
          title={skill.name}
          subTitle={skill.experience}
          onDelete={() => props.onDelete(skill.id)}
        />
      </Column>
    ))}
  </Row>
);

export default Lists;