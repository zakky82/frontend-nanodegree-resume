'use strict';

var bio = {
    "name": "Theerasak Boonprajam",
    "role": "Front-end web developer",
    "contacts": {
        "mobile": "+66 84 690 3844",
        "email": "zakk@zakk.me",
        "github": "zakky82",
        "twitter": "@zakkusm",
        "location": "Koh Samui"
    },
    "welcomeMessage": "Hello welcome to my portfolio website",
    "skills": ["HTML", "CSS", "JavaScript", "Adobe Illustrator", "Photoshop"],
    "biopic": "http://s32.postimg.org/jq7jzrwk5/profilepic.jpg"
};

var education = {
    "schools": [{
        "name": "Chiang Mai University",
        "location": "Chiang Mai, Thailand",
        "degree": "BSc",
        "majors": ["Radiologic Technology", "Physical Medical Science"],
        "dates": "2000 - 2004",
        "url": "http://www.cmu.ac.th"
    }, {
        "name": "Saint Martin Colleage of Art and Design",
        "location": "London",
        "degree": "BA",
        "majors": ["Fashion Design Honour", "Fashion Merchandising"],
        "dates": "2005 - 2010",
        "url": "http://www.smca.ac.uk"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Development, Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "http://www.udacity.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Samui Emerald Condominium",
        "title": "Web Development",
        "location": "Bophut, Koh Samui",
        "dates": "2011-2015",
        "description": "Create website for the condominum to help the client communicate with their client and as a hub for booking and checking pregression of the condo."
    }, {
        "employer": "Property Research Thailand",
        "title": "Web Design and Development",
        "location": "Koh Samui,Thailand",
        "dates": "2012 - 2014",
        "description": "Create and develop website for customer to be able to their real estate and communicate with customer."
    }]
};

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "Resigned because sent alas jeez the and much after more groaned some responsible therefore poured convenient flapped iguanodon musically along.",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }]
};

//Display Bio using modular function

bio.display = function() {

    //Formatted Name and Role and prepend to the <h1>

    //Because prepend, what added last is come first, so start from the back

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

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

    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMessage);

    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedImage);

    // Display header and skill in Bio
    $("#header").append(HTMLskillsStart);

    for (var i = 0, length = bio.skills.length; i < length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

// Display work
// move the work into function

work.display = function() {
    work.jobs.forEach(function(job) {
        //create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

    });
};

work.display();
// collect clicks locations

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];

    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

// Display projects using Encapsulating Functions

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

// Display Education

education.display = function() {

    for (var school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
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
        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[school].date);
        $(".education-entry:last").append(formattedDate);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
        $(".education-entry:last").append(formattedURL);

    }
};
education.display();

//Display Maps

$("#mapDiv").append(googleMap);