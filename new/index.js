const endpoint = "https://mccsc.api.instructure.com/graphql";
const cors = "no-cors";

function init() {
	console.log(key);
	startTime();
	getAssignments();
}

async function dataPost(body) {
	return (
		await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: key,
			},
			cors: cors,
			body: JSON.stringify({
				query: body,
			}),
		})
	).json();
}

function startTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
	setTimeout(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	} // add zero in front of numbers < 10
	return i;
}

async function getAssignments() {
	let dataRes = await dataPost(
		`query {
			hello
		}`
	);
	console.log(dataRes);
}
