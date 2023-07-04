import { useMemo } from "react";
import { renderRoutes } from "../routes";

export const useRoutes = () => useMemo(() => renderRoutes(), []);
