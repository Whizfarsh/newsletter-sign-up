// "use strict";

document.addEventListener("DOMContentLoaded", function () {
	const msg = document.getElementById("msg");
	const theInput = document.querySelector("#emailInput");
	const inputBtn = document.querySelector("#subsBtn");

	let inputedEmail;

	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

	theInput.addEventListener("input", function () {
		inputedValue = theInput.value;
		console.log(typeof inputedValue);
		if (theInput.value === "" || !emailRegex.test(inputedValue)) {
			msg.textContent = "Valid email required";
			msg.classList.remove("text-green-500");
			msg.classList.add("text-red-500");
			theInput.classList.remove(
				"border-green-500",
				"bg-green-200",
				"text-green-500"
			);
			theInput.classList.add("border-red-500", "bg-red-200", "text-red-500");
			inputBtn.setAttribute("disabled", "true");
			inputBtn.classList.remove("bg-[#36384E]");
			inputBtn.classList.add("bg-gray-300");
		} else {
			if (emailRegex.test(inputedValue) && theInput.value != "") {
				msg.textContent = inputedValue;
				console.log(typeof inputedValue);

				msg.textContent = "Valid email entered";
				msg.classList.remove("text-red-500");
				msg.classList.add("text-green-500");
				theInput.classList.remove(
					"border-red-500",
					"bg-red-200",
					"text-red-500"
				);
				theInput.classList.add(
					"border-green-500",
					"bg-green-200",
					"text-green-500"
				);
				inputBtn.removeAttribute("disabled");
				inputBtn.classList.remove("bg-gray-300");
				inputBtn.classList.add("bg-[#36384E]");
			}
		}
	});

	inputBtn.addEventListener("click", function () {
		inputedEmail = theInput.value;
		const mainContent = document.querySelector("#main-content");
		console.log("clicked");
		console.log(inputedEmail);

		document.querySelector("#sign-up").classList.add("hidden");
		mainContent.classList.add("bg-[#36384e]");
		mainContent.insertAdjacentHTML(
			"beforeend",
			`
            <div
				class="flex flex-col items-left bg-white shadow p-10 rounded-lg w-[32rem] text-[#36384E]"
			>
				<img src="/images/icon-list.svg" alt="" class="w-10 h-10 mb-4" />
				<h3 class="text-black text-5xl font-bold">Thanks for subscribing!</h3>
				<p class="text-sm p-2 mt-2">
					A confirmation email has been sent to
					<span class="font-bold">${inputedEmail}</span>. Please open it
					and click the button inside to confirm your subscription.
				</p>
				<button class="text-white bg-[#36384E] rounded-lg p-3 mt-5">
					Dismiss message
				</button>
			</div>
        `
		);
	});
});
