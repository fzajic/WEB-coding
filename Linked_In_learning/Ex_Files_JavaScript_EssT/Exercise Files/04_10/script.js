
/*var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);

var currentDate = new Date();

var course02 = new Course();
*/


function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this. published = published;
  this.views = views;
  this.updateViews = function () {
    return ++this.views;
  };
}
var courses = [
    new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0),
    new Course("Up and Running with ECMAScript 6", "Filip Zajíc", true, 1234563)
]


console.log(courses[1]. instructor);
//console.log(courses[0]);
console.log(courses[0].updateViews());
//console.log(courses[0]);
console.log(courses[0]["title"]);
