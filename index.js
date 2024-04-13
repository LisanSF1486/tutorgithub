const sidebar = document.querySelector(".sidebar");
const showbtn = document.querySelector(".showbtn");
const main = document.querySelector("main");

function showBar() {
	sidebar.style.display = "flex";
	sidebar.style.width = "100%";
	main.style.filter = "blur(4px)";
}

function hideBar() {
	sidebar.style.width = "0px";
	main.style.filter = "blur()";
}
