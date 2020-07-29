console.log('Hello world')
console.log('Fuck you js')


//Course Class: 
class Course {
    constructor(title, code, section, type, timeStart, timeFinish, day, professor) {
        this.title = title;
        this.code = code;
        this.section = section;
        this.type = type;
        this.timeStart = timeStart;
        this.timeFinish = timeFinish;
        this.day = day;
        this.professor = professor;
    }
}

//UI Class: Handle UI Tasks
class UI {
    static displayCourses(dayInput) {
        console.log(dayInput)
        const registerCourses = [
            //Monday
            {
                title: "Seminar",
                code: "01418497-60",
                section: "3",
                type: "Lecture",
                timeStart: "8:00",
                timeFinish: "11:00",
                day: "Monday",
                professor: "ชาคริต วัชโรภาส, ศิริกร จันทร์นวล"
            },
            //Tuesday
            {
                title: "Web Technology and Web Services",
                code: "01418442-60",
                section: "1",
                type: "Lecture",
                timeStart: "8:00",
                timeFinish: "10:00",
                day: "Tuesday",
                professor: "สุขุมาล กิติสิน"
            },
            {
                title: "Web Technology and Web Services",
                code: "01418442-60",
                section: "11",
                type: "Laboratory",
                timeStart: "12:30",
                timeFinish: "14:30",
                day: "Tuesday",
                professor: "สุขุมาล กิติสิน"
            },
            //wednesday
            {
                title: "Intellectual Properties and Professional Ethics",
                code: "01418341-60",
                section: "1",
                type: "Lecture",
                timeStart: "10:00",
                timeFinish: "11:30",
                day: "Wednesday",
                professor: "นวลวรรณ สุนทรภิษัช"
            },
            {
                title: "Operating Systems",
                code: "01418331-60",
                section: "1",
                type: "Lecture",
                timeStart: "12:00",
                timeFinish: "14:00",
                day: "Wednesday",
                professor: "ศิริกร จันทร์นวล"
            },
            {
                title: "System Analysis and Design",
                code: "01418321-60",
                section: "1",
                type: "Lecture",
                timeStart: "14:00",
                timeFinish: "16:00",
                day: "Wednesday",
                professor: "สมโชค เรืองอิทธินันท์"
            },
            {
                title: "System Analysis and Design",
                code: "01418321-60",
                section: "11",
                type: "Laboratory",
                timeStart: "16:00",
                timeFinish: "18:00",
                day: "Wednesday",
                professor: "สมโชค เรืองอิทธินันท์"
            },
            //Thurday
            {
                title: "Introduction to Software Engineering",
                code: "01418471-60",
                section: "11",
                type: "Laboratory",
                timeStart: "8:00",
                timeFinish: "10:00",
                day: "Thurday",
                professor: "อุษา สัมมาพันธ์"
            },
            {
                title: "Introduction to Software Engineering",
                code: "01418471-60",
                section: "1",
                type: "Lecture",
                timeStart: "11:00",
                timeFinish: "13:00",
                day: "Thurday",
                professor: "อุษา สัมมาพันธ์"
            },
            {
                title: "Introduction to Interactive Computer Graphics",
                code: "01418382-60",
                section: "1",
                type: "Lecture",
                timeStart: "13:00",
                timeFinish: "14:30",
                day: "Thurday",
                professor: "ชาคริต วัชโรภาส"
            },
            {
                title: "Introduction to Interactive Computer Graphics",
                code: "01418382-60",
                section: "1",
                type: "Lecture",
                timeStart: "14:30",
                timeFinish: "16:00",
                day: "Thurday",
                professor: "ชาคริต วัชโรภาส"
            },
            //Friday
            {
                title: "Intellectual Properties and Professional Ethics",
                code: "01418341-60",
                section: "1",
                type: "Lecture",
                timeStart: "10:00",
                timeFinish: "11:30",
                day: "Friday",
                professor: "นวลวรรณ สุนทรภิษัช"
            },
            {
                title: "Operating Systems",
                code: "01418331-60",
                section: "1",
                type: "Lecture",
                timeStart: "12:00",
                timeFinish: "14:00",
                day: "Friday",
                professor: "ศิริกร จันทร์นวล"
            },
        ]
        const courses = registerCourses;

        //Course Filter Loop
        console.log(courses)
        console.log(courses[1])
        console.log(courses[1].day)
        console.log(courses.length)


        for (let i = 0; i < courses.length; i++) {
            console.log(i)
            console.log(courses[i].day)
            //input Day
            if (courses[i].day == dayInput) {
                UI.addCourseToList(courses[i])
            }
        }
        //courses.forEach((course) => UI.addCourseToList(course))
    }

    static addCourseToList(course) {
        const list = document.querySelector('#course-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${course.title}<td/>
        <td>${course.code}<td/>
        <td>${course.section}<td/>
        <td>${course.type}<td/>
        <td>${course.timeStart}"-"${course.timeFinish}<td/>
        <td>${course.day}<td/>
        <td>${course.professor}<td/>
        `;

        list.appendChild(row);
    }

    static resetCourse(){
        course
    }
}

//Event: Display Course
document.addEventListener('DOMContentLoaded', UI.displayCourses);

