import './GalleryItem.css'

const GalleryItem=(props)=>{
    const {Picdtails,UpdatePicName,isActive}=props
    const{PicName,PicInfo}=Picdtails

    const PicitemStyling=isActive?"ActivePicSetup":"PicSetup"

    const Updates=()=>{
        UpdatePicName(PicName,PicInfo)
    }
    return(
        
            <img  className={PicitemStyling}src={PicInfo} onClick={Updates} alt="Pic"/>
            
            
    )
}

export default GalleryItem