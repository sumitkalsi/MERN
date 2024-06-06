const auth = (permission)=>{
    return(req,res,next)=>{
        const role = req.params.role;
        if (role == permission) {
            next()
         
            
        } else {
            res.json('not allowed')
        }

    }
    
}
module.exports = auth;