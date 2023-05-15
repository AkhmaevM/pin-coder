import styled from 'styled-components'


export const button = styled.button`
  background-color: white;
  padding: 10px 20px;
  border: 2px solid #bbbbbb;
  box-shadow: 3px 3px 0px 0px #eadff9;
  font-size: 16px;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    box-shadow: 3px 3px 0px 0px #e1ccff;
    text-shadow: 2px 2px #e1ccff;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    box-shadow: 3px 3px 0px 0px #e7e7e7;
  }

  `


 