import fetch from "isomorphic-fetch";
import Router from "next/dist/client/router";
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
         window.location.href = "https://google.com/about";
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
