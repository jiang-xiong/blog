var r = new XMLHttpRequest()
r.open('GET', '/login', true)
r.onreadystatechange = function() {
    if(r.readyState == 4) {
        console.log('请求成功', r.responseText.length)
    }
}
r.send()

var r = new XMLHttpRequest()
r.open('POST', '/login', true)
r.setRequestHeader('Content-Type', 'application/json')
r.onreadystatechange = function() {
    if (r.readyState === 4) {
        var response = JSON.parse(r.response)
    }
}
var account = {
    username: 'user',
    password: '123',
}
var data = JSON.stringify(account)
r.send(data)
