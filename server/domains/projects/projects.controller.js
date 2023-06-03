// Actions methods
// GET "/proyectos/projects
const projects = (req, res) => {
  res.send('⚠ UNDER CONTRUCTION: GET /projects/projects ⚠ ');
};
// GET "/projects/add
const add = (req, res) => {
  res.render('project/addView');
};

// POST "/project/add"
const addPost = (req, res) => {
  // Extrayendo la informacion
  // del formulario
  const { name, description } = req.body;
  // Regresando al cliente la información recabada
  res.status(200).json({
    name,
    description,
  });
};

// Controlador user
export default {
  // action methods
  projects,
  add,
  addPost,
};
