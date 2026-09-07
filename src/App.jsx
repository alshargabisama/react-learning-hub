import { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import CourseCard from './CourseCard';
import CardContainer from './CardContainer';
import { CourseProvider, useCourses } from './CourseContext';
import { appName, targetHours } from './config';

function CourseList() {
  const { courses, totalCompletedHours } = useCourses();

  return (
    <div>
      <p><strong>Project:</strong> {appName}</p>
      <p><strong>Target Hours:</strong> {targetHours}h</p>
      <p style={{ color: "#2563eb", fontSize: "18px" }}>
        <strong>Total Logged Hours:</strong> {totalCompletedHours}h
      </p>

      <CardContainer>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            hours={course.hours}
            isCompleted={course.isCompleted}
          />
        ))}
      </CardContainer>
    </div>
  );
}

function App() {
  // حالة لمتابعة الصفحة النشطة حالياً
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <CourseProvider>
      <div style={{ fontFamily: "sans-serif", padding: "24px", backgroundColor: "#f7fafc", minHeight: "100vh" }}>
        <Header />

        {/* شريط التنقل لتغيير activeTab */}
        <Navbar currentTab={activeTab} onSelectTab={setActiveTab} />

        {/* العرض الشرطي: يعرض الشاشة المطلوبة فقط بناءً على التبويب النشط */}
        {activeTab === "courses" ? <CourseList /> : <About />}
      </div>
    </CourseProvider>
  );
}

export default App;