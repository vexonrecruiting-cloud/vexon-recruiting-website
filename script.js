
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');if(toggle){toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'));});}document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
function buildEmployerEmail(e){e.preventDefault();const f=new FormData(e.target);const subject=encodeURIComponent('Employer Inquiry - Vexon Recruiting');const body=encodeURIComponent(`Name: ${f.get('name')}
Company: ${f.get('company')}
Email: ${f.get('email')}
Roles needed: ${f.get('roles')}
Location: ${f.get('location')}
Timeline: ${f.get('timeline')}

Message:
${f.get('message')}`);window.location.href=`mailto:info@vexonrecruiting.ca?subject=${subject}&body=${body}`;}
function buildCandidateEmail(e){e.preventDefault();const f=new FormData(e.target);const subject=encodeURIComponent('Candidate Resume Submission - Vexon Recruiting');const body=encodeURIComponent(`Name: ${f.get('name')}
Email: ${f.get('email')}
Current location: ${f.get('location')}
Trade / role: ${f.get('trade')}
Certifications: ${f.get('certifications')}
Relocation: ${f.get('relocation')}
Rotation / FIFO: ${f.get('rotation')}
Availability: ${f.get('availability')}

Please attach your resume before sending.

Notes:
${f.get('message')}`);window.location.href=`mailto:info@vexonrecruiting.ca?subject=${subject}&body=${body}`;}
