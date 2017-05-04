
var bio={
	"name":"Jan-Henrik",
	"role":"ongoing Web Developer",
	"contacts":{
		"mobile":"01714307440",
		"email":"Jan.H.Burre@gmail.com",
		"github":"jburre",
		"twitter":"",
		"blog":"",
		"location":"Bad Salzuflen"
	},
	"welcomeMessage":"Thank you for the music, the songs I'm singing/ Thanks for all the joy they are bringing",
	"skills": ["music", "reading", "drawing", "sleeping", "watching movies"],
	"bioPic":"images/fry.jpg",
	"work":{
		"position":"trainee",
		"employer":"Comcave",
		"years_of_work":5,
		"work_dates":"September 2016 - Today",
		"city":"Hannover",
		"description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
	},
	"education":{
		"last_school":"FH Lübeck",
		"years_attended":2,
		"city":"Lübeck"
	},
	"projects":{
		"title":"Sample",
		"dates":"XXXX - YYYY",
		"description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		"imageURL":"images/fry.jpg"
	}
};

//contacts and general details
var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);
var mob=HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(mob);
var mail=HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(mail);
var twit=HTMLemail.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(twit);
var git=HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(git);
var loc=HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(loc);

//pics, general message
var pic=HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(pic);
var welcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
//skills
$("#header").append(welcome);
$("#header").append(HTMLskillsStart);

for (skill in bio.skills){
	if (!(bio.skills[skill]==="" || bio.skills[skill]==null)){
		var formattedSkill=HTMLskills.replace("%data%",bio.skills[skill])
		appendStuff("#skills",formattedSkill);		
	}
}

//work experiences
//$("#workExperience").append(HTMLworkStart);
function appendWork(){
	appendStuff("#workExperience",HTMLworkStart);
	var workFormater=[HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation,HTMLworkDescription];
	var workData=[];
	workData.push(bio.work.employer);
	workData.push(bio.work.position);
	workData.push(bio.work.work_dates);
	workData.push(bio.work.city);
	workData.push(bio.work.description);
	console.log(workData[0]);
	for(i=0; i<workFormater.length;i++){
		appendMoreStuff(".work-entry", workFormater[i], workData[i]);
	}
}

appendWork();

//Projects
$("#projects").append(HTMLprojectStart);
$(".project-entry").append(HTMLprojectTitle.replace("%data%",bio.projects.title));
$(".project-entry").append(HTMLprojectDates.replace("%data%",bio.projects.dates));
$(".project-entry").append(HTMLprojectDescription.replace("%data%",bio.projects.description));
$(".project-entry").append(HTMLprojectImage.replace("%data%",bio.projects.imageURL));
$(".project-entry").append(HTMLprojectImage.replace("%data%",bio.projects.imageURL));

function appendMoreStuff(HTMLelement, format, data){
	$(HTMLelement).append(format.replace("%data%", data));
}
function appendStuff(HTMLelement, format){
	$(HTMLelement).append(format);
}