import React from 'react';
import { ButtonMore, CenteredContainer } from './Button.styled';

const Button = ({ onClick }) => (
  <CenteredContainer>
    <ButtonMore type="button" className="button" onClick={onClick}>
      Load More
    </ButtonMore>
  </CenteredContainer>
);

export default Button;
