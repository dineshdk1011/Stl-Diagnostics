
function resposeHandler(res,result){
	res.send(result);
    res.end();
}

exports.error = function(res,responseObject,message,status){
	resposeHandler(res,responseObject,message,true,status);
};

exports.success = function(res,responseObject,message,status){
	resposeHandler(res,responseObject,message,false,status);
};