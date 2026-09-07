import { createContext, useContext, useState } from 'react';

const CourseContext = createContext();

const initialCourses = [
  { id: 1, title: "React Basics", hours: 12, isCompleted: true },
  { id: 2, title: "JavaScript Data Structures", hours: 20, isCompleted: false },
  { id: 3, title: "Web Design & UI", hours: 8, isCompleted: false },
  { id: 4, title: "Git & GitHub Workflow", hours: 6, isCompleted: true }
];

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState(initialCourses);

  function addHour(courseId) {
    setCourses(courses.map(course => 
      course.id === courseId ? { ...course, hours: course.hours + 1 } : course
    ));
  }

  function toggleStatus(courseId) {
    setCourses(courses.map(course => 
      course.id === courseId ? { ...course, isCompleted: !course.isCompleted } : course
    ));
  }

  const totalCompletedHours = courses.reduce((sum, course) => sum + course.hours, 0);

  return (
    <CourseContext.Provider value={{ courses, totalCompletedHours, addHour, toggleStatus }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  return useContext(CourseContext);
}