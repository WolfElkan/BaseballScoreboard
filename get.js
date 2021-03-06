function sanitize(str) {
	return str.replace(/%20/g,'&nbsp;')
	return str.replace(/\+/g,'&nbsp;')
}

function getparams() {
	var search = window.location.search
	if (search[0] == '?') {search = search.substring(1)}
	if (!search) {return {}}
	var params = search.split('&')
	var object = {}
	for (var i = 0; i < params.length; i++) {
		let pair = params[i].split('=')
		let key = pair[0]
		let val = sanitize(pair[1])
		object[key] = val
	}
	return object
}

const GET = getparams()