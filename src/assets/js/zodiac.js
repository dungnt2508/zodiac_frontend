function getZodiac(year) {
    const zodiacs = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    return zodiacs[(year - 1900) % 12];
}

document.getElementById("exploreBtn").addEventListener("click", () => {
    const year = parseInt(document.getElementById("birthdate").value.split("-")[0]);
    alert("Con giáp của bạn là: " + getZodiac(year));
});
