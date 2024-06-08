
import Location from '../model/location.model.js'
import { handleUpload } from '../utils/handleUpload.js';


export const createLocation = async (req , res) => {
    try {
        const {location , continent , country , latitude , longitude} = req.body
        const thumbnail = req.file

        const findLocation = await Location.findOne({location : location})
        if(findLocation){
            return res.status(401).json({
                message : "This location has been created"
            })
        }

        const b64 = Buffer.from(thumbnail.buffer).toString("base64");
        let dataURI = "data:" + thumbnail.mimetype + ";base64," + b64;

        const result = await handleUpload(dataURI)

        const newLocation = await Location.create({
            location ,
            coordinates : {
                latitude ,
                longitude
            },
            locationThumbnail : result.secure_url ,
            locationDependent : {
                country : country ? country : null,
                continent : continent ? continent : null
            }
        })

        return res.status(201).json({
            message : "Create location successfully",
            newLocation
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const getLocation = async (req, res) => {
    try {
        const locationData = await Location.find()
        
        return res.status(200).json({
            message : "Get data successfully",
            locationData
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }

}

export const searchLocation = async (req , res) => {
    try {
        const {locationName} = req.body
        const regex = RegExp(locationName , "i")
        const findLocation = await Location.find({location : regex})

        if(findLocation.length === 0 || !locationName){
            return res.status(404).json({
                message : "Not found location",
                localtion : null
            })
        }

        return res.status(200).json({
            message : "Get location successfully",
            findLocation
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}