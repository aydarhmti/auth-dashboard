if (window.location.pathname.includes("splash")) {
  setTimeout(() => {
 
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 800); 
  }, 5000); 
}
