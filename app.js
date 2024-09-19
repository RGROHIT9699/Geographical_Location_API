fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
    const mydata = document.getElementById('data');
    mydata.innerHTML = `
        <p>IP: ${data.ip}</p>
        <p>City: ${data.city}</p>
        <p>Region: ${data.region}</p>
        <p>Country: ${data.country}</p>
        <p>Location: ${data.loc}</p>
        <p>Organisation: ${data.org}</p>
        <p>Postal: ${data.postal}</p>
        <p>TimeZone: ${data.timezone}</p>
        <p>Readme: ${data.readme}</p>      
    `;
    })
    .catch(error => {
        console.error('Error', error);
});