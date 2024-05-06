import type { Course } from '~/types/course';

interface CourseReturn {
  course: Maybe<Course>; //  Course | null | undefined
}

export const useCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  const course = courses.find((course) => course.courseSlug === courseSlug);
  return {
    course,
  };
};
