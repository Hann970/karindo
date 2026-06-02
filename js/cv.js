const nama = document.getElementById("nama");
const email = document.getElementById("email");
const telepon = document.getElementById("telepon");
const deskripsi = document.getElementById("deskripsi");
const pendidikan = document.getElementById("pendidikan");
const organisasi = document.getElementById("organisasi");
const skill = document.getElementById("skill");

nama.addEventListener("input", () => {
 document.getElementById("cvNama").innerText = nama.value;
});

email.addEventListener("input", () => {
 document.getElementById("cvEmail").innerText = email.value;
});

telepon.addEventListener("input", () => {
 document.getElementById("cvTelepon").innerText = telepon.value;
});

deskripsi.addEventListener("input", () => {
 document.getElementById("cvDeskripsi").innerText = deskripsi.value;
});

pendidikan.addEventListener("input", () => {
 document.getElementById("cvPendidikan").innerText = pendidikan.value;
});

organisasi.addEventListener("input", () => {
 document.getElementById("cvOrganisasi").innerText = organisasi.value;
});

skill.addEventListener("input", () => {

 let skills = skill.value.split(",");

 let output = "";

 skills.forEach(item => {
   output += `<li>${item.trim()}</li>`;
 });

 document.getElementById("cvSkill").innerHTML = output;

});