import axios from 'axios';

class SkillsApi {

  static async getAllSkills() {
    const skills = await axios.get('/skills');
    return skills;
  }

}

export default SkillsApi;