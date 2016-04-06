/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // var awesomeThoughts = "I am Zakk and I am AWESOME!";
// console.log(awesomeThoughts);

//var funThoughts=awesomeThoughts.replace("AWESOME","FUN");

// $("#main").append(funThoughts);
//var name = "Zakk Theerasak";
//var role = "Web Developer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#main").prepend(formattedRole);
//$("#main").prepend(formattedName);

//var skills = ["awesomeness", "programming", "teaching", "JS"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//var bio = {
//    "name" : "James",
//    "age" : 32,
//    "skills" : skills
//};

//$("#main").append(bio.name);

//var bio = {
//    "name" : "Theerasak",
 //   "role" : "Front-end Web Developer",
//    "contactInfo" : "Koh Samui Thailand",
 //   "pictureUrl" : "images/me.jpg",
//    "welcomeMessage" : "Howdy",
//    "skills" : "happy"
//};

//$("#main").append(bio);
    var work = {
       "jobs" : [
           {
            "employer" : "Samui Emerald Condominium",
            "title" : "Main Website",
            "ocation" : "Bophut, Koh Samui",
            "date" : "2011-2015",
            "description" : "Create website for the condominum to help the client communicate with their client and as a hub for booking and checking pregression of the condo."
           },
           {
             "employer" : "Property Research Thailand",
             "title" : "Main website of Property Research Thailand",
             "location" : "Koh Samui,Thailand",
             "date" : "2012-2014",
             "description" : "Create and develop website for customer to be able to their real estate and communicate with customer."
           }
        ]
    }

    var project = {
       "projects" : [
            {
            "title" : "Sample Project 1",
            "date" : "2014",
            "description" : "When I was 28 I fall in love with a guy who is came to me as a guest. The first time I lay my eyes on him I feel like the whole world is blur and like feeling in the fantasy world.",
            "images" : ["http://placeholder.it",
                        "http://placeholder.it",
                        "http://placeholder.it"]
            },
            {
            "title" : "Sample Project 2",
            "date" : "2015",
            "description" : "When I was 28 I fall in love with a guy who is came to me as a guest. The first time I lay my eyes on him I feel like the whole world is blur and like feeling in fantasy world.",
            "images" : ["http://placeholder.it",
                        "http://placeholder.it",
                        "http://placeholder.it"]
            }
        ]
    }

    var bio = {
        "name" : "Theerasak Boonprajam",
                "role" : "Front-end web development",
                "welcomeMessage" : "Hello welcome to my portfolio website",
                "contact" : {
                   "mobie number":"0846903844",
                    "email" : "zakk@zakk.me",
                    "github" : "zakky82",
                    "twitter" : "@zakkusm",
                    "location" : "Koh Samui"
                },
                "skills" : [
                   "HTML", "CSS", "JavaScript", "Adobe Illustrator", "Photoshop"
                ],
            }

    var education = {
       "schools" : [
            {
                "name" : "Chiang Mai University",
                "location" : "Chiang Mai, Thailand",
                "degree" : "BSc",
                "major" : "Radiologic Technology",
                "date" : "2000",
                "url" : "http://www.cmu.ac.th",
            },
            {
                "name" : "Saint Martin Colleage of Art and Design",
                "location" : "London",
                "degree" : "BA",
                "major" : "Fashion Design Honour",
                "date" : "2020",
                "url" : "http://www.smca.ac.uk",
            }
        ],
        "onlineCourses" : [
            {
                "title" : "Front-end Web Development, Nanodegree",
                "school" : "Udacity",
                "date" : "February 2016",
                "url" : "http://www.udacity.com"
            }
        ]
    }

    function inName(name) {
        name = name.trim().split(" ");
        console.log(name);
        name[1] = name[1].toUpperCase();
        name[0] = name[0].slice(0,1).toUpperCase() +
           name[0].slice(1).toLowerCase();

        return name[0] +" "name[1];
    }

    $('#main').append(internationalizeButton);

    projects.display() = function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry: last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry: last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry: last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last".append(formattedImage);
                }
            }
        }






























