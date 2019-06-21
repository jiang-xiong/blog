var log = console.log.bind(console)

var ensureEqual = function(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

var e = function(selector) {
    return document.querySelector(selector)
}

var appendHtml = function(element, html) {
	element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}

var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for(var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

var find = function(element, selector) {
    return element.querySelector(selector)
}

var join = function(delimiter, array) {
    var s = array[0]
    for (var i = 1; i < array.length; i++) {
        var a = array[i]
        s += (delimiter + a)
    }
    return s
}
var split = function(s, delimiter) {
    var l = []
    var space = delimiter.length
    var start = 0
    for(var i = 0; i < s.length; i++) {
        if(s.slice(i, i+space) === delimiter) {
            l.push(s.slice(start, i))
            start = i + space
        }
    }
    l.push(s.slice(start))
    return l
}
var replaceAll = function(s, old, newString) {
    var s1 = split(s, old)
    var s2 = join(newString, s1)
    return s2
}

var zfill = function(n, width) {
  // zfill(1, 4) === '0001'
   var str = String(n)
   var len = str.length
   var num_zero = width - len
   var zeros = []
   if (num_zero > 0) {
       for (var i = 0; i < num_zero; i++) {
           zeros = zeros + '0'
       }
       str = zeros + str
   }
   return str
}

var ljust = function(s, width, fillchar=' ') {
  // ljust('gua', 5, '*') === 'gua**'
    var str = String(s)
    var len = str.length
    var num_zero = width - len
    var zeros = []
    if (num_zero > 0) {
        for (var i = 0; i < num_zero; i++) {
            zeros = zeros + fillchar
        }
        str = str + zeros
    }
    return str
}
var rjust = function(s, width, fillchar=' ') {
  // rjust('gua', 5, '*') === '**gua'
    var str = String(s)
    var len = str.length
    var num_zero = width - len
    var zeros = []
    if (num_zero > 0) {
        for (var i = 0; i < num_zero; i++) {
            zeros = zeros + fillchar
        }
        str = zeros + str
    }
    log(str)
    return str
}
var center = function(s, width, fillchar=' ') {
  // center('gua', 5, '*') === '*gua*'
    var str = String(s)
    var len = str.length
    var num_zero = width - len
    if (num_zero > 0) {
        if (num_zero % 2 == 0) {
            num_l = num_zero / 2 + len
            num_r = width
        } else {
            num_l = num_zero / 2 + len + 0.5
            num_r = width
        }
        log(num_l, num_r)
        str = ljust(str, num_l, fillchar)
        str = rjust(str, num_r, fillchar)
    }
    log(str)
    return str
}

var is_space = function(s) {
    var a = String(s[0])
    var bo = a.includes(" ")
    for (var i = 1; i < s.length; i++) {
        if (bo) {
        bo = s[i].includes(" ")
        log(s[i], bo)
        }
    }
    return(bo)
}

var is_digit = function(s) {
    var str = String(s)
    var bo = true
    for (var j = 0; j < str.length; j++) {
        if (bo) {
            for (var i = 0; i < 10; i++) {
                var a = str[j]
                bo = a.includes(i)
                if (bo) {break}
                log(a, bo)
            }
        }
    }
    log(bo)
    return bo
}

var strip_right = function(s) {
    var num = 0
    var len = s.length
    for (var i = len - 1; i > -1; i--) {
        if (s[i] != " ") {
            num = i + 1
            //log(num)
            break
        }
    }
    var str = s.slice(0, num)
    //log(str)
    return str
}
var strip_left = function(s) {
    var num = s.length
    for (var i = 0; i < s.length; i++) {
        if (s[i] != " ") {
            num = i
            //log(num)
            break
        }
    }
    var str = s.slice(num)
    //log(str)
    return str
}
var strip = function(s) {
    var str = strip_right(strip_left(s))
    log(s)
    return str
}

var save = function(array) {
  var s = JSON.stringify(array)
  localStorage.todos = s
}
var load = function() {
  var s = localStorage.todos
  return JSON.parse(s)
}

var now = function() {
  // 时间标准库
  // 常用用法如下
  // var d = new Date()
  // d.getFullYear()
  // 年份, 2016
  // d.getMonth()
  // 月份, 0-11
  // d.getDate()
  // 日期, 1-31
  // d.getHours()
  // 小时, 0-23
  // d.getMinutes()
  // 分钟, 0-59
  // d.getSeconds()
  // 秒数, 0-59
  // d.getMilliseconds()
  // 毫秒, 0-999
  // d.getDay()
  // 星期几, 0-6

  var d = new Date()
  var nm = d.getFullYear()
  var yt = d.getMonth() + 1
  var ri = d.getDate()
  var ui = d.getHours()
  var ff = d.getMinutes()
  var mc = d.getSeconds()

  return `${nm}/${yt}/${ri} ${ui}:${ff}:${mc}`
}

var startsWith = function(s1, s2) {
  // 'starts_with', startsWith('guagua', 'gua')
    var start = s1.slice(0, s2.length)
    log(start)
    if (start == s2) {
        return true
    } else {
        return false
    }
}

var findIn = function(s1, s2) {
  // findIn('gua-nihk', 'a') == 2
    for (var i in s1) {
        // log(s1[i], s2)
        if (s1[i] == s2) {
            return i
        }
    }
    return -1
}

var findAllIn = function(s1, s2) {
  // log('find all', findAllIn('10121320', '1'))
  // find all [0, 2, 4]
    var result = []
    for (var i in s1) {
        // log(s1[i], s2)
        if (s1[i] == s2) {
            result.push(i)
        }
    }
    log(result)
    return result
}

var findAllString = function(s1, s2) {
  // log('find all str', findAllString('1012100120', '10'))
  // find all [0, 4]
    var s = []
    var len2 = s2.length
    for (var i in s1) {
        if (s2 == s1.slice(i, Number(i)+len2)) {
            s.push(i)
        }
    }
    log(s)
    return s
}

var endsWith = function(s1, s2) {
  // endsWith('abcde', 'de')
    var len2 = s2.length
    var len1 = s1.length
    var end = s1.slice(len1 - len2)
    if (end == s2) {return true}
    else {return false}
    log(end)
}

var top1 = function(student_list) {
    var result = student_list[0]
    for (var x of student_list) {
        if (x.score > result.score) {
            result = x
        }
    }
    return result
}
var student_list = [
    {
        'name': 'gua1',
        'sex': '男',
        'score': 627,
    },
    {
        'name': 'gua2',
        'sex': '男',
        'score': 99,
    },
    {
        'name': 'gua3',
        'sex': '男',
        'score': 199,
    },
    {
        'name': 'gua4',
        'sex': '男',
        'score': 299,
    },
    {
        'name': 'gua5',
        'sex': '男',
        'score': 499,
    },
]

var formated_weekday = function(day) {
    var wfzi = ['','一','二','三','四','五','六','七']
    return ('星期' + wfzi[day])
}

var discount = function(price, grade) {
    var dis = [10,5,6,7,8,9]
    var gra = [undefined,'小学生','初中生','高中生','大学生','研究生']
    var result = price
    for(var i in gra) {
        // i = Number(i)
        // log(gra[i],dis[i])
        if(gra[i] == grade) {
            result = price*dis[i]/10
            log(result)
            return result
        }
    }
}

var capString = function(str) {
    var lowCap = `abcdefghijklmnopqrstuvwxyz`
    var upCap = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    var result = ``
    var nextSp = true
    for (var i = 0; i < str.length; i ++) {
        for (var j = 0; j < upCap.length; j ++) {
            if (str[i] == lowCap[j] || str[i] == upCap[j]) {
                if (nextSp) {
                    result += upCap[j]
                } else {
                    result += lowCap[j]
                }
                nextSp = false
                }
            }
            if (str[i] == ' ') {
                result += ' '
                nextSp = true
        }
    }
    return result
    /*
    给定一个英文句子 str（一个只有字母的字符串）
    返回「将句中所有单词变为有且只有首字母大写的形式」的 string
    */
}

var letterCount = function(str) {
      /*
      给定一个只包含字母的字符串，返回单个字母出现的次数
      考察字典的概念和使用
      返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

      // 可以使用 Object.keys 函数
      var obj = {
        foo: 1,
        bar: 2,
      }
      Object.keys(obj)
      ["foo", "bar"]

      参数 "hello"
      返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
      */
    var obj = {}
    var letter = `abcdefghijklmnopqrstuvwxyz
                ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    for (var i = 0; i < letter.length; i++) {
        for (var j = 0; j < str.length; j ++) {
            if (letter[i] == str[j]) {
                if (obj[`${letter[i]}`] == undefined){
                    obj[`${letter[i]}`] = 1
                } else {obj[`${letter[i]}`] += 1}
            }
        }
    }
    // log(obj)
    var i = 0
    var result = []
    // for (var letterName in obj) {
    //     result[i] = [`${letterName}`, obj[`${letterName}`]]
    //     i++
    // }
    // 不用for in 的方法
    for (var i = 0; i < letter.length; i ++) {
        if (obj[`${letter[i]}`] != undefined) {
            var letterName = letter[i]
            result.push([`${letterName}`, obj[`${letterName}`]])
        }
    }
    // log(result)
    return result
}

var queryFromObject = function(param) {
  /*
  param 是一个 object
  例子如下
  param 是 {
      'foo': 1,
      'bar': 'far',
  }
  返回如下 string, 顺序不做要求(foo bar 的顺序)
  foo=1&bar=far

  注意, 使用 Object.keys 函数
  */
    var name = Object.keys(param)
    var value = []
    for (var i = 0; i < name.length; i++) {
        value[i] = param[`${name[i]}`]
    }
    var result = ''
    for (var i = 0; i < name.length; i++) {
        result += `${name[i]}=${value[i]}&`
    }
    result = result.slice(0, result.length - 1)
    // log(result)
    return result
}

var argsFromQuery = function(queryString) {
  /*
  queryString 是一个 string
  例子如下
  queryString 是 foo=1&bar=far
  返回如下 object, 顺序不做要求(foo bar 的顺序)
  {
      'foo': 1,
      'bar': 'far',
  }
  */
    var subStr = []
    var j = 0
    var len = queryString.length
    for (var i = 0; i < len; i++) {
        // log(queryString[i])
        if ((queryString[i] == '=') || (queryString[i] == `&`)) {
            subStr[j] = queryString.slice(0, i)
            queryString = queryString.slice(i+1)
            // log(subStr[j], queryString)
            j++
            i = 0
        }
    }
    subStr[j] = queryString
    var objStr = {}
    for (var i = 0; i < subStr.length / 2; i++) {
        objStr[`${subStr[i*2]}`] = `${subStr[i*2 + 1]}`
    }
    // log(objStr)
    return objStr
}

var ajax = function(request) {
  /*
  request 是一个 object, 有如下属性
  method, 请求的方法, string
  url, 请求的路径, string
  data, 请求发送的数据, 如果是 GET 方法则没这个值, string
  callback, 响应回调, function
  var r = {
      method: 'POST',
      url: '/login',
      data: 'username=gua',
      callback: function(response) {
          console.log('响应', response)
      }
  }  */
    var a = new XMLHttpRequest()
    a.open(request.method, request.url, true)
    a.setRequestHeader('Content-Type', 'application/json')
    a.onreadystatechange = function () {
        request.callback()
    }
    a.send( request.data)
}

var log = function() {
    console.log.apply(console, arguments)
}
var int = function(bin) {
    bin = Number(bin)
    // log(bin)
    var result = 0
    for (var i = 0; i < 8; i++) {
        var num = bin % 10
        // console.log(num)
        bin = Math.floor(bin / 10)
        result = result + num * Math.pow(2, i)
    }
    return result
}
var zfill = function(n, width) {
   var str = String(n)
   var len = str.length
   var num_zero = width - len
   var zeros = []
   if (num_zero > 0) {
       for (var i = 0; i < num_zero; i++) {
           zeros = zeros + '0'
       }
       str = zeros + str
   }
   // log(str)
   return str
}
var binary = function(n) {
    var num = 0
    var result = 0
    for (var i = 0; i < 8; i++) {
        num = n % 2
        n = Math.floor(n / 2)
        result = result + num * Math.pow(10, i)
    }
    result = zfill(result, 8)
    return result
}
var binaryStream = function(s) {
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var cell = binary(s.charCodeAt(i))
        result = result + cell
    }
    return result
}
var base64Encode3 = function(s) {
    var result = ''
    for (var i = 0; i < 3; i++) {
        var bin = binary(s.charCodeAt(i))
        result = result + bin
    }
    var codeOrder = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    var baseStr = ''
    for (var i = 0; i < 4; i++) {
        var baseCode = result.slice (i*6, i*6+6)
        baseCode = int(baseCode)
        for (var j = 0; j < codeOrder.length; j++) {
            if (j == baseCode) {
                var baseChar = codeOrder[j]
                baseStr = baseStr + baseChar
            }
        }
    }
    // console.log(baseStr)
    return baseStr
}
var base64Encode = function(s) {
    var result = ''
    for (var i = 0; i < Math.floor(s.length / 3) + 1; i++) {
        var s3 = s.slice(i*3, i*3+3)
        result = result + base64Encode3(s3)
    }
    var res = s.length % 3
    var resStr = ['', '==', '=']
    return result + resStr[res]
}
base64Encode('ManManM')
    /*
    s 是一个 string
    返回 s 的 base64 编码

Base64是一种基于 64 个可打印字符来表示数据的方法
它用每6个比特为一个单元，对应某个可打印字符
ASCII 码一个字符是 8 比特, 也就是一字节
3 个字节就有 24 个比特, 对应了 4 个 base64 单元

如下所示
原始信息        M        a        n
ASCII         77       97        110
二进制         01001101 01100001 01101110
4 个单元       010011 010110 000101 101110
每个单元转换后  19  22  5  46

转换后每个 base64 单元都是一个 0-63 的数字
因为 6 比特表示的范围就是这么大
然后数字到字符串的转换是下面这段字符串取下标所得
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

那么 Base64 编码结果就是    T   W   F  u

所以 base64Encode('Man') 返回 'TWFu'


既然 3 个字节转换为 4 个 base64 单元
那么 1 个字节怎么办呢?
答案是用 0 补出 3 字节, 如下所示
原始信息    M
ASCII     77       0        0
二进制     01001101 00000000 00000000
4 个单元   010011 010000 000000 000000
单元转换后  19 16 0 0
因为末尾是强行补上的, 所以给他用 '=' 凑出字符(这是一个例外)
所以 base64Encode('M') 返回 'TQ=='
    */

var int = function(bin) {
    bin = Number(bin)
    // log(bin)
    var result = 0
    for (var i = 0; i < 8; i++) {
        var num = bin % 10
        // console.log(num)
        bin = Math.floor(bin / 10)
        result = result + num * Math.pow(2, i)
    }
    return result
}
var zfill = function(n, width) {
   var str = String(n)
   var len = str.length
   var num_zero = width - len
   var zeros = []
   if (num_zero > 0) {
       for (var i = 0; i < num_zero; i++) {
           zeros = zeros + '0'
       }
       str = zeros + str
   }
   // log(str)
   return str
}
var binary = function(n) {
    var num = 0
    var result = 0
    for (var i = 0; i < 6; i++) {
        num = n % 2
        n = Math.floor(n / 2)
        result = result + num * Math.pow(10, i)
    }
    result = zfill(result, 6)
    return result
}
var base64Decode = function(s) {
    var codeOrder = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    s.replace('=', 'A')
    // console.log(s)
    var results = ''
    for (var i = 0; i < Math.floor(s.length / 4); i++) {
        var result = ''
        var s4 = s.slice(i*4, i*4+4)
        // console.log(s4)
        var codeStr = ''
        for (var j = 0; j < 4; j++) {
            for (var k = 0; k < codeOrder.length; k++) {
                if (codeOrder[k] == s4[j]) {var code = k}
            }
            code = binary(code)
            codeStr = codeStr + code
            // console.log(code)
        }
        for (var k = 0; k < 3; k++) {
            var code = codeStr.slice(k*8, k*8+8)
            var str = String.fromCharCode(int(code))
            // console.log(code, str)
            result = result + str
        }
        // console.log('result', result)
        results = results + result
    }
    return results
}
base64Decode('TWFuTQ==')
    /*
    s 是一个 base64 编码后的字符串
    解码 s 并返回
    例如 base64Decode('TWFu') 返回 'Man'
    */
