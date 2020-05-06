import createVideoElement from './createVideoElement';
test('return video element', () => {
    const videoElement = createVideoElement();
    expect(videoElement.tagName).toBe('VIDEO');
});

test('trigger onend event check if no element on body', () => {
    const videoElement = createVideoElement();
    document.body.appendChild(videoElement);
    expect(document.body.childElementCount).toBe(1);
    videoElement.dispatchEvent(new Event('ended'));
    expect(document.body.childElementCount).toBe(0);
});