import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  gap: 10px;

  padding: 0 10px;
  margin-bottom: 24px;
`;

export const Option = styled.li`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const FeedbackButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;

  &:active {
    background-color: #6fa8dc;
    border-color: #0074cc;
  }

  text-transform: capitalize;
`;