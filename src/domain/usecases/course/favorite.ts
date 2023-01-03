import { Course } from "@/domain/models/course";

export interface FavoriteParams {
  course_id: number;
  user_id: string;
  favorite: boolean;
}

export interface FavoriteCourse {
  favorite(params: FavoriteParams): Promise<Course>;
}
