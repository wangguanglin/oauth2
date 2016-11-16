//code=出错代码，msg=出错信息
function createApiError ( code,msg){
	var err = new Error(msg);

	error.error_code = code;
	error.error_message = msg;

	return err;
}