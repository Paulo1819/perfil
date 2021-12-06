window.addEventListener("scroll",()=>{
	const header = document.querySelector("header");
	if (window.scrollY > 0) {
		header.classList.add("stickey")
	}else {
		header.classList.remove("stickey")
	}
})