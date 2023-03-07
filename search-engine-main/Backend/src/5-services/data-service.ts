import dal from "../2-utils/dal";
import EmployeeModel from "../4-models/employee-model";

async function getSearchResult(search:string):Promise<EmployeeModel[]> {

    const request = `SELECT * FROM employees Where name like ? OR WorkTitle like ?`;

    const response = await dal.execute(request, `%${search}%`, `%${search}%`);

    const result = response;

    return result;
}

async function getAllEmployees():Promise<EmployeeModel[]> {

    const request = `SELECT * FROM employees`;

    const response = await dal.execute(request);

    const result = response;

    return result;
}



export default {
    getSearchResult,
    getAllEmployees
};
