let allDoctors = [];

const container = document.getElementById("container");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");
const search = document.getElementById("search");

async function fetchDoctors() {
  try {
    loading.style.display = "block";

    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }

    const data = await res.json();

    // 🔥 Expanded doctor data
    allDoctors = data.flatMap(user => ([
      createDoctor(user),
      createDoctor(user, true) // duplicate with variation
    ]));

    displayDoctors(allDoctors);

  } catch (err) {
    errorBox.innerText = err.message;
  } finally {
    loading.style.display = "none";
  }
}
function createDoctor(user, alt = false) {
  const specs = [
    "Cardiologist ❤️",
    "Neurologist 🧠",
    "Dermatologist 🧴",
    "Pediatrician 👶",
    "Orthopedic 🦴",
    "General Physician 🩺",
    "ENT Specialist 👂",
    "Dentist 🦷"
  ];

  const hospitals = [
    "Apollo Hospital",
    "Fortis Hospital",
    "AIIMS",
    "Global Medical Center",
    "City Care Hospital",
    "Sunrise Clinic"
  ];

  return {
    name: "Dr. " + user.name + (alt ? " Jr." : ""),
    specialization: specs[Math.floor(Math.random() * specs.length)],
    hospital: hospitals[Math.floor(Math.random() * hospitals.length)],
    country: user.address.city,
    email: user.email,
    experience: Math.floor(Math.random() * 20 + 5) + " years",
    rating: (Math.random() * 2 + 3).toFixed(1) + " ⭐",
    available: Math.random() > 0.5 ? "Available Today 🟢" : "Busy 🔴"
  };
}


function displayDoctors(doctors) {
  container.innerHTML = "";

  doctors.forEach(doc => {
    container.innerHTML += `
      <div class="card">
        <h3>${doc.name}</h3>
        <p><b>Specialization:</b> ${doc.specialization}</p>
        <p><b>Hospital:</b> ${doc.hospital}</p>
        <p><b>Location:</b> ${doc.country}</p>
        <p><b>Experience:</b> ${doc.experience}</p>
        <p><b>Rating:</b> ${doc.rating}</p>
        <p><b>Status:</b> ${doc.available}</p>
        <p><b>Email:</b> ${doc.email}</p>
      </div>
    `;
  });
}
search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = allDoctors.filter(doc =>
    doc.name.toLowerCase().includes(value) ||
    doc.specialization.toLowerCase().includes(value) ||
    doc.hospital.toLowerCase().includes(value)
  );

  displayDoctors(filtered);
});

fetchDoctors();