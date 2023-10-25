import styled from "styled-components";

export const ListItem = styled.li`
display: flex;
justify-content: space-between;
padding: 10px;
	font-size: 20px;
	border: 1.5px solid black;
	border-radius: 10px;
&:not(:last-child){
	margin-bottom: 10px;
}
`;

export const DeleteBtn = styled.button`
margin-left: 30px;
  padding: 8px 10px;
  font-weight: 500;
  font-size: 16px;
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