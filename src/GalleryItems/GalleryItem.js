const GalleryItem=(props)=>{
    const {Picdtails,UpdatePicName}=props
    const{PicName,PicInfo}=Picdtails

    const Updates=()=>{
        UpdatePicName(PicName,PicInfo)
    }
    return(
        
            <img src={PicInfo} onClick={Updates} alt="Pic"/>
            
            
    )
}

export default GalleryItem