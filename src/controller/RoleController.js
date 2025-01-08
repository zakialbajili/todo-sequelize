const { where } = require("sequelize");
const Roles = require("../db/models/roles")

class RolesController {
    async GetRoles(req, res) {
        try {
            const roles = await Roles.findAll(
                {
                    where: {
                        active: true
                    }
                }
            );
            res.status(200).json({
                status: true,
                message: "Roles fetched successfully",
                data: roles
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "Internal Server Error",
                error: error.message
            });
            console.log(error);
        }
    }
    async createRoles(req, res) {
        try {
            const addRoles = await Roles.create({
                name: req.body.name,
                active: true
            })
            res.status(200).json({
                status: true,
                message: "Created Roles fetched successfully",
                data: addRoles
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "Internal Server Error",
                error: error.message
            });
            console.log(error);
        }
    }
    async updateRoles(req, res) {
        try {
            const roles = await Roles.update(
                {
                    where: {
                        id: req.params.id
                    }
                },
                {
                    name:
                        req.body.name,
                    active: true
                }
            )
            res.status(200).json({
                status: true,
                message: "Update Roles fetched successfully",
                data: roles
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "Internal Server Error",
                error: error.message
            });
            console.log(error);
        }
    }
    async deleteRoles(req, res) {
        try {
            const roles = await Roles.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                status: true,
                message: "Delete Roles fetched successfully",
                data: roles
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "Internal Server Error",
                error: error.message
            });
            console.log(error);
        }
    }
}

module.exports = new RolesController();