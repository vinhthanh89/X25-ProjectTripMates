export const authorization = async (req , res , next) => {
    try {
        const userId = req.user
        const userParams = req.params.userId

        console.log("userId :::" , userId);
        console.log("userParams :::" , userParams);

        if(!(userId === userParams)){
            return res.status(403).json({
                message : "User does not have permissions for this function"
            })
        }

        next()
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}