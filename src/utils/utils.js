export const styleMyPaginate = `
margin: 3rem 0;
display: flex;
flex-direction: row;
justify-content: space-between;
list-style-type: none;
padding: 0 5rem;
border-box: none;
li a {
  padding:5px 10px;
  margin-right:2px;
  background:#ccc;
  color:#fff;
  text-decoration:blink;
  cursor: pointer;
}
li.previous a,
li.next a,
li.break a {
  border-color: transparent;
}
li.active a,
li a:hover {
  padding:5px 10px;
  margin-right:2px;
  background:#ffd700;
  color:#fff;
}
li.disabled a {
  color: grey;
}
li.disable,
li.disabled a {
  cursor: default;
}
`;