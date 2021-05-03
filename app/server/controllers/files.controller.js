const path = require('path');

exports.onLoad = (req, res) => {
    
    res.render('files', {title: "Mod uploader", subject: "A place to upload and share mod files"});
};

exports.uploadAFile = (req, res) => {
   let sampleFile;
   let uploadPath;

    
   if (!req.files || Object.keys(req.files).length === 0) {
       return res.status(400).send('No files were uploaded.')
   }

   sampleFile = req.files.sampleFile;
   uploadPath = path.join(__dirname,'../..', '/upload/') + sampleFile.name;
   console.log(sampleFile);
   // us mv to place file on the server
   sampleFile.mv(uploadPath, function(err) {
       if(err) return res.status(500).send(err);

        res.send('file uploaded!')

   })
};