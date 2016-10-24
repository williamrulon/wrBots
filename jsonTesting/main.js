$(function() {
    var json = {
        "people": {
            "person": [{
                "name": "Peter",
                "age": 43,
                "sex": "male"},
            {
                "name": "Zara",
                "age": 65,
                "sex": "female"}]
        }
    };
    $.each(json.people.person, function(i, v) {
        if (v.name.search(new RegExp(/peter/i)) != -1) {
            alert(v.age);
            return;
        }
    });
});
