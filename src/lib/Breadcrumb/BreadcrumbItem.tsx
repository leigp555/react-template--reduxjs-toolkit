import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const BreadcrumbItemStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  color: #8c8c8c;
  &:last-child {
    color: #262626;
  }
`;

const BreadcrumbItem: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <BreadcrumbItemStyled {...rest}>{children}</BreadcrumbItemStyled>;
};
BreadcrumbItem.defaultProps = {
  children: ''
};

export default BreadcrumbItem;
