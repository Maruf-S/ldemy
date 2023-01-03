import { Course } from "@/domain/models/course";

export interface GetCourseParams {
  user_id: string;
}

export interface GetCourses {
  getAll(params: GetCourseParams): Promise<Course[]>;
}
