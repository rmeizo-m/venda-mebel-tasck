export const LOGIN = "LOGIN";
export const LOADED = "LOADED";

export const authFetch = async (dispatch, data) => {
  const response = await fetch("https://still-reef-64363.herokuapp.com/api/auth", {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(data)
  })

  const res = await response.json();

  dispatch({type: LOADED})
  dispatch({type: LOGIN, payload: res})

}