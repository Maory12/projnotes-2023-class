// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectsController from './projects.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// get 'proyectos/projects'
router.get(['/projects'], projectsController.projects);
// get 'proyectos/add'
router.get(['/projects/add'], projectsController.add);

// Exporto este tramo de ruta
export default router;
