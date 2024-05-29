import { signAccessToken, verifyToken } from "../utils/jsonwebtoken.js";

export const authentication = async (req, res, next) => {
  const accessToken = req.headers.accesstoken;
  const refreshToken = req.headers.refreshtoken;
  try {

    if (!accessToken) {
      return res.status(401).json({
        message: "Bạn chưa đăng nhập",
      });
    }

    const verify = verifyToken(accessToken, process.env.AT);
    if (!verify) {
      return res.status(401).json({
        message: "Xác thực token thất bại",
      });
    }

    req.user = verify.payload;

    next();
  } catch (error) {
    if (error.message === "jwt expired") {
      const verify = verifyToken(refreshToken, process.env.RT);
      if (!verify) {
        return res.status(403).json({
          message: "Phiên đăng nhập quá thời hạn",
        });
      }

      const newAccessToken = signAccessToken(verify);
      return res.status(200).json({
        newAccessToken,
      });
    }

    return res.status(500).json({
      error: error.name,
      message: error.message,
    });
  }
};
