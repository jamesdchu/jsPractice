var course = new Object();
course.title = "JS TRAINING";
course.title = "Morten";
course.level = 1;
course.publish = true;
course.views = 0; 

var course = {
    title = "JS TRAINING",
    instructor: "Morten",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() { 
        return ++course.views;
    }
}
console.log(course.views);
course.updateViews();
console.log(course.views)