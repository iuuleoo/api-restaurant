import { Router } from "express";

import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/tables-sessions", tablesSessionsRoutes);

export { routes };
