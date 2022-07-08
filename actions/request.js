import fetch from "isomorphic-fetch";
const API = 'https://newcodecave.herokuapp.com'
//const API = 'http://localhost:5000';

export const getLink = (dataFromTextArea) => {
  if(dataFromTextArea.length != 0){
    var data = {
      raw_code:dataFromTextArea
    }
    console.log(dataFromTextArea)
    return fetch(`${API}/addCode`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(async (response) => {
         var data = await response.json();
         console.log(data)
         window.location.href = `/${data.url}`;
      })
      .catch((err) => console.log(err));
  }else{
    alert('Please enter the code!!');
  }
};


export const getData = async (id) => {
  return fetch(`${API}/${id}`,{
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(async (response) => {
      return await response.json();
    })
    .catch((err) => console.log(err));
};

export const wakeApp = async () => {
  return fetch(`${API}`,{
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(async (response) => {
      return response;
    })
    .catch((err) => console.log(err));
}