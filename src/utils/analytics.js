import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Configuración de Firebase (debes reemplazar esto con tus credenciales de la consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyBRQC0ZXA4KMRkvLpMn8PtkBOca7f660kQ",
  authDomain: "chocoaventura-6d226.firebaseapp.com",
  projectId: "chocoaventura-6d226",
  storageBucket: "chocoaventura-6d226.firebasestorage.app",
  messagingSenderId: "583862548369",
  appId: "1:583862548369:web:862d0505a5448a38148c30",
  measurementId: "G-RPS3K9XB43"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/**
 * Evento: Empezar Planificación
 */
export const trackStartPlanning = () => {
  console.log("¡La función trackStartPlanning se ha ejecutado!"); 
  logEvent(analytics, 'start_planning', {
    page_location: window.location.href,
    vibe: 'adventurous'
  });
};

/**
 * Evento: Grupo Creado
 * @param {string} groupId - ID del grupo creado
 * @param {number} participants - Número de participantes
 */
export const trackGroupCreated = (groupId, participants) => {
  logEvent(analytics, 'group_created', {
    group_id: groupId,
    num_participants: participants
  });
};

/**
 * Evento: Swipe de Actividad
 * @param {string} activityTitle - Nombre de la actividad
 * @param {string} direction - 'left' (nope) o 'right' (like)
 */
export const trackActivitySwipe = (activityTitle, direction) => {
  logEvent(analytics, 'activity_swipe', {
    activity_name: activityTitle,
    direction: direction,
    timestamp: new Date().toISOString()
  });
};

export default analytics;
