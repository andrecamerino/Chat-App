import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {
    
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"7d"})

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // in milliseconds
        httpOnly: true, // prevents XSS attacks *
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks **
        secure: process.env.NODE_ENV !== "development",
    });

    return token;
}

// * XSS attacks are cross site scripting attacks where an attacker injects malicious code into web pages
// ** CSRF stands for Cross-Site Request Forgery. It is an attack type where an attacker tricks a user into performing certain actions in an app that the user is authenticated in. 