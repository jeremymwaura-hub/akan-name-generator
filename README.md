
# 🧭 Akan Name Generator

A simple and modern web application that generates a traditional **Akan name** based on a user's **date of birth** and **gender**.

This project uses **HTML, CSS, and JavaScript** and applies a mathematical formula to determine the day of the week a user was born, then maps it to the correct Akan name.

---

## ✨ Features

* Modern, clean user interface
* Input form for:

  * Day
  * Month
  * Year
  * Gender
* Input validation:

  * Correct day range per month
  * Leap year validation
  * Month between 1–12
  * Gender selection required
* Uses a mathematical formula to calculate the day of the week
* Displays:

  * Day of birth
  * Corresponding Akan name

---

## 🧮 Formula Used

The day of the week is calculated using:

```
d = ((4CC − 2×CC − 1) + (45×YY) + (1026×(MM+1)) + DD) mod 7
```

Where:

* **CC** → First two digits of the year
* **YY** → Last two digits of the year
* **MM** → Month
* **DD** → Day
* **mod** → Modulus operator

---

## 📅 Akan Names Reference

| Day       | Male Name | Female Name |
| --------- | --------- | ----------- |
| Sunday    | Kwasi     | Akosua      |
| Monday    | Kwadwo    | Adwoa       |
| Tuesday   | Kwabena   | Abenaa      |
| Wednesday | Kwaku     | Akua        |
| Thursday  | Yaw       | Yaa         |
| Friday    | Kofi      | Afua        |
| Saturday  | Kwame     | Ama         |

---

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript (Vanilla JS)

---

## 📂 Project Structure

```
akan-name-generator/
│
└── index.html
```

*(All CSS and JavaScript are included in the same file for simplicity.)*

---

## ▶️ How to Run the Project

1. Download or clone the repository
2. Open the folder
3. Double-click **index.html**
   or open it in your browser

No installations or dependencies required.

---

## ✅ Validation Implemented

* Leap year check
* Correct days in each month
* Month must be between 1 and 12
* Day must match the selected month
* Gender must be selected

---

## 🎯 Purpose of the Project

This project demonstrates:

* Form handling in JavaScript
* Input validation
* Use of mathematical formulas in programming
* Clean and responsive UI design

---

## 👤 Author

**Jerry K**

---

## 📜 License

This project is open source and free to use for learning purposes.
