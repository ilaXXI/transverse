document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (form) {
      form.onsubmit = function (e) {
        e.preventDefault();
        const u = document.getElementById("username").value;
        const p = document.getElementById("password").value;
        if (u === "senior" && p === "senior123") {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userType", "senior");
          location.href = "index.html";
        } else if (u === "benevole" && p === "benevole123") {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userType", "benevole");
          location.href = "index.html";
        } else {
          document.getElementById("loginError").textContent = "Identifiants incorrects.";
        }
      };
    }
  
    if (location.pathname.includes("index.html")) {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn !== "true") {
        window.location.href = "login.html";
      }
    }
  
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.clear();
        location.href = "login.html";
      });
    }
  });
  