// const today = new Date();
// const tomorrow = new Date(23);

// const date = new Date(date.getTime() + 24 * 60 * 60 * 1000);

var end = new Date();
end.setHours(23,59,59,999);


// tomorrow.setDate(tomorrow.getDate());

let flipdown = new FlipDown(end / 1000);

flipdown.start();
flipdown.ifEnded(() => {
 	tomorrow.setDate(tomorrow.getDate() + 1)
	flipdown = new FlipDown(tomorrow);
});