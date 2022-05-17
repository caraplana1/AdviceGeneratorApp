function LoadAdvice(){
	let id = document.getElementById("adviceID")
	let text = document.getElementById("adviceText")

	fetch("https://api.adviceslip.com/advice").then(response => {
		return response.json()
	}).then(advice => {
		var data = advice.slip

		id.innerText = "advice #" + data.id
		text.innerText = '"' + data.advice + '"'
	}).catch(error => {
		console.log(error)
	})
}