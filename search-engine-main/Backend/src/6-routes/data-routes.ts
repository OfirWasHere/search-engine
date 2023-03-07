import e from "express";
import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";

const router = express.Router(); // Capital R

// GET http://localhost:4000/api/search/:search
router.get("/search/:search", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const search = request.params.search;
        const employeesResponse = await dataService.getSearchResult(search);
        response.json(employeesResponse)

    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/search/
router.get("/search", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const search = request.params.search;
        const employeesResponse = await dataService.getAllEmployees();
        response.json(employeesResponse)
    }
    catch (err: any) {
        next(err);
    }
});


export default router;
