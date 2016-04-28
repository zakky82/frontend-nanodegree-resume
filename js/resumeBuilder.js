var bio = {
    "name" : "Theerasak Boonprajam",
    "role" : "Front-end web developer",
    "welcomeMessage" : "Hello welcome to my portfolio website",
    "contacts" : {
        "mobile" : "+66 84 690 3844",
        "email" : "zakk@zakk.me",
        "github" : "zakky82",
        "twitter" : "@zakkusm",
        "location" : "Koh Samui"
        },
    "skills" : ["HTML", "CSS", "JavaScript", "Adobe Illustrator", "Photoshop"],
    "bioPic" : "images/profilepic.jpg"
};

var education = {
    "schools" : [{
        "name" : "Chiang Mai University",
        "location" : "Chiang Mai, Thailand",
        "degree" : "BSc",
        "major" : "Radiologic Technology",
        "dates" : "2000",
        "url" : "http://www.cmu.ac.th"
    },
    {
        "name" : "Saint Martin Colleage of Art and Design",
        "location" : "London",
        "degree" : "BA",
        "major" : "Fashion Design Honour",
        "dates" : "2010",
        "url" : "http://www.smca.ac.uk"
    }],
    "onlineCourses" : [{
        "title" : "Front-end Web Development, Nanodegree",
        "school" : " Udacity",
        "dates" : "February 2016",
        "url" : "http://www.udacity.com"
    }]
};

var work = {
    "jobs" : [{
        "employer" : "Samui Emerald Condominium",
        "title" : "Web Development",
        "location" : "Bophut, Koh Samui",
        "dates" : "2011-2015",
        "description" : "Create website for the condominum to help the client communicate with their client and as a hub for booking and checking pregression of the condo."
        },
        {
        "employer" : "Property Research Thailand",
        "title" : "Web Design and Development",
        "location" : "Koh Samui,Thailand",
        "dates" : "2012-2014",
        "description" : "Create and develop website for customer to be able to their real estate and communicate with customer."
        }]
};

var projects = {
    "projects" : [{
        "title" : "Sample Project 1",
        "dates" : "2014",
        "description" : "When I was 28 I fall in love with a guy who is came to me as a guest. The first time I lay my eyes on him I feel like the whole world is blur and like feeling in the fantasy world.",
        "images" : ["images/197x148.gif","images/197x148.gif"]
        }]
};

//Formatted Name and Role and prepend to the <h1>

//Because prepend, what added last is come first, so start from the back
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

// Display Contact
//$("#topContacts").append(HTMLcontactGeneric);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts, #footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts, #footerContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts, #footerContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts, #footerContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts, #footerContacts").append(formattedLocation);

 var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
   $("#header").append(formattedPic);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcomeMessage);


// Display header and skill in Bio

if(bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);

   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
   $("#skills").append(formattedSkill);

   formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

   formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

   formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
   $("#skills").append(formattedSkill);

}



// Display work

// move the workj into function
function displayWork() {

for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    }
};

displayWork();

// collect clicks locations

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
    }
    return locationArray;
}

// Display projects using Encapsulating Functions

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

// Display Education

education.display = function() {

    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
        $(".education-entry:last").append(formattedDegree);
    }
        $("#education").append(HTMLonlineClasses);

    for (school in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
        $(".education-entry:last").append(formattedURL);

    }
}
education.display();

//Display Maps

$("#mapDiv").append(googleMap);






















