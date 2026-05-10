const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("nav-bar")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("show");
    navBar.classList.toggle("show")
})

document.querySelector(".currentyear").textContent = new Date().getFullYear()
document.querySelector(".lastmodified").textContent = `Last Modified: ${document.lastModified}`

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const totalCredits = document.getElementById("totalCredit");
function calculateCredits(course){
    creditTotal = course.reduce(
        (total, course) => total + course.credits,0
    );
    totalCredits.textContent = `The total credit for course listed above is ${creditTotal}`;
}

function displayCourseList(course){
    const courseList = document.getElementById("course-list")
    courseList.innerHTML = " ";
    
    for(const item of course){
        const courseCard = document.createElement("span");
        courseCard.textContent =`${item.subject} ${item.number}`
        if (item.completed){
            courseCard.classList.add("completed");
        }
        courseList.appendChild(courseCard);
    }
    calculateCredits(course)
}

document.getElementById("all").addEventListener("click",()=>{
    displayCourseList(courses);
})

document.getElementById("cse").addEventListener("click",()=>{
    const cseCourses = courses.filter(course=> course.subject === 'CSE');
    displayCourseList(cseCourses);
})

document.getElementById("wdd").addEventListener("click",()=>{
    const wddCourses = courses.filter(course=> course.subject === 'WDD');
    displayCourseList(wddCourses);
})

displayCourseList(courses)


