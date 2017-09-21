var encrypt = require("./encrypt.js");

var tool = {};
function getUuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[13] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[17] = hexDigits.substr((s[17] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    return s.join("");
}

/**
把参数加到source里去
source的格式为：xxx{0}/xxx{1} 其中，{0}是第一个参数 {1}是第二个参数
params是一个数组，每个值对应source里的一个参数
*/
function formatUrl(source,params){
  for(var i = 0; i < params.length; i++){
    var item = params[i];
    source = source.replace( new RegExp("\\{" + i + "\\}", "g"), function() {
      return item;
    });
  }

  return source;
};

function init($location){
    tool.$location = $location;
}

function goPage(url, params){
    if(url.indexOf("#") == 0){
        url = url.substring(1);
    }
    params = params || {};
    tool.$location.path(url).search(params);
}

module.exports = {
    md5 : encrypt.md5,
    encode64:encrypt.encode64,
    getUuid:getUuid,
    formatUrl:formatUrl,
    init:init,
    goPage:goPage
}
