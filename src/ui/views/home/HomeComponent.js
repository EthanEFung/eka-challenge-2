import React from 'react';
import classNames from 'classnames';
import {
  FlexBox,
  Button
} from '../../components';
import { Link } from 'react-router-dom';
import './HomeComponent.css';


export const HomeComponent = props => {
  const { className, children, postUser } = props;
  const classes = classNames('home', className);

  return (
    <FlexBox className={classes}>
      <Link to="/form1">
        <Button className="signup" onClick={postUser.bind(this)}>
          Sign Up
        </Button>
      </Link>
    </FlexBox>
  );
};

