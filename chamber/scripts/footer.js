// document.addEventListener('DOMContentLoaded', function () {

//     const yearEl = document.getElementById('currentyear');
//     if (yearEl) {
//         yearEl.textContent = `© ${new Date().getFullYear()} Accra City Chamber of Commerce`;
         
//     }

//     const lastEL = document.getElementById('lastModified');
//     const raw = document.lastModified;

    


    
//     })

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;