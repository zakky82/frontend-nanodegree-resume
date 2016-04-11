var bio = {
    "name" : "Theerasak Boonprajam",
    "role" : "Front-end web developer",
    "welcomeMessage" : "Hello welcome to my portfolio website",
        "contact" : {
        "mobie number" : "0846903844",
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
        "date" : "2000",
        "url" : "http://www.cmu.ac.th"
    },
    {
        "name" : "Saint Martin Colleage of Art and Design",
        "location" : "London",
        "degree" : "BA",
        "major" : "Fashion Design Honour",
        "date" : "2020",
        "url" : "http://www.smca.ac.uk"
    }],
    "onlineCourses" : [{
        "title" : "Front-end Web Development, Nanodegree",
        "school" : "Udacity",
        "date" : "February 2016",
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

var project = {
    "projects" : [{
        "title" : "Sample Project 1",
        "date" : "2014",
        "description" : "When I was 28 I fall in love with a guy who is came to me as a guest. The first time I lay my eyes on him I feel like the whole world is blur and like feeling in the fantasy world.",
        "images" : ["http://placeholder.it","http://placeholder.it","http://placeholder.it"]
        },
        {
        "title" : "Sample Project 2",
        "date" : "2015",
        "description" : "When I was 28 I fall in love with a guy who is came to me as a guest. The first time I lay my eyes on him I feel like the whole world is blur and like feeling in fantasy world.",
        "images" : ["http://placeholder.it", "http://placeholder.it", "http://placeholder.it"]
        }]
};

//Formatted Name and Role and prepend to the <h1>

//Because prepend, what added last is come first, so start from the back
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);


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

for (job in work.jobs) {
    // create new div for work experience
    $("#.workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $("#.work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

}





























