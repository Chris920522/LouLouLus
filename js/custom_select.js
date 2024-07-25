document.addEventListener('DOMContentLoaded', function () {
    // 初始化自定義選單
    function initializeCustomSelect(selectElement) {
        const customSelectContainer = document.createElement('div');
        customSelectContainer.classList.add('custom-select');

        const selectTrigger = document.createElement('div');
        selectTrigger.classList.add('custom-select-trigger');
        selectTrigger.textContent = selectElement.options[selectElement.selectedIndex].text;
        customSelectContainer.appendChild(selectTrigger);

        const customOptions = document.createElement('div');
        customOptions.classList.add('custom-options');

        Array.from(selectElement.options).forEach(option => {
            const customOption = document.createElement('div');
            customOption.classList.add('custom-option');
            customOption.textContent = option.text;
            customOption.dataset.value = option.value;
            customOptions.appendChild(customOption);

            customOption.addEventListener('click', function () {
                selectElement.value = option.value;
                selectTrigger.textContent = option.text;
                customOptions.style.display = 'none';
                customOptions.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
                customOption.classList.add('selected');
            });
        });

        customSelectContainer.appendChild(customOptions);
        selectElement.style.display = 'none';
        selectElement.parentNode.insertBefore(customSelectContainer, selectElement.nextSibling);

        selectTrigger.addEventListener('click', function () {
            customOptions.style.display = customOptions.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', function (event) {
            if (!customSelectContainer.contains(event.target)) {
                customOptions.style.display = 'none';
            }
        });
    }

    // 選取所有的 select 元素並初始化
    document.querySelectorAll('select').forEach(selectElement => {
        initializeCustomSelect(selectElement);
    });
});