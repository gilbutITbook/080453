document.addEventListener('DOMContentLoaded', function() {
    const testButton = document.getElementById('testButton');
    if (testButton) {
        testButton.addEventListener('click', function() {
            alert('버튼을 클릭했습니다.');
        });
    }
});
