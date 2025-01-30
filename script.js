document.addEventListener('DOMContentLoaded', () => {
    const bucketList = document.getElementById('bucket-list');

    bucketList.addEventListener('click', (event) => {
        if (event.target.classList.contains('bucket-list-item-button')) {
            const listItem = event.target.closest('.bucket-list-item');
            const icon = listItem.querySelector('.bucket-list-icon');
            const button = listItem.querySelector('.bucket-list-item-button');

            if (icon.classList.contains('completed')) {
                icon.classList.remove('completed');
                icon.classList.add('not-completed');
                button.textContent = 'Complete';
            } else {
                icon.classList.remove('not-completed');
                icon.classList.add('completed');
                button.textContent = 'Undo';
            }
        }
    });
});