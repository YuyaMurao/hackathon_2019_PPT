var theme = ["学生", "パワハラ", "戦争", "未来"]
var rand = Math.floor(Math.random() * 4);
theme_div = document.getElementById("theme")
theme_div.textContent = theme[rand]