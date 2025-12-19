import React, { useEffect, useState } from "react";
import {
  DashboardContainer,
  GreetingSection,
  TimeBox,
  StatGrid,
  StatCard,
  StatTitle,
  StatValue,
} from "./style";
import { FiBookOpen, FiUser, FiClock } from "react-icons/fi";
import { getTeachers, getCourses } from "../../../services/api";

const Dashboard = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");
  const [teacherCount, setTeacherCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [allocatedCount, setAllocatedCount] = useState(0);
  const [totalCreditHours, setTotalCreditHours] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hour = time.getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, [time]);

  const fetchData = async () => {
    try {
      const teachersRes = await getTeachers();
      const coursesRes = await getCourses();

      const teachers = teachersRes.data;
      const courses = coursesRes.data;

      setTeacherCount(teachers.length);
      setCourseCount(courses.length);

      const allocated = courses.filter(c => c.teacher !== null).length;
      setAllocatedCount(allocated);

      const totalCredits = teachers.reduce(
        (sum, teacher) => sum + (parseInt(teacher.max_credits) || 0),
        0
      );
      setTotalCreditHours(totalCredits);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <DashboardContainer>
      <GreetingSection>
        <div>
          <h2>{greeting}</h2>
          <p>Welcome back to the Admin Panel</p>
        </div>
        <TimeBox>
          <h3>{formattedTime}</h3>
          <p>{formattedDate}</p>
        </TimeBox>
      </GreetingSection>

      <StatGrid>
        <StatCard>
          <FiUser size={40} color="var(--color-primary)" />
          <div>
            <StatTitle>Total Teachers</StatTitle>
            <StatValue>{teacherCount}</StatValue>
          </div>
        </StatCard>

        <StatCard>
          <FiBookOpen size={40} color="var(--color-accent)" />
          <div>
            <StatTitle>Total Courses</StatTitle>
            <StatValue>{courseCount}</StatValue>
          </div>
        </StatCard>

        <StatCard>
          <FiClock size={40} color="var(--color-info)" />
          <div>
            <StatTitle>Total Credit Hours</StatTitle>
            <StatValue>{totalCreditHours}</StatValue>
          </div>
        </StatCard>

        <StatCard>
          <FiBookOpen size={40} color="#ff9f43" />
          <div>
            <StatTitle>Allocated Courses</StatTitle>
            <StatValue>{allocatedCount}</StatValue>
          </div>
        </StatCard>
      </StatGrid>
    </DashboardContainer>
  );
};

export default Dashboard;
