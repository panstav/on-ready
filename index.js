module.exports = onReady;

function onReady(fn){

	if (document.readyState != 'loading') return fn();

	if (document.addEventListener) return document.addEventListener('DOMContentLoaded', fn);

	document.attachEvent('onreadystatechange', function (){
		if (document.readyState != 'loading') fn();
	});

}