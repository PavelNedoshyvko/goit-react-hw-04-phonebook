import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

export const FormContacts = styled(Form)`
display: flex;
flex-direction: column;
margin-bottom: 50px;
`;

export const FormLabel = styled.label`
margin-bottom: 4px;
  font-size: 20px;
  line-height: 1.17;
  letter-spacing: 0.01em;
`;

export const FieldInput = styled(Field)`
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

export const AddContactBtn = styled.button`
margin-left: auto;
margin-right: auto;
  padding: 12px 22px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #000000;
  background-color: #ecd9c6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
  background-color:#ffc61a;
}
`;

export const ErrMessage = styled(ErrorMessage)`
margin-bottom: 20px;
`;