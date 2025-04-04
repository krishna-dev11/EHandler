const cloudinary = require('cloudinary').v2;

exports.uploadImageToCloudinary = async(file , folder , height , quality)=>
{
    try{

        const options = {folder};

        if(quality){
            options.quality = quality;
        }

        if(height){
            options.height = height;
        }

        options.resource_type = "auto";

      return await cloudinary.uploader.upload(file.tempFilePath , options);

    }catch(error){
       console.error = error;
    }
}



// ye mene likha hai so confirm karna hai 
// const cloudinary = require('cloudinary').v2;

// exports.updateVideoTOCloudinary = async(file , folder , publicId , height , quality)=>
// {
//     try{

//         const options = {folder};

//         if(quality){
//             options.quality = quality;
//         }

//         if(height){
//             options.height = height;
//         }

//         if(publicId){
//             options.public_id = publicId,
//             options.overwrite = true
//         }

//         options.resource_type = "auto";

//         await cloudinary.uploader.upload(file.tempFilePath , options);

//     }catch(error){
//        console.error = error;
//     }
// }




// const cloudinary = require('cloudinary').v2;

// exports.deleteVideoTOCloudinary = async( publicId )=>
// {
//     try{

//         const options = {folder};

//         // if(quality){
//         //     options.quality = quality;
//         // }

//         // if(height){
//         //     options.height = height;
//         // }

//         if(publicId){
//             options.public_id = publicId,
//             options.overwrite = true
//         }

//         options.resource_type = "auto";

//         await cloudinary.uploader.destroy(file.tempFilePath , options);

//     }catch(error){
//        console.error = error;
//     }
// }