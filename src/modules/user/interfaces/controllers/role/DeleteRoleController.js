const deleteRoleUseCase = require('../../../core/usecases/role/DeleteRoleUseCase');
module.exports = class DeleteRoleController{

    static async delete(req , res){
        const {id} = req.params;
        try {
            await deleteRoleUseCase.deleteRole(id);
            return res.status(200).json({message:'Role deleted successfully'})
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}