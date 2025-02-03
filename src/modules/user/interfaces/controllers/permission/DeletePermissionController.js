const deletePermissionUseCase = require('../../../core/usecases/permission/DeletePermissionUseCase');
module.exports = class DeletePermissionController{

    static async delete(req , res){
        const {id} = req.params;
        try {
            await deletePermissionUseCase.deletePermission(id);
            return res.status(200).json({message:'Permission deleted successfully'})
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}