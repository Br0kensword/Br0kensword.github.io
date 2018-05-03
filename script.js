function divToggle(target){
	var showDiv;
	var hideDiv
	if(target == 'about'){
		showDiv = document.getElementById('aboutDiv');
		hideDiv = document.getElementById('projectDiv');
	}
	else{
		showDiv = document.getElementById('projectDiv'); 
		hideDiv = document.getElementById('aboutDiv');
	}

	if(showDiv.style.display == "inline-block"){
		showDiv.style.display = "none";
	}
	else{
		showDiv.style.display = "inline-block";
		hideDiv.style.display = "none";
	}
}


function projectToggle(target){
	var projectImg = document.getElementById('project-img');
	var projectVid = document.getElementById('project-video');
	var projectBlurb = document.getElementById('project-blurb');
	var projectSource = document.getElementById('project-source');
	var link = document.createElement('a');
	var linkText = document.createTextNode("Click Here");
	switch(target){
		case "PCG":
			projectImg.style.display = 'none';
			projectVid.style.display = 'inline-block';
			projectBlurb.textContent = 'The goal of this project was to create randomized 3d mazes for the player to explore. Based on a recursive backtracking version of the growing tree algorithm, the game manager creates a floor plan and adds textured walls and floors, with colonnade doorways and torches and historical Greek and Roman mosaics scattered throughout the level. Other features include a mini-map and rotating player icon to aid in exploration as well as a randomized list of background music, and a player character with FPS style movement. A big thanks to Jasper Flick and his Maze tutorial at Catlike Coding as inspiration.';
			projectVid.pause();
			projectSource.setAttribute("src", "Unity-PCG-Maze.mp4"); 
			projectVid.load();
			projectVid.play();
			break;

		case "Creature":
			projectImg.style.display = 'none';
			projectVid.style.display = 'inline-block';
			projectBlurb.textContent = 'The intent behind this project was to explore a number of utilities in Unity3D including AI pathfinding and movement and the use of Ray Casting to facilitate the spawning of AI controlled NPC’s. The player can navigate the environment using a custom FPS controller and can spawn up to 4 little green Yoshi cubes when targeting the floor. The Yoshi cubes will randomly explore the play space unless summoned by the player which will cause them to rally to the point where the player calls them to, which upon reaching they will continue to move around the environment at will.';
			projectVid.pause();
			projectSource.setAttribute("src", "Yoshi-Cubes.mp4");
			projectVid.load();
			projectVid.play();
			break;

		case "Beer":
			projectImg.style.display = 'inline-block';
			projectVid.style.display = 'none';
			projectBlurb.textContent = 'A Craft Beer recommendation site designed to work in both web browser and Android. Allows users to create a profile and add their beer preferences. Using Machine learning and predictive algorithms Next Beer recommends a new beer to try and tailors its choices based on user ratings. Created using JavaScript and Twitter Bootstrap for the Front end, Python and Flask for the Back end and Android Studio for mobile. Deployed with Heroku. Try it out yourself! ';
			projectImg.setAttribute("src", "nb.png");
			link.appendChild(linkText);
			link.title = "Next Beer";
			link.href = "https://nextbeerback.herokuapp.com/";
			projectBlurb.appendChild(link);
			break; 

		case "Player":
			projectImg.style.display = 'inline-block';
			projectVid.style.display = 'none';
			projectBlurb.textContent = 'An extension for the popular React-Player by Pete Cook, that allows for users to create track lists and gather urls for videos and music from across the web in one convenient place. This is currently a work in progress and future additions include the ability to save and load track lists and providing your own local movie and sound files to be played as well. You can check it out below ';
			projectImg.setAttribute("src", "player.png");
			link.appendChild(linkText);
			link.title = "react player";
			link.href = "react-player-track-demo";
			projectBlurb.appendChild(link);
			break;

		case "NLP":
			projectImg.style.display = 'inline-block';
			projectVid.style.display = 'none';
			projectBlurb.textContent = "Found above is the winning system for UC Santa Cruz's Natural Language Processing competition. The task was to create a question and answer system using machine learning and NLP principles based in the python written NLTK library. The competition composed of both undergraduates and graduate students. My team, consisting of myself and Brian Jones and Amir Shainpur, not only won, but smashed the schools record for F-measure validity which has still not been bested. Check out the winning solution for yourself ";
			projectImg.setAttribute("src", "nlp.png");
			link.appendChild(linkText);
			link.title = "NLP Q&A Bot";
			link.href = "https://github.com/Br0kensword/NLP";
			projectBlurb.appendChild(link);
			break;


	}

}