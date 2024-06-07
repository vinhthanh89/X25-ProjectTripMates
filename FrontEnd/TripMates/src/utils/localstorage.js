export const saveAccessTokenToLocal = (token) => {
    localStorage.setItem('accesstoken' , token)
}

export const saveRefreshTokenToLocal = (token) => {
    localStorage.setItem('refreshtoken' , token)
}

export const getAccessTokenFromLocal = () => {
   const accessToken = localStorage.getItem('accesstoken')
   return accessToken
}

export const getRefreshTokenFromLocal = () => {
   const refreshToken = localStorage.getItem('refreshtoken')
   return refreshToken
}

export const removeAccessTokenFromLocal = () => {
    localStorage.removeItem('accesstoken')
}

export const removeRefreshTokenFromLocal = () => {
    localStorage.removeItem('refreshtoken')
}

export const saveUserToLocal = (user) => {
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
}

export const getUserFromLocal = () => {
    const userString = localStorage.getItem("user")
  
    if(!userString){
      return {}
    }
  
    return JSON.parse(userString)
  }

  
export const removeUserFromLocal = () => {
  localStorage.removeItem("user")
}