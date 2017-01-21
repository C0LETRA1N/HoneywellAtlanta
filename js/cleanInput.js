// cleanInput.js
// finds script, links, other injection attacks in comments field and removes them

function cleanInput() {
	var commentInput = document.getElementById("comments").value;
	var scriptRE = /<script>\s+.*+\s<\/script>/;
	var cleanText = commentInput.replace(scriptRE, "");
	return cleanText;
}
