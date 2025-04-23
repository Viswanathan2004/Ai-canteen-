// Mock authentication utility
export default function isAuthenticated() {
    // For real apps, check localStorage, cookie, or context
    return Boolean(localStorage.getItem("user"));
  }