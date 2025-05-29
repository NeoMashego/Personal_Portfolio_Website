const resume = document.getElementById("resume");

function openResume(){
    const resumeUrl = './documents/Neo_Mashego_CV.pdf';
    window.open(resumeUrl, '_blank');
}

resume.addEventListener('click', openResume);