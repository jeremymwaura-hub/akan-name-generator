document.getElementById("akanForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("result");

    if (month < 1 || month > 12) {
        result.innerHTML = "Invalid month. Please enter a value between 1 and 12.";
        return;
    }
    if (gender === "") {
        result.innerHTML = "Please select a gender.";
        return;
    }

    function isLeapYear(y){
        return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    }

    const monthDays = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < 1 || day > monthDays[month - 1]) {
        result.innerHTML = `Invalid day for the given month. Please enter a value between 1 and ${monthDays[month - 1]}.`;
        return;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    let d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7;
    if (d < 0) d += 7;

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const akanName = gender === "male"? maleNames[d] : femaleNames[d];

result.innerHTML = `
    🎉 Born on <strong>${days[d]}</strong><br>
    Your Akan name is <strong>${akanName}</strong>
`;
