import { Skill } from "@/domain/models/skill";

export interface CreateSkillParams {
  name: string;
}

export interface CreateSkill {
  create(params: CreateSkillParams): Promise<Skill>;
}
