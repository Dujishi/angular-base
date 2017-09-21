require("./css/toaster.less");
var toasterTool = {};
var confirmHtml;
function init($rootScope, toaster, ngDialog){
    toasterTool.$rootScope = $rootScope;
    toasterTool.toaster = toaster;
    toasterTool.ngDialog = ngDialog;
    var confirmHtmlPath = require("./html/toasterConfirm.html");
    confirmHtml = $rootScope.$templateCache.get(confirmHtmlPath);
}


function success(title, content){
    if(toasterTool.toaster){
        toasterTool.toaster.pop({
            toasterId : 2,
            "type": "success",
            "title": title,
            "body": content
        });
    }
}

function info(title, content){
    if(toasterTool.toaster){
        toasterTool.toaster.pop({
            toasterId : 2,
            "type": "info",
            "title": title,
            "body": content
        });
    }
}
function wait(title, content){
    if(toasterTool.toaster){
        toasterTool.toaster.pop({
            toasterId : 2,
            "type": "wait",
            "title": title,
            "body": content
        });
    }
}


function warning(title, content){
    if(toasterTool.toaster){
        toasterTool.toaster.pop({
            toasterId : 2,
            "type": "warning",
            "title": title,
            "body": content

        });
    }
}

function confirm( content,callback){
    if(toasterTool.ngDialog){
        var confirmDialog = toasterTool.ngDialog.open({
            template: confirmHtml,
            plain: true,
            closeByDocument:false,
            closeByNavigation : true,
            showClose:false,
            data  : {
                "content":content
            }
        });
        return confirmDialog;
    }
}

function error(title, content){
    if(toasterTool.toaster){
        toasterTool.toaster.pop({
            toasterId : 1,
            "type": "error",
            "title": title,
            "body": content,
            "timeout" : 0
        });
    }
}



module.exports = {
    init : init,
    success : success,
    error : error,
    warning : warning,
    info : info,
    wait : wait,
    confirm:confirm,
    clear : function(toasterId, toastId){
        if(toasterTool.toaster){
            toasterTool.toaster.clear(toasterId, toastId);
        }
    }
}