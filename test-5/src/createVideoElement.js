function removeElement(event) {
    const element = event.target;
    element.parentNode.removeChild(element);
}

function createVideoElement(src) {
    const videoElement = document.createElement('video');
    videoElement.src = src;
    videoElement.muted = true;
    videoElement.autoplay = true;
    videoElement.onended = removeElement;
    return videoElement;
}

export default createVideoElement;