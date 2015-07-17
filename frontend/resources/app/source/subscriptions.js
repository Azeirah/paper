// holds subscriptions to channels
// so basically it's just an array ["nature", "sky", "fantasy"]

let Store = require("jfs");
let db    = new Store("subscriptions");

// check to see if the json exists, if it doesn't, then create it.
db.get("subscriptions", function (error) {
    // this is a bad way to check for errors I believe, please enlighten me!
    if (error.toString() !== Error("could not load data").toString()) {
        console.log(error);
        // file didn't exist yet, so let's create it.
        console.log("Creating json storage");
        db.save("subscriptions", []);
    } else {
        console.log("succesfully loaded json storage");
    }
});

module.exports = db;