import myPhoto from '../img/PattersonHeadshotcropped2.png'
export default function Photo() {
    return(
        <div id="ctn-image">
            <img src={myPhoto} alt="headshot" />
        </div>
    )
}