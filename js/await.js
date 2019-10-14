const url = "https://jsonplaceholder.typicode.com/users";
async function getdata (){
    const response = await fetch(url);
    const data = await response.json();  
    const result = document.querySelector('table');
    await data.forEach(element => {
        const {id ,username ,website} = element;
            result.innerHTML +=`
            <tr>
                <td>${id}</td>
                <td>${username}</td>
                <td>${website}</td>
            </tr>
        `;
    });
}
getdata();