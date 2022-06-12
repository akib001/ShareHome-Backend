const jwt =  require('jsonwebtoken')


module.exports= (req,res,next)=>{
    let decodedToken
    const authHeader =  req.get('Authorization')
    // console.log(authHeader)
    if(!authHeader){
        const error = new Error('Not authenticated.');
        error.statusCode = 401
        throw error;
    }
     const token =   authHeader.split(' ')[1];
    try{
        decodedToken = jwt.verify(token, 'privateKey')
    }catch(err){
        // console.log(err)
        err.statusCode = 500;
        throw err;  
    }
    if(!decodedToken){
        console.log('not authenticated')
    }
    console.log("Decoded : ",decodedToken)
    req.email = decodedToken.email;
    next()
}