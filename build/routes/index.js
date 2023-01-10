import express from "express";
import charactersRoutes from "./charactersRoutes.js";
const routes = (app) => {
    app.use(express.json(), charactersRoutes);
};
export default routes;
