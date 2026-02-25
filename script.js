// Order button functionality - redirect to order form page
function goToOrder(itemName) {
  localStorage.setItem('selectedItem', itemName);  // Save selected item name
  window.location.href = 'order-form.html';        // Redirect to order form page
}

// Smooth scrolling for better UX (yeh optional hai, agar nahi chahiye to hata sakte ho)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// WhatsApp icon click -> open chatbot page
function openWhatsApp() {
  window.location.href = "chatbot.html";
}
