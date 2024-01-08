const videoElement = document.querySelector('video');
const buttonElement = document.querySelector('button');

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    }
    catch(error){
        console.log("ERROR");
    }
}
buttonElement.addEventListener('click', async () =>{
    //Disable button
    buttonElement.disabled = true;
    await videoElement.requestPictureInPicture();
    //Reset Button
    buttonElement.disabled = false;
});
selectMediaStream();