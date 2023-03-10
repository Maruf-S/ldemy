import { Skill } from "@/domain/models/skill";

export interface SelectSkillParams {
  skill_id: number;
  select: boolean;
  user_id: string;
}

export interface SelectSkill {
  select(params: SelectSkillParams): Promise<Skill>;
}
