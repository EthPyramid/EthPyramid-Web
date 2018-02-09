// RANDOM QUOTES FOR ETHPYRAMID
// no one cares about copyright, tenmei 2018
//
// use id 'quoteDisplay' and call newQuote() to pull a random string

var quotes = [
	'Built upon the pyres of our life savings lost to the ether.',
	'Powered by 1,600 JUST\'d Ethereum.',
	'What better place to put your child\'s college fund?.',
	'Just like social security. But slightly safer.',
	'If your money is in here, it can\'t get funneled to ISIS.',
	'Powered by beautiful, clean coal.',
	'Now mineable in Minecraft.',
	'What the fuck else are you going to do?',
	'Press ffffffffffffffffffffffffffffffffffff to donate respects (and receive ether).',
	'Bitconnect? Tronix? Hold my beer.',
	'Don\'t ffffffffffffffffffffffffffffffffffff me bro.',
	'It\'s almost like nothing you\'ve almost not seen before.',
	'Now you can lose money buying and selling.',
	'If Fast and Furious can do seven iterations, we can\'t we?',
	'Proof of sore hands.',
	'Smart contract designed and audited by the most honest people you\'ll never identify or meet.',
	'We guarantee to provide no guarantees.',
	'Because it worked so well for you last time.',
	'As safe as keeping your savings in banks circa 2007.',
	'Putting the fun back into reverse funnel.',
	'232 whale tested, 232 whale approved.',
	'Let\'s face it. You\'d be happy with a Honda at this point.',
	'Over 232 satisfied customers.',
	'Look down. Shadows stay on the floor.',
	'What\'s the point of having fuck it money if you never say fuck it?',
	'Remember that you won\'t be paying taxes, you\'ll be paying fines.',
	'Worth more than one United States Dollar.',
	'EthPyramid 2: EthPyramid Forever.',
	'EthPyramid: the gift that won\'t give.',
	'Great team, amazing team. I worked with team on many such projects! - Vitalik Skelly Money',
	'You don\'t understand any of this.',
	'Don\'t lie, we know you haven\'t read the smart contract.',
	'What\'s a smart contract?',
	'Great team, good roadmap, big sneks.',
	'Where the backdoor is in the front.',
	'Micro-dolphins welcome too.',
	'Buy high, sell low.',
	'Alt-f4 for a free coin.',
	'Let us know if you see a TX for 866 ETH.',
	'If you don\'t become the whale, you might have to fuck one.',
	'Get rich quick, lose it all even quicker.',
	'Competitive interest rates.',
	'Past performance is not indicative of future results.',
	'Look for our ad in the upcoming edition of Cosmo.',
	'Stably unstable.',
	'An ether a day keeps the IRS away.',
	'232 tokens of ETH on the chart, 232 tokens of ETH, take one down, trade it around... 1 token of ETH on the chart.',
	'The world is not anymore the way it used to be! Mmmm, no, no, no!',
	'It\'s a reverse funnel system!',
	'You\'re like, a berry salesman now?',
	'Some people say it\'s better than busting a nut.',
	'Ain\'t nothing like original flavor.',
	'Here lies Ponzibot. Rest in peace.'
]

function newQuote() {
	var rand = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[rand];
}
