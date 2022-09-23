const keysdown = [];
window.addEventListener('keydown',(event) => {
	if (keysdown.indexOf(event.which) === -1) {
		keysdown.push(event.which)		
	};
});
window.addEventListener('keyup',(event) => {
	const key = event.which;
	const index = keysdown.indexOf(key);
	keysdown.splice(index,1);
});
const isKeyDown = (key) => {
	//*
	if (typeof(key) === 'string') {
		//only for letters
		key = key.charCodeAt(0)-(97-65);
		if (key < 65 || key > 90) {
			return undefined;
		}
	}//*/
	const index = keysdown.indexOf(key);
	if (index > -1) {
		return true;
	} else {
		return false;
	}
}