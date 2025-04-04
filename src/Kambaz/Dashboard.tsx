import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enroll, unenroll } from "./enrollmentReducer";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const dispatch = useDispatch();

  const isEnrolled = (courseId: any) => enrollments.some(
    (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId
  );

  const coursesToDisplay = showAllCourses ? courses : courses.filter((course) => isEnrolled(course._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <h5>New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
        </h5>
      )}
      {currentUser?.role === "FACULTY" && (
        <>
          <input value={course.name} className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })} /> <br />
        </>
      )}

      {/* Enrollment Button for Students */}
      {currentUser?.role === "STUDENT" && (
        <button className="btn btn-info float-end" onClick={() => setShowAllCourses(!showAllCourses)}>
          Enrollments
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {coursesToDisplay
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <div>
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src="images/reactjs.jpg" width="100%" height={160} />
                    </Link>
                    <div className="card-body">
                      <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name} </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description} </p>
                        <button className="btn btn-primary"> Go </button>
                      </Link>
                      {currentUser?.role === "FACULTY" && (
                        <>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>
                        </>
                      )}
                      {showAllCourses && currentUser?.role === "STUDENT" && isEnrolled(course._id) && (
                        <>
                          <button className="btn btn-danger float-end" onClick={() => dispatch(unenroll(
                            { user: currentUser._id, course: course._id }))}>
                            Unenroll
                          </button>
                        </>
                      )}
                      {showAllCourses && currentUser?.role === "STUDENT" && !isEnrolled(course._id) && (
                        <>
                          <button className="btn btn-success float-end" onClick={() => dispatch(enroll(
                            { user: currentUser._id, course: course._id }))}>
                            Enroll
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}