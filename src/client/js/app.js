/* Global Variables */
let baseURL = ' api.geonames.org/findNearbyPostalCodes?';
let foreCast='https://api.darksky.net/forecast/29421cb322f2f5d29f50d778d3d22db8/37.8267,-122.4233';
let photo='https://pixabay.com/api/';
let pixApi='15186043-b93bc6e166f86b9d08c88906a';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById("generate").addEventListener('click', performAction);

function performAction(e){
  const country =  document.getElementById('postalCOde').value;
  const weather = document.getElementById('foreCast').value;
  const pic=document.getElementById('searchTerm').value;
  const getCountry = async (baseURL, country,weather,pic,pixApi)=>{
      
      const res = await fetch(baseURL+country+weather+pic+pixApi)
    try {

    const data=await res.json();
    return data;
    
    }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
     }
  }
   getCountry().then( res =>{ console.log(res);
   
    postData('/add', {country:country, date: newDate, weather: weather,pic:pic,pixApi});
    updateUI('/all');})

    
    //post routes
   const postData=async function postData(url = 'api.geonames.org/findNearbyPostalCodes?', data = {}) {
    
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors',
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
        
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data) 
    });
    return await response.json();
}
const geonamesData = await postData();

const postData2=async function postData2(url = 'https://api.darksky.net/forecast/29421cb322f2f5d29f50d778d3d22db8/37.8267,-122.4233', data = {}) {
    
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors',
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data) 
  });
  return await response.json();
}
const darkSkyData = await postData2();
const postData3=async function postData3(url = 'https://pixabay.com/api/', data = {}) {
    
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors',
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data) 
  });
  return await response.json();
}
const pixaBayData = await postData3();
  

    //UpdateUI
    const updateUI = async () => {
      const request = await fetch('/all');
      try{
       const Data = await request.json();
       document.getElementById('postalCOde').innerHTML = Data[0].country;
       document.getElementById('date').innerHTML = Data[0].date;
       document.getElementById('foreCast').innerHTML = Data[0].weather;
       document.getElementById('searchTerm').innerHTML = Data[0].pic;
       
  
        }catch(error){
        console.log("error", error);
        }
    }
  
}

