import Role from '../models/role';

export async function getRoles(req, res) {
    try {
        const roles = await Role.findAll();
        res.json({
            data: roles
        })
    } catch (error) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Somethin goes wrong' + error
            }
        })
    }
}
