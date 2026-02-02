document.getElementById("akanForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("result");