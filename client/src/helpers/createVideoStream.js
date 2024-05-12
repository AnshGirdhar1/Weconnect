const createVideoStream = async (videoConstraints = {}, videoRef) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(videoConstraints);
        window.stream = stream;
        videoRef.current.srcObject = stream;
    } catch(e){
        console.log(e);
    }
}

export {createVideoStream};