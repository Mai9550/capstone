/* Global Variables */
let baseURL = 'http://api.geonames.org/postalCodeSearchJSON?postalcode=';
let foreCast='https://api.darksky.net/forecast/29421cb322f2f5d29f50d778d3d22db8/';
let photo='https://pixabay.com/api/?key=15186043-b93bc6e166f86b9d08c88906a&q=';




document.getElementById("generate").addEventListener('click', performAction);

function performAction(e){
  const country =  document.getElementById('postalCOde').value;
  
  const pic=document.getElementById('searchTerm').value;
  const getCountry = async (baseURL, country)=>{
    
      const res = await fetch(baseURL + country +"&maxRows=10&username=mai9550")
    try {

    const data=await res.json();
    return data;
    
    }  catch(error) {
        // appropriately handle the error
    console.log("error", error);
  
     }
     const geonames = await getCountry(baseURL, country);
  }
   
   

    
    //post routes


const postData2=async function postData2(url = 'https://api.darksky.net/forecast/29421cb322f2f5d29f50d778d3d22db8/', data = {}) {
    
  const response = await fetch(url+geonames);
  return await response.json();
  const darkSkyData = await postData2();
}

const postData3=async function postData3(url = 'https://pixabay.com/api/?key=15186043-b93bc6e166f86b9d08c88906a&q=', data = {}) {
    
  const response = await fetch(url+pic+'&image_type=photo');
  return await response.json();
  const pixaBayData = await postData3();
}

  

    //UpdateUI
    const updateUI = async () => {
      const request = await fetch('/all');
      try{
       const Data = await request.json();
       document.getElementById('postalCOde').innerHTML = Data[0].country;
       document.getElementById('date').innerHTML = Data[0].date;
       
       document.getElementById('searchTerm').innerHTML = Data[0].pic;
       
  
        }catch(error){
        console.log("error", error);
        }
    }
  
}

export { performAction };