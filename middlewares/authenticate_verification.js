var dbQuery = require('../db/dev/dbQuery');

/**
   * Verify Token
   * @param {object} req 
   * @param {object} res 
   * @param {object} next
   * @returns {object|void} response object 
*/

const verifyToken = async (req, res, next) => {
  // get value of key with token from header obj
  // const { token } = req.headers;
  // if (!token) {
  //   return res.status(401).send("UNAUTHORIZED");
  // }
  // try {
    
  //   const isValidAccessToken = await checkTokenWithDb(token);
  //   if (isValidAccessToken.status == 200 ){

  //     const reqUser = await getUserDetail(isValidAccessToken.idOfUser);

  //     if(!reqUser){
  //       return res.status(401).send("UNAUTHORIZED");
  //     }
  
  //     req.user = Object.assign({}, reqUser);
  //     next();
  
  //   }
  //   else{
  //     return res.status(401).send(isValidAccessToken.msg);
  //   }
 
  // } catch (error) {
  //   return res.status(401).send("UNAUTHORIZED");
  // }


  // Uncomment above code, replace non-implemented code with your implementation 
  // and remove this for validation
  //req.user will add user data to req obj so you can access from there
  req.user = {'name' : 'username'}
  next();
};


module.exports = verifyToken;