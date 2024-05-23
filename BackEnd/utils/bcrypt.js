
import bcrypt from 'bcryptjs'

export const hashPassword = (password) => {
    const hashPassword = bcrypt.hashSync(password , bcrypt.genSaltSync())
    return hashPassword
}

export const comparePassword = (bodyPassword , userPassword) => {
    const comparePassword = bcrypt.compareSync(bodyPassword , userPassword)
    return comparePassword
}