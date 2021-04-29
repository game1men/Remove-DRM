(function() {
    // na některých webech to háže výjimku proto ten try catch, v budoucnu možná dopíšu lepší fix
    try {
        //pomocí css selektoru to najde skript
        var x = document.querySelector("body > script:nth-child(8)");
        if (x != null) {
            //načte to z něj text
            x = x.innerHTML;
            //regex najde odkaz a upraví ho na správný formát
            x = x.match(/(https:).*(", label)/g)[0].toString().slice(0, -8);
            return x.toString();
        } else {
            return "";
        }
    } catch (error) {
        return "";
    }
})();