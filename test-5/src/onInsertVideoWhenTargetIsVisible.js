let count = 0;
function checkIsVisible(target, videoElement) {
    if (target) {
        target.appendChild(videoElement)
    } else {
        window.setTimeout(() => {
            count += 1;
            checkIsVisible(target, videoElement);
        }, 50);
    }
}

function onInsertVideoWhenTargetIsVisible(target, videoElement) {
    checkIsVisible(target, videoElement);
}

export default onInsertVideoWhenTargetIsVisible;