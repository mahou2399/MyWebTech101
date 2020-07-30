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
            }
        ]

        //Clear list
        const courses = [];
        UI.clearCourses();

        //Course Filter Loop
        for (let i = 0; i < registerCourses.length; i++) {
            //input Day
            if (registerCourses[i].day == dayInput) {
                courses.push(registerCourses[i])
            }
        }

        //Course Display update
        for (let i = 0; i < courses.length; i++) {
            UI.addCourseToList(courses[i], i);
        }
    }

    static clearCourses() {
        const list = document.querySelector('#course-list');
        document.getElementById('course-list').innerHTML = "";
    }

    static addCourseToList(course, i) {
        const list = document.querySelector('#course-list');
        const row = document.createElement('tr');
        //Data Cells
        row.innerHTML = `<button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#myModal${i}">${course.title}</button>

        <!--Modal-->
        <div class="modal fade" id="myModal${i}" role="dialog">
          <div class="modal-dialog">
          
            <!--Modal content-->
            <div class="modal-content">
              <div class="modal-header text-body">
                <h4 class="modal-title text-body">${course.title}</h4>
              </div>
              <div class="modal-body text-body">
                <p>${"COURSE CODE: "+course.code}</p>
                <p>${"SECTION: "+course.section}</p>
                <p>${"TYPE: "+course.type}</p>
                <p>${"TIME: "+(course.timeStart + "-" + course.timeFinish)}</p>
                <p>${"DAY: "+course.day}</p>
                <p>${"PROFESSOR: "+course.professor}</p>
              </div>
              <div class="modal-footer">
              <!--Close Button-->
                <button type="button" class="btn btn-primary" data-dismiss="modal">${"Close"}</button>
              </div>
            </div>
          </div>
        </div>`;
        row.insertCell().innerHTML += course.code;
        row.insertCell().innerHTML += course.section;
        row.insertCell().innerHTML += course.type;
        row.insertCell().innerHTML += (course.timeStart + "-" + course.timeFinish);
        row.insertCell().innerHTML += course.day;
        row.insertCell().innerHTML += course.professor;
        list.appendChild(row);
    }
}

//Event: Display Course
document.addEventListener('DOMContentLoaded', UI.displayCourses);