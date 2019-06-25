
export const getExampleNumber = () => async dispatch => {
  const res = await fetch('/ex/fetch');
  const number = await res.text()
  dispatch({type:"EXAMPLE/NUMBER",payload: Number(number)})
}
export const addExampleNumber = add => async dispatch => {
  const res = await fetch(`/ex/add/${add}`);
  const number = await res.text()
  dispatch({type:"EXAMPLE/NUMBER",payload: Number(number)})
}