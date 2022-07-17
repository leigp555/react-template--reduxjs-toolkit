import React from 'react';
import styled from 'styled-components';

// 这个组件内的元素纵向排列

const RowStyled = styled.div`
  display: flex;
  width: 100%;
`;

type Props = {
  gap?: number;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  wrap?: boolean;
  aline?: 'center' | 'start' | 'end';
  children: React.ReactNode;
};

const Row: React.FC<Props> = ({ aline, children, gap, wrap, justify }) => {
  return (
    <RowStyled
      style={{
        gap: `${gap}px`,
        alignItems: `${aline}`,
        justifyContent: `${justify}`,
        flexWrap: `${wrap ? 'wrap' : 'nowrap'}`
      }}
    >
      {children}
    </RowStyled>
  );
};
Row.defaultProps = {
  gap: 0,
  justify: 'start',
  aline: 'start',
  wrap: false
};

export default Row;