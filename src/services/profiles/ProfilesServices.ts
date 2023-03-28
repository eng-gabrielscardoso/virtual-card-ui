import HttpService from "../HttpService";

class ProfilesService {
  public static async showProfile(name: string | undefined) {
    try {
      const response = await HttpService.get(`/profiles/${name}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public static async storeProfile(data: unknown | undefined) {
    try {
      const response = await HttpService.post("/profiles", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ProfilesService;
