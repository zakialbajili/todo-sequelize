const express = require ("express")
const RolesController = require("../controller/RoleController")
const router = express.Router();
router.get("/roles", RolesController.GetRoles)
router.post("/roles", RolesController.createRoles),
router.put("/roles/:id", RolesController.updateRoles)
router.delete("/roles/:id", RolesController.deleteRoles)
module.exports = router;