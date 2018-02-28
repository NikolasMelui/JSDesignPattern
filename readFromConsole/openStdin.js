let stdin = process.openStdin();

stdin.addListener('data', enter => {
	let stdin = enter.toString().trim();
	if (stdin == 'exit') process.exit(0);
	console.log(`You entered: ${stdin}`);
});
