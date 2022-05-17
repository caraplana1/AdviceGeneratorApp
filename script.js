function LoadAdvice(){
	let id = document.getElementById("adviceId")
	let text = document.getElementById("adviceText")

	fetch("https://api.adviceslip.com/advice").then(response => {
		return response.json()
	}).then(advice => {
		var data = advice.slip

		console.log(data)
		// id.innerText = data.slip_id
		// text.innerText = data.advice
	}).catch(error => {
		console.log(error)
	})
}