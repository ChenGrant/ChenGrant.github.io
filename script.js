//toggle nav_bar
function toggle_mobile_menu(){
  if (window.innerWidth<1100){
    var x = document.getElementById("nav_links");
    if (x.style.display == "flex") {
      x.style.display = "none";
    }
    else{
      x.style.display = "flex";
    }
  }
}

//removes nav_mobile_links upon screen resize to full screen
prev_width = window.innerWidth
curr_width = window.innerWidth
$(window).resize(function() {
  curr_width = window.innerWidth
  if (window.innerWidth>1100){
    var x = document.getElementById("nav_links");
    x.style.display = "flex";
  }
  if (curr_width<1100 && prev_width>=1100){
    var x = document.getElementById("nav_links");
    x.style.display = "none";
  }
  prev_width = window.innerWidth
});

$(".nav_bar_container").animate({left: "0%"}, 1000);

$(".home_div").slideUp(0).delay(1000).slideDown(1000);



//progress bar
window.onscroll = function() {progressFunction()};
function progressFunction() {
  var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (windowScroll / height) * 100;
  document.getElementById("progress_bar_front").style.width = scrolled + "%";
}

const math_graphing_calculator = {
  name: 'Math Graphing Calculator',
  description: 'This project consists of a scientific calculator, statistics calculator, graphing and calculus calculator, and trigonometry visualizer. The scientific calculator includes all standard functions alongside additional features such as the prime factorization of a given number. The statistics calculator determines the central tendencies of the input dataset and stores it in a database. As well, this statistics mode determines the PDF and CDF of binomial distribution functions. The graphing calculator graphs functions and the user can control the area of view. The calculus calculator allows for users to find a function’s derivative at a given point or its integral along an interval. Additionally, this calculus mode finds the point of intersection between two functions using binary search. The trigonometry visualizer displays a triangle inside the unit circle along with its angle which acts as an argument for the trigonometric functions.',
  technologies: 'Java',
  gif: "resources/gifs/math_graphing_calculator.gif",
  date_created: 'February 2021',
  video_demo: 'https://youtu.be/6TE4zetqw2Q',
  file: 'https://github.com/ChenGrant/Math-Graphing-Calculator'
};

const sorting_algorithm_visualizer = {
  name: 'Sorting Algorithm Visualizer',
  description: 'This project visualizes selection, insertion, bubble, and merge sort and displays their respective best, average, and worst time complexity.',
  technologies: 'Java',
  date_created: 'May 2021',
  gif: "resources/gifs/sorting_algorithm_visualizer.gif",
  video_demo: 'https://youtu.be/HmFfkNoUAUs',
  file: 'https://github.com/ChenGrant/Sorting-Algorithm-Visualizer'
};

const flappy_bird = {
  name: 'Flappy Bird',
  description: 'This project is a replica of the local, single-player, mobile game ‘Flappy Bird’. The player is tasked with navigating the bird through pairs of pipes that have equally sized gaps placed at random heights. The bird automatically descends and only ascends upon pressing the spacebar. Each successful pass through a pair of pipes awards the player one point. The player wins when 10 points are obtained. Colliding with a pipe or the ground ends the gameplay.',
  technologies: 'Java',
  date_created: 'June 2020',
  gif: "resources/gifs/flappy_bird.gif",
  video_demo: 'https://youtu.be/A1XnEv1kIAI',
  file: 'https://github.com/ChenGrant/Flappy-Bird'
};

const rocket_blaster = {
  name: 'Rocket Blaster',
  description: 'This project is a local, single-player game. The player controls a rocket that can move up, down, left, or right to avoid incoming asteroids. As well, the player can press the spacebar which shoots a laser that destroys all asteroids in its path. One point is awarded for each asteroid destroyed. The more asteroids destroyed, the more that will be created. Asteroids that collide with the rocket will deal damage and the game concludes when all health is lost.',
  technologies: 'Java',
  date_created: 'July 2020',
  gif: "resources/gifs/rocket_blaster.gif",
  video_demo: 'https://youtu.be/YNC-Y-P1vYU',
  file: 'https://github.com/ChenGrant/Rocket-Blaster'
};

const league_of_legends_rendition = {
  name: 'League Of Legends Rendition',
  description: 'This project is a local, double-player game that incorporates characters from the PC game ‘League of Legends’. Each player selects one character from a pool of 3 characters and enters the arena. Each character has an ability that can be aimed at the opponent which deals damage upon the impact of the opponent. The first player to lose all their health loses.',
  technologies: 'Java',
  date_created: 'August 2020',
  gif: "resources/gifs/league_of_legends_rendition.gif",
  video_demo: 'https://youtu.be/cXzxSczQRFA',
  file: 'https://github.com/ChenGrant/League-Of-Legends-Rendition'
};

const chatify = {
  name: 'Chatify',
  description: 'Chatify is a web messaging app that allows for instant messaging, sharing of photos, videos, and other files for group chats. Users log in using a Google account, and authentication is managed using Google Firebase authentication. Once authenticated, users can create group chats to add other users and message them. Many files are supported for sending such as word, png, mp4, ico, etc. Users can see when other users are typing and can also see which users have seen which messages. To the right of a group chat, users can see all members within the group chat and their activity status, all the photos that were sent, and an option to delete a group chat. This website is hosted using Heroku.',
  technologies: 'ReactJS, Google Firebase, ChatEngine.io, Javascript, HTML, CSS, Heroku',
  date_created: 'October 2021',
  gif: "resources/gifs/chatify.gif",
  video_demo: 'https://youtu.be/sMreZfdd69s',
  file: 'https://github.com/ChenGrant/Chatify-Public'
};

const react_meetups = {
  name: 'React Meetups',
  description: 'This project is a responsive website that manages a user’s desired meetup locations. A user can add a meetup along with its title, image, and description via a form. All the meetups are shown under the ‘All Meetups’ tab. These meetups under the ‘All Meetups’ tab are stored using Firebase. As well, users can favorite certain meetups which will appear under the ‘My Favorites’ tab which indicates the number of favorited meetups. The application is deployed using Heroku.',
  technologies: 'ReactJS, Firebase, Heroku, Javascript, HTML, CSS',
  date_created: 'October 2021',
  gif: "resources/gifs/react_meetups.gif",
  video_demo: 'https://youtu.be/n9__0Mlq034',
  file: 'https://github.com/ChenGrant/React-Meetups'
};

let projects = [chatify, react_meetups, math_graphing_calculator,
  sorting_algorithm_visualizer,
  flappy_bird,
  rocket_blaster,
  league_of_legends_rendition]

let curr_project = 1;

function prev_project(){
  curr_project--;
  if (curr_project == 0){
    curr_project = projects.length
  }
  update_slideshow();
}

function next_project(){
  curr_project++;
  if (curr_project == projects.length+1){
    curr_project = 1
  }
  update_slideshow();
}

update_slideshow();

function update_slideshow(){
  let proj_info = projects[curr_project-1];
  $("#project_name").text(proj_info.name);
  $("#project_image").attr("src",proj_info.gif);
  $("#project_description").text("Description: "+proj_info.description);
  $("#project_tech").text("Technologies: "+proj_info.technologies);
  $("#project_demo_video").text(proj_info.video_demo);
  $("#project_demo_video").attr("href", proj_info.video_demo);
  $("#project_date").text("Date Created: "+proj_info.date_created);
  $("#project_github").attr("href",proj_info.file);
}


function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    distanceFromTop = -200;
    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        };
    });
}


document.addEventListener("scroll", scanDocument);
