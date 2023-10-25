import styled from "styled-components";

export const FilterLabel = styled.label`
display: block;
font-size: 18px;
font-weight: 500;
margin-bottom: 10px;
`;

export const FilterFieldInput = styled.input`
 width: 100%;
  min-height: 40px;
  padding-left: 38px;
	margin-bottom: 30px;
  border: 1px solid rgba(46, 47, 66, 0.4);
  border-radius: 4px;
  outline: transparent;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
  border-color: black;
}
`;