/**
 * 
 */

/** to set the dark and light theme for admin webpages */
const body = document.querySelector("body"),
    sidebar = body.querySelector(".side-bar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
	
	toggle.addEventListener("click",()=>{
		sidebar.classList.toggle("close");
	});
	
	modeSwitch.addEventListener("click",()=>{
		body.classList.toggle("dark");
		
		if(body.classList.contains("dark")){
			modeText.innerText = "Light Mode"
		}
		else{
			modeText.innerText = "Dark Mode"
		}
	});