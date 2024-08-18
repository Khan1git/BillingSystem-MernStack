import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name:"do9w0lwh2",
    api_key: process.env.Cloudinary_api_key,
    api_secret: process.env.Cloudinary_api_secret
})

export default cloudinary