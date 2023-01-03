import { Skill } from "@/domain/models";
import { GetSkillParams } from "@/domain/usecases/skill/getAll";
import { asyncMiddleware } from "@/infrastructure/services/middleware/asyncHandler";
import { GetSkills } from "@/infrastructure/services/skillStorage";
import type { NextApiRequest, NextApiResponse } from "next";

type Override<T1, T2> = Omit<T1, keyof T2> & T2;
export type MyCustomRequest = Override<
  NextApiRequest,
  { body: GetSkillParams }
>;
async function handler(
  req: MyCustomRequest,
  res: NextApiResponse<Skill[] | null>
) {
  //? Used a POST request here since there isn't an authentication on the current application
  //? and I need the user ID to know which skills they selected.
  if (req.method == "POST") {
    const getSkills = new GetSkills();
    return res.status(200).send(await getSkills.getAll(req.body));
  }

  return res.status(405).send(null);
}

export default asyncMiddleware(handler);