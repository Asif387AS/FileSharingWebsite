const File = require('../model/file');
const router = require('express').Router();

router.get('/:uuid',async(req,res)=>{

    let  file=await File.findOne({uudi:req.params.uuid})
    if(!file){
        return res.render("download",{error:"Link has been expired"})
    }
    const filePath=`${__dirname}/../${file.path}`
    console.log(filePath)
    res.download(filePath)
    
})

module.exports=router;