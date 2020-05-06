import onInsertVideoWhenTargetIsVisible from './onInsertVideoWhenTargetIsVisible';

test('Element inserted in dom', () => {
    const childrenMock = document.createElement('div');
    childrenMock.id = 'childrenMock';
    onInsertVideoWhenTargetIsVisible(document.getElementById('parentMock'), childrenMock);
    expect(document.getElementById('parentMock')).toBeFalsy();
    const parentMockElement = document.createElement('div');
    parentMockElement.id = 'parentMock';
    document.body.appendChild(parentMockElement);
    onInsertVideoWhenTargetIsVisible(document.getElementById('parentMock'), childrenMock);
    expect(parentMockElement.childNodes.length).toBe(1);
    expect(parentMockElement.firstChild.id).toBe('childrenMock');
});