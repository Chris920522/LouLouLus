const fruitTeaBtn = document.getElementById("fruitTeaBtn");
const milkTeaBtn = document.getElementById("milkTeaBtn");
const camomileTeaBtn = document.getElementById("camomileTeaBtn");
const seasonSpecialTeaBtn = document.getElementById("seasonSpecialTeaBtn");
const specialTeaBtn = document.getElementById("specialTeaBtn");
const taiwanTeaBtn = document.getElementById("taiwanTeaBtn");

const fruitTea = document.getElementById("fruitTea");
const milkTea = document.getElementById("milkTea");
const camomileTea = document.getElementById("camomileTea");
const seasonSpecialTea = document.getElementById("seasonSpecialTea");
const specialTea = document.getElementById("specialTea");
const taiwanTea = document.getElementById("taiwanTea");

function clearSelection() 
// 清除其他按鈕的點選狀態
{
  document.querySelectorAll('.seriesButton button').forEach(button => {
    button.classList.remove('selected');
  });
}

function fruitTeaTab() {
  clearSelection();
  fruitTeaBtn.classList.add('selected');
  fruitTea.style.transform = "translateX(0)";
  milkTea.style.transform = "translateX(150%)";
  camomileTea.style.transform = "translateX(150%)";
  seasonSpecialTea.style.transform = "translateX(150%)";
  specialTea.style.transform = "translateX(150%)";
  taiwanTea.style.transform = "translateX(150%)";
}

function milkTeaTab() {
  clearSelection();
  milkTeaBtn.classList.add('selected');
  fruitTea.style.transform = "translateX(150%)";
  milkTea.style.transform = "translateX(0)";
  camomileTea.style.transform = "translateX(150%)";
  seasonSpecialTea.style.transform = "translateX(150%)";
  specialTea.style.transform = "translateX(150%)";
  taiwanTea.style.transform = "translateX(150%)";
}

function camomileTeaTab() {
  clearSelection();
  camomileTeaBtn.classList.add('selected');
  fruitTea.style.transform = "translateX(150%)";
  milkTea.style.transform = "translateX(150%)";
  camomileTea.style.transform = "translateX(0)";
  seasonSpecialTea.style.transform = "translateX(150%)";
  specialTea.style.transform = "translateX(150%)";
  taiwanTea.style.transform = "translateX(150%)";
}

function seasonSpecialTeaTab() {
  clearSelection();
  seasonSpecialTeaBtn.classList.add('selected');
  fruitTea.style.transform = "translateX(150%)";
  milkTea.style.transform = "translateX(150%)";
  camomileTea.style.transform = "translateX(150%)";
  seasonSpecialTea.style.transform = "translateX(0)";
  specialTea.style.transform = "translateX(150%)";
  taiwanTea.style.transform = "translateX(150%)";
}

function specialTeaTab() {
  clearSelection();
  specialTeaBtn.classList.add('selected');
  fruitTea.style.transform = "translateX(150%)";
  milkTea.style.transform = "translateX(150%)";
  camomileTea.style.transform = "translateX(150%)";
  seasonSpecialTea.style.transform = "translateX(150%)";
  specialTea.style.transform = "translateX(0)";
  taiwanTea.style.transform = "translateX(150%)";
}

function taiwanTeaTab() {
  clearSelection();
  taiwanTeaBtn.classList.add('selected');
  fruitTea.style.transform = "translateX(150%)";
  milkTea.style.transform = "translateX(150%)";
  camomileTea.style.transform = "translateX(150%)";
  seasonSpecialTea.style.transform = "translateX(150%)";
  specialTea.style.transform = "translateX(150%)";
  taiwanTea.style.transform = "translateX(0)";
  console.log("a");
}
