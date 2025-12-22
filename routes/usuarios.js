const { Router } = require('express');

const router = Router();

/* READ */
router.get('/',); /* ruta para leer todos los usuarios */
router.get('/:id', ); /* ruta para leer un usuario por su id */

/* CREATE */
router.post('/', ); /* ruta para crear un usuario */

/* UPDATE */
router.put('/:id', ); /* ruta para modificar un usuario por su id */

/* DELETE */
router.delete('/:id', ); /* ruta para eliminar un usuario por su id */

module.exports = router;

