document.addEventListener('DOMContentLoaded', () => {
  checkAuthentication();
});

function checkAuthentication() {
  const token = localStorage.getItem('token');
  const currentPage = window.location.pathname;

  if (!token && (currentPage === '/dashboard.html' || currentPage === '/')) {
    window.location.href = '/login.html';
  }

  if (token && (currentPage === '/login.html' || currentPage === '/signup.html')) {
    window.location.href = '/dashboard.html';
  }
}
