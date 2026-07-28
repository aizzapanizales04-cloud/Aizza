// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmdlAD8VWAhfQH_sS7ACSviLWF3M8IGak",
    authDomain: "aizza-3d822.firebaseapp.com",
    projectId: "aizza-3d822",
    storageBucket: "aizza-3d822.firebasestorage.app",
    messagingSenderId: "715346081633",
    appId: "1:715346081633:web:a4088d403d2a329fffb720",
    measurementId: "G-1CZH5GB8XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Save Button
document.getElementById("saveBtn").addEventListener("click", async () => {

    const flowerName = document.getElementById("flowerName").value;
    const flowerColor = document.getElementById("flowerColor").value;
    const season = document.getElementById("season").value;
    const gardener = document.getElementById("gardener").value;
    const notes = document.getElementById("notes").value;

    if (
        flowerName === "" ||
        flowerColor === "" ||
        season === "" ||
        gardener === "" ||
        notes === ""
    ) {
        alert("Please complete all fields.");
        return;
    }

    try {

        await addDoc(collection(db, "flowers"), {

            flowerName: flowerName,
            flowerColor: flowerColor,
            season: season,
            gardener: gardener,
            notes: notes,
            createdAt: new Date().toLocaleString()

        });

        alert("🌸 Flower information saved successfully!");

        document.getElementById("flowerName").value = "";
        document.getElementById("flowerColor").value = "";
        document.getElementById("season").value = "";
        document.getElementById("gardener").value = "";
        document.getElementById("notes").value = "";

    } catch (error) {

        console.log(error);
        alert("Error saving data.");

    }

});