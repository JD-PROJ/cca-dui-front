import styled from '@emotion/styled';

const PRIMARY = '#125688';
const SECONDARY = '#3b5998';
//const TERTIARY = '#55acee';

//const BLACK = '#111';
const GRAY = '#9b9b9b';
const WHITE = '#EEE';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const FullSizeContainer = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: center;
`;

export const Button = styled.button`
  color: ${WHITE};
  background-color: ${PRIMARY};
  border-radius: 0.25em;
  border-style: solid;
  border-width: 1;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  padding: 1em 1.5em;
  text-decoration: none;
  -webkit-transition: color 0.4s, background-color 0.4s, border 0.4s;
  transition: color 0.4s, background-color 0.4s, border 0.4s;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${GRAY};
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: borderColor 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, ${PRIMARY}, ${SECONDARY});
    border-image-slice: 1;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${GRAY};
  ${Input}:placeholder-shown + & {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
  ${Input}:focus + & {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${PRIMARY};
    font-weight: 700;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;
