"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

	const rss = new RSS(
	    document.querySelector("#rss-feeds"),
	    //Change this to your own rss feeds
        "https://feeds.feedburner.com/TechCrunch/startups",
	    {
		     // how many entries do you want?
		    // default: 4
		    // valid values: any integer
		    limit: 3,
		    
		    
		    // will request the API via https
			// default: false
			// valid values: false, true
			ssl: true,
		  
			 // outer template for the html transformation
			// default: "<ul>{entries}</ul>"
			// valid values: any string
			layoutTemplate: "<div class='items'>{entries}</div>",
		
			// inner template for each entry
			// default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
			// valid values: any string
			entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',
		    
	    }
	);
	rss.render();

    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "IonicaBizau", { responsive: true });
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "mdo", selector: "#ghfeed" });


//___________________________________________ DYNAMIC TYPING _______________________________________________
	const element = document.querySelector('.desc');
	const texts = ["Data Science", "AI /ML Developer"];
	let currentTextIndex = 0;
	let charIndex = 0;
	
	function type() {
	  if (charIndex < texts[currentTextIndex].length) {
		element.textContent += texts[currentTextIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, 80); // Typing speed
	  } else {
		setTimeout(erase, 500); // Pause before erasing
	  }
	}
	
	function erase() {
	  if (charIndex > 0) {
		element.textContent = texts[currentTextIndex].substring(0, charIndex - 1);
		charIndex--;
		setTimeout(erase, 30); // Erasing speed
	  } else {
		currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
		setTimeout(type, 80); // Pause before typing the next text
	  }
	}
	
	// Start the typing effect
	type();
//_____________________________________________________________________________________________