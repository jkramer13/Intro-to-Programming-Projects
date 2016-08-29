//$("#main").append("Joshua Kramer");

// var firstName = "james";

//var age = 32;

//console.log(firstName);

// var awesomeThoughts = "My name is Josh and I am AWESOME!!";

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

//var name = "Joshua Kramer";

//var formattedName = HTMLheaderName.replace("%data%", name);

//var role = "Web Developer";

//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);

//$("#header").prepend(formattedName);

//var skills = ["Web Development", "HTML", "CSS", "Python", "JavaScript"];

//$("#main").append(skills);

//$("#main").append(skills[0]);

var bio = {
	"name" : "Joshua Kramer",
	"role" : "Web Developer", 
	"contacts" : {
		"mobile" : "954-263-9330",
		"email" : "jkramer13@att.net",
		"github" : "jkramer13",
		"location" : "Boca Raton"
	},
	"welcomeMessage" : "Welcome to My Resume!",
	"skills" : [
		"Web Development", "HTML", "CSS", "Python", "JavaScript"
	],
	"bioPic" : "images/app2.png"};

var HTMLheaderName = bio.name;

$('#header').append('<h1>' + HTMLheaderName +'</h1>'); 

var HTMLheaderRole = bio.role;

$('#header').append('<span>' + HTMLheaderRole + '</span><hr>');

var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">954-263-9330</span></li>';

var myMobile = bio.contacts.mobile;

var formattedMobile = HTMLmobile.replace('954-263-9330', myMobile);

$('#topContacts').append(formattedMobile);

var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">jkramer13@att.net</span></li>';

var myEmail = bio.contacts.email;

var formattedEmail = HTMLemail.replace('jkramer13@att.net', myEmail);

$('#topContacts').append(formattedEmail);

var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">jkramer13</span></li>';

var myGithub = bio.contacts.github;

var formattedGithub = HTMLgithub.replace('jkramer13', myGithub);

$('#topContacts').append(formattedGithub);

var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">Boca Raton</span></li>';

var myLocation = bio.contacts.location;

var formattedLocation = HTMLlocation.replace('Boca Raton', myLocation);

$('#topContacts').append(formattedLocation);

var HTMLwelcomeMsg = bio.welcomeMessage;

$('#header').append('<span>' + HTMLwelcomeMsg + '</span><hr>');

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';

var mySkillsstart = bio.skillsStart;

var formattedskillsStart = HTMLskillsStart.replace('Skills at a Glance:', mySkillsstart);

$('#header').append('<span>' + HTMLskillsStart + '</span><hr>');

var HTMLskills = '<li class="flex-item"><span class="white-text">Web Development, HTML, CSS, Python, JavaScript</span></li>';

var mySkills = bio.skills;

var formattedSkills = HTMLskills.replace(['Web Development', 'HTML', 'CSS', 'Python', 'JavaScript'], mySkills);

$('#header').append('<span>' + HTMLskills + '</span><hr>');

var HTMLbioPic = '<img src="images/app2.png" class="biopic">';

var myBiopic = bio.bioPic;

var formattedbioPic = HTMLbioPic.replace('images/app2.png', myBiopic);

$('#header').append('<span>' + HTMLbioPic + '</span><hr>');

//var work = {};

//work.position = "Client Support Specialist";

//work.employer = "AT&T Corp.";

//work.years = 16;

//var education = {};

//education["name"] = "Florida Atlantic Univerity";

//education["years"] = "1996 - 2000";

//education["city"] = "Boca Raton, FL, US";

//$("#main").append(work["position"]);

//$("#main").append(education.name);

var work = {
	"jobs": [{
		"employer" : "AT&T Corp.",
		"title" : "Client Support Specialist",
		"dates" : "August 2000 - Present",
		"location" : "North Palm Beach, FL",
		"description" : "Responsible for qualifying, designing, pricing, contracting and ordering, data (AT&T VPN ((AVPN)), IP, BVoIP, IPFR, IPTF, VDNA), ASE, ADE, strategic, applications services and complex voice (local and long distance) to for AT&T's Signature Client Group Tier 1 and 2A enterprise customers and account teams to support, maintenance and overall customer/ATT experience"
	}]
};

//$('#header').append('<span>' + HTMLworkStart + '</span><hr>');

for ( var i = 0; i < work.jobs.length; i ++ ) {

$("workExperience").append(HTMLworkStart);

//var HTMLworkStart = '<div class="work-entry"></div>';

//var myworkStart = work.workStart;

//var formattedworkStart = HTMLworkStart.replace("work-entry", myworkStart);

//var HTMLworkEmployer = '<a href="#">%data%';

//var HTMLworkTitle = ' - %data%</a>';

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);

var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

$(".work-entry:last").append(formattedEmployer + formattedTitle);

$(".work-entry:last").append(formattedDates);

$(".work-entry:last").append(formattedLocation);

$(".work-entry:last").append(formattedDescription);

}

//var myworkEmployer = work.employer;

//var formattedworkEmployer = HTMLworkEmployer.replace('AT&T Corp.', myworkEmployer);

//$('#header').append('<span>' + HTMLworkEmployer + '</span><hr>');

//var HTMLworkTitle = ' - Client Support Specialist - </a>';

//var myworkTitle = work.title;

//$('#main').append(work.title);

//bio.currentJobposition = "Curent Job Position: Client Support Specialist, ";

//$("#main").append(bio.currentJobposition);

//bio.currentEmployer = "Current Company: AT&T Corp., ";

//$("#main").append(bio.currentEmployer);

//bio.currentYearsWorked = "Current Years w/Company: 16, ";

//$("#main").append(bio.currentYearsWorked);

//bio.city = "Current Job City: North Palm Beach, ";

//$("#main").append(bio.city);

//bio["Education"] = "College: Florida Atlantic University, ";

//$("#main").append(bio.Education);

//bio["YearsAttended"] = "1996 - 2000, ";

//$("#main").append(bio.YearsAttended);

//bio["SchoolCity"] = "College City: Boca Raton";

//$("#main").append(bio.SchoolCity);

var education = {
	
	"schools" : [{
	   
		 "name" : "Florida Atlantic University",
		 "location" : ["Boca Raton, FL"],
		 "degree" : "BS",
		 "major" : "Marketing",
		 "dates" : "1996-2000 -- ",
		 "url" : 'http://fau.edu/'

		}],

	"onlineSchools" : [{

		 "title" : ["Introduction to Programming Nano-Degree"],
		 "school" : "Udacity",
		 "dates" : ["March-September, 2016"],
		 "url" : 'https://www.udacity.com/'
		 //"minor" : "JavaScript",
		 //"graduation year" : "2016",
		 //"Online Courses" : ["Introduction to Programming", "JavaScript Syntax"]
		}]
};

$("#education").append(HTMLschoolStart);

for ( var i = 0; i < education.schools.length; i ++ ) {

var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);

var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

var formattedonlineURL = HTMLonlineURL.replace("%data%", education.schools[i].url);

$(".education-entry:last").append(formattedschoolName + formattedschoolLocation);

$(".education-entry:last").append(formattedschoolDegree);

$(".education-entry:last").append(formattedschoolMajor);

$(".education-entry:last").append(formattedschoolDates);

$(".education-entry:last").append(formattedonlineURL);

}

$("#education").append(HTMLonlineClasses);

for ( var i = 0; i < education.onlineSchools.length; i ++ ) {

$("#education").append(HTMLschoolStart);

var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineSchools[i].school);

var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineSchools[i].title);

var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineSchools[i].dates);

var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineSchools[i].url);

$(".education-entry:last").append(formattedonlineSchool);

$(".education-entry:last").append(formattedonlineTitle);

$(".education-entry:last").append(formattedonlineDates);

$(".education-entry:last").append(formattedonlineURL);

}

var project = {

	"myprojects" : [{ 

		"title" : ["Introduction to Programming Course Projects"],
		"dates" : ["March-September, 2016"],
		"description": ["My projects for the Introduction to Programming Nano-Degree course have included creating and designing my own, personal webite via HTML, creating and running a Mad Libs Generator, creating a movie website, finding my next path to future opportunities and creating this Resume"],
		"image" : ["images/Stage 1_Project Screenshot.png", "images/Stage 2_Project Screenshot.png", "Stage 3_Movie Website Mini Project_Screenshot.png"]
   }]

};

for ( var i = 0; i < project.myprojects.length; i ++ ) {

$("#projects").append(HTMLprojectStart);

var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.myprojects[i].title);

var formattedprojectDates = HTMLprojectDates.replace("%data%", project.myprojects[i].dates);

var formattedprjectDescription = HTMLprojectDescription.replace("%data%", project.myprojects[i].description);

var formattedprojectImage = HTMLprojectImage.replace("%data%", project.myprojects[i].image);

$(".project-entry:last").append(formattedprojectTitle);

$(".project-entry:last").append(formattedprojectDates);

$(".project-entry:last").append(formattedprjectDescription);

$(".project-entry:last").append(formattedprojectImage);

}
