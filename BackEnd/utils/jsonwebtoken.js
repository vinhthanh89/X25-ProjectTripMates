
import jwt from 'jsonwebtoken'

export const signAccessToken = (payload) => {
    const accessToken = jwt.sign({
        payload,
    } , process.env.AT, {
        expiresIn : '1d'
    })

    return accessToken
}

export const signRefreshToken = (payload) => {
    const refreshToken = jwt.sign({
        payload,
    } , process.env.RT)

    return refreshToken
}

export const verifyToken = (token , SCRET_KEY) => {
    const splitedToken = token.split(' ')[1]
    const verify = jwt.verify(splitedToken ,  SCRET_KEY)

    if(!verify){
        return null
    }

    return verify
}