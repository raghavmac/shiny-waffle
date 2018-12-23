import axios from 'axios';

class SkillsApi {

  static async getAllSkills() {
    const { data: skills } = await axios.get('/skills');
    return skills;
  }

  static async createSkill(data) {
    const { data: skill } = await axios.post('/skills', data);
    return skill;
  }

  static async deleteSkill(id) {
    const { data } = await axios.delete(`/skills/${id}`);
    return data;
  }
}

export default SkillsApi;