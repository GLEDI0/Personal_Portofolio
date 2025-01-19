// Navigation Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showProjectDetails() {
    const modal = document.getElementById('project-top');
    const closeBtn = document.getElementsByClassName('close')[0];
    const projectDetails = document.querySelector('.project-details');
    
    const projectHTML = `
        <h2>Programi qe kam krijuar eshte nje regjister klase ku mund te regjistrohesh 
        dhe me pas logohesh per te aksesuar dhe edituar te dhenat e studenteve.</h2>
        <p>Per te krijuar kete program kam perdorur C#, Sql, ADO.NET dhe .Net Framework.</p>
        <p>Kjo eshte faqa e Rregjistrimit ku perdoruesi fut usernamin 
        dhe passwordin qe deshiron.</p>
        <img src="Screenshot 2024-05-28 123913.png" alt="Registration Page" class="project-image">
        <p>Kjo eshte faqa e Logimit ku perdoruesi fut usernamin 
        dhe passwordin qe jane rregjistruar.</p>
        <img src="Screenshot 2024-05-28 123932.png" alt="Login Page" class="project-image">
        <p>Kjo esthe faqa kryesore ku menaxhon te dhenat e studenteve.</p>
        <img src="Screenshot 2024-05-28 150131.png" alt="Main Page" class="project-image">
    `;
    
    projectDetails.innerHTML = projectHTML;
    modal.style.display = "block";
    
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Contact Form Submission (Mockup Functionality)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Faleminderit qe me kontaktuat! Do te te shkruaj sa me shpejt.');
    form.reset();
});
