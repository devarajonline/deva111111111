const fetchdata=async(cityname)=>{
    const apiKey='6d3be0e1f2195870d755bff81bcb9a19'
    const error=document.getElementById("error");
    const output=document.getElementById("output");
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`);
    if(!response.ok){
        error.textContent("failed to fetch")
        return
    }
    const data=await response.json();
    console.log(data)


    output.innerHTML=`<h1>${data.name}</h1>
    <h1>${data.main.temp}°C</h1>
    <h1>${data.weather[0].description}</h1>`
}
const callerfun=()=>{
    const searchInput = document.getElementById("searchInput").value.trim();
    if (!searchInput) {
        const error=document.getElementById("error");
        error.style.color="red";
        if(!searchInput){
            error.textContent="enter city name"
        }
    }
    console.log(searchInput)
    fetchdata(searchInput)
}
