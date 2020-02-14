function validate() {
    var url = document.getElementById("name").value;
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (pattern.test(url)) {
        alert("Url is valid");
        return true;
    } 
        alert("Url is not valid!");
        return false;

}
export { validate}
