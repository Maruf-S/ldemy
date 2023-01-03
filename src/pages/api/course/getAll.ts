import { Course } from "@/domain/models";
import { GetCourseParams } from "@/domain/usecases/course/getAll";
import { GetCourses } from "@/infrastructure/services/coursesStorage";
import { asyncMiddleware } from "@/infrastructure/services/middleware/asyncHandler";
import type { NextApiRequest, NextApiResponse } from "next";

type Override<T1, T2> = Omit<T1, keyof T2> & T2;
export type MyCustomRequest = Override<
  NextApiRequest,
  { body: GetCourseParams }
>;
async function handler(
  req: MyCustomRequest,
  res: NextApiResponse<Course[] | null>
) {
  //? Used a POST request here since there isn't an authentication on the current application 
  //? and I need the user ID to know wether or not they favorite the course
  if (req.method == "POST") {
    const getCourses = new GetCourses();
    res.status(200).send(await getCourses.getAll(req.body));
  }

  return res.status(405).send(null);
}

export default asyncMiddleware(handler);
