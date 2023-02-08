// set up text to print, each item in array is new line
var aText = new Array(
  '[    0.604303] Name: SUJAY ADKESAR',
  '[    0.605392] Date Of Birth: 1st January 2002',
  '[    0.605752] Institute: SUIET Surathkal , Karnataka',
  '[    0.606097] Degree: Btech in Cybersecurity & Cyberforensics',
  '[    0.606518] Interests: Error!',
  '[    0.606934] LinkedIn Profile: <a href="https://www.linkedin.com/in/sujay-adkesar-a90725224">Connect with Me</a>',
  '[    0.607323] Github Profile: <a href="https://github.com/sujayadkesar">View my repo</a>',
  '[    0.607774] Instagram Profile: <a href="https://instagram.com/SUJAY_ADKESAR">Follow me</a>',
  '[    0.608222] Facebook Profile: <a href="https://www.facebook.com/SUJAYADKESAR">Rarely use it </a>',
  '[    0.608340] Youtube Channel: <a href="https://www.youtube.com/@local_host_">Watch my Uploads</a>',
  '[    0.608736] TryhackMe Profile: <a href="https://tryhackme.com/p/SUJAYADKESAR">Let s Hack</a>',
);
var iSpeed = 1; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById('typedtext');
  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + '_';
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout('typewriter()', 15);
    }
  } else {
    setTimeout('typewriter()', iSpeed);
  }
}

typewriter();


function typeOut(elementId, content) {
  let index = 0;
  const text = content;
  const element = document.getElementById(elementId);

  function typing() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(typing, 35);
    }
  }
  typing();
}


const techskills = `Exposure to Python, Bash, C,  Dockers, Windows Active Directory, Arch Linux
Web Application and network penetration testing, Privilege Escalation, Reverse Engineering and Automating tools development`;

typeOut("elementId", techskills);


const docker = `Created a comprehensive cybersecurity solution by integrating penetration testing tools within Docker containers, allowing for efficient and consistent evaluation of system vulnerabilities`;
typeOut("docker", docker);

const yelpcamp = `Gained hands-on experience in full-stack web development as part of an Udemy Bootcamp, honing skills in using npm packages with express, integrating with MongoDB, implementing passport for authentication, and ensuring site security through prevention of common vulnerabilities.`;
typeOut("yelpcamp", yelpcamp);

const wifi = `Designed and built a NodeMCU-based Wi-Fi deauther for testing network security and identifying vulnerabilities, enhancing network protection by disrupting wireless signals. Utilized the ESP8266 microcontroller for a compact and efficient solution.`;
typeOut("deauth", wifi)