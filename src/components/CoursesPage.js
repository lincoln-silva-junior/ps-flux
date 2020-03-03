import React, { useState, useEffect} from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import PropTypes from 'prop-types';


function CoursesPage () {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses))
    }, [])
    
    return (
        <>
            <h2>Courses</h2>
            <CourseList courses={courses} />
        </>
    )     
}

CourseList.propTypes = {
    // courses: PropTypes.array.isRequired
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired
        })
    )
};

// class CoursesPage extends React.Component {
//     state = {
//         courses: []
//     }

//     componentDidMount(){
//         getCourses().then(courses => this.setState({ courses: courses }))
//     }
    
//     render() {
//         return (
//             <>
//                 <h2>Courses</h2>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Title</th>
//                             <th>Author ID</th>
//                             <th>Category</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.courses.map(course => {
//                             return (
//                                 <tr key={course.id}>
//                                     <td>{course.title}</td>
//                                     <td>{course.authorId}</td>
//                                     <td>{course.category}</td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </table>
//             </>
//         ) 
//     }
// }

export default CoursesPage