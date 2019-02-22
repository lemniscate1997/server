function errorMessage(err){

    let message = "";

    // Note : More Error Codes would be added as per our requirements.

    switch(err.code){
        case '42P01' : message = "Table you requested for was not found.";
        break;

        case '42703' : message = "Column you requested for was not found.";
        break;

        case '42601' : message = "Insert query has more expressions than target or vice versa.";
        break;

        case '28P01' : message = "Connection with the Database Failed.";
        break;

        case '3D000' : message = "Database you requested to connect for does not exist.";
        break;

        case 'ENOTFOUND' : message = "Host Connection Error.";
        break;

        case 'ECONNREFUSED' : message = "Connection Refused.";
        break;

        case '403' : message = "Server is Refusing to Respond to your Request.";
        break;

        case '404' : message = "Requested Resource could not be Found.";
        break;

        case '500' : message = "Internal Server Error.";
        break;

        case 'JOIFALSE' : message = err.message;
        break;

        default : message = "Message not found."
    }

    return message;
}

module.exports = errorMessage;