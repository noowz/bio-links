function switchTheme() {
	const html = document.documentElement;

	html.classList.toggle('lightTheme');
};

document.querySelector('#shareBtn').addEventListener('click', event => {
	try {
		if (navigator.share) {
			navigator.share({
				title: 'Fastxyz | DevLinks',
				url: 'https://fastxyz.github.io/rocketseat-devlinks'
			});

			console.log('You have shared the link successfully!');
		} else {
			alert('Your browser does not support the Web Share API!');
		};
	} catch (error) {
		console.log(`An error occured while using the Web share API!\nError: ${error}`);
	};
});