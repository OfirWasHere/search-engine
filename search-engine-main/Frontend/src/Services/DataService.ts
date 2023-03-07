import axios from "axios";
import EmployeeModel from "../Models/employee.model";
import appConfig from "../Utils/AppConfig";

class DataService {
    public async search(search:string): Promise<EmployeeModel[]> {
        const response = await axios.get<EmployeeModel[]>(appConfig.searchUrl + search);
        return response.data;
    }

    public async getAllEmployees(): Promise<EmployeeModel[]> {
        const response = await axios.get<EmployeeModel[]>(appConfig.searchUrl);
        return response.data;
    }
}

const dataService = new DataService();

export default dataService;
