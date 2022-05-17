function LoadAdvice(){
	let id = document.getElementById("adviceID")
	let text = document.getElementById("adviceText")

	fetch("https://api.adviceslip.com/advice").then(response => {
		return response.json()
	}).then(advice => {
		var data = advice.slip

		id.innerText = "A D V I C E  #" + data.id
		text.innerText = '"' + data.advice + '"'
	}).catch(error => {
		console.log(error)
	})
}