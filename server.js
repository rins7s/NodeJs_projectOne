//Required Modules
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');


var mimetypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "js": "text/js",
    "css": "text/css",
}