// 將data-id儲存到瀏覽器的localStorage
function saveProductId(event) {
  event.preventDefault();
  const productId = event.currentTarget.getAttribute('data-id');
  localStorage.setItem('productId', productId);
  window.location.href = event.currentTarget.href;
  // 跳轉到新的URL
}