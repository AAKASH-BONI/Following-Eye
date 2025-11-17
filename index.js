// const eyes = document.querySelectorAll(".eye");

// document.addEventListener("mousemove", (event) => {
//   eyes.forEach((eye) => {
//     const pupil = eye.querySelector(".pupil");
//     const rect = eye.getBoundingClientRect();

//     // Eye center position
//     const eyeX = rect.left + rect.width / 2;
//     const eyeY = rect.top + rect.height / 2;

//     // Mouse position relative to eye
//     const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
//     const distance = Math.min(25, Math.hypot(event.clientX - eyeX, event.clientY - eyeY) / 8);

//     // Move pupil in direction of cursor
//     const x = Math.cos(angle) * distance;
//     const y = Math.sin(angle) * distance;

//     pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
//   });
// });
