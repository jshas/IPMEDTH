import moment from "moment";
import { dataset_dev } from "svelte/internal";
import { writable, readable } from "svelte/store";

export const evaluationTabs = writable({
    tabs: ["opdracht", "kernkwadranten", "doelen", "afsluiting"],
});

export const activeEvaluationTab = writable({
    // Makes active tab persistent during navigation
    tab: "doelen",
});

export const activeGoalTab = writable({
    tab: "persoonlijk",
});

export const sideBar = writable({
    // Makes sidebar toggle persistent during navigation
    open: false,
});

export const pop = writable({
    project: {
        description: "",
        result: "",
        success: "",
        manager: "",
        reportsOthers: "",
    },
    coreQuadrants: [],
    goals: [],
    goalSteps: [],
});

// For testing purposes only
export const currentPopTaskQuestions = readable({
    goal: "Wat is je overkoepelende doel?",
    result: "Wat is het resultaat van het behalen van dit doel?",
    success: "Wanneer ben je tevreden?",
    manager: "Hoe kan je manager je helpen?",
    reportsOthers: "Rapporteer je aan anderen?",
});

export const currentPopTask = writable({
    goal: "Mijn overkoepelende doel is om meer overzicht te creëren in mijn werkzaamheden.",
    result: "Wanneer ik meer overzicht heb, kan ik mijn werkzaamheden beter plannen en prioriteren.",
    success: "Ik heb dit doel bereikt wanneer ik in het komende project minder stress ervaar.",
    manager:
        "Mijn manager, Vera PM, kan mij helpen door mij te helpen met het stellen van prioriteiten.",
    reportsOthers: "Ik rapporteer enkel aan Vera PM voor mijn werkzaamheden.",
});

export const currentPopCoreQuadrants = readable({
    coreQuality: "Ik ben een harde werker.",
    pitfall: "Ik ben een perfectionist.",
    allergy: "Ik kan niet tegen onduidelijkheid.",
    challenge: "Ik wil graag alles zelf doen.",
});

export const currentPopGoal1 = readable({
    goalId: 1001,
    goalType: "Gezondheid",
    what: "Ik wil graag meer overzicht creëren in mijn werkzaamheden.",
    why: "Wanneer ik meer overzicht heb, kan ik mijn werkzaamheden beter en prioriteren.",
    satisfied:
        "Ik ben tevreden wanneer ik in het komende project minder stress ervaar.",
    support:
        "Ik heb ondersteuning nodig van mijn manager, Vera PM, om mij te helpen met het stellen van prioriteiten.",
    // deadline: moment().format("Y-M-D"),
    deadline: moment().add(1, "day").format("MMMM Do YYYY, h:mm:ss"),
    feedback:
        "Ik wens feedback van mijn behandelaar te ontvangen over mijn voortgang.",
    goalSteps: [
        {
            stepId: 1,
            step: "Een agenda opzetten.",
            description:
                "Ik geloof dat een agenda mij zou kunnen helpen door het tastbaar te maken",
        },
    ],
});

export const currentPopGoal2 = readable({
    goalId: 1002,
    goalType: "Persoonlijk",
    what: "Ik wil graag meer doen aan mijn hobby's buiten werk.",
    why: "Wanneer ik meer tijd besteed aan mijn hobby's, kan ik mijn werk beter loslaten.",
    satisfied:
        "Ik ben tevreden wanneer ik in het komende project elk weekend gemiddeld 2 uur per maand aan mijn hobby (boogschieten) heb besteed.",
    support:
        "Ik heb ondersteuning nodig van mijn partner, Lou, om mij te helpen met het stellen van prioriteiten. Ik zou graag 's avonds tijd over willen houden om tot rust te komen voor het weekend.",
        deadline: moment().add(1, "day").format("MMMM Do YYYY, h:mm:ss"),
    feedback:
        "Ik wens feedback van mijn trainingspartner te ontvangen over mijn voortgang. Ik denk dat het tot rust komen voor het weekend mij zal helpen om beter te present te zijn tijdens het boogschieten.",
    goalSteps: [
        {
            stepId: 1,
            step: "Vaste tijden inplannen:",
            description: "Vaste tijden inplannen voor het boogschieten.",
        },
    ],
});

export const currentPopGoal3 = readable({
    goalId: 1003,
    goalType: "Organisatie",
    what: "Ik wil bijdragen aan het verbeteren van de werksfeer.",
    why: "Wanneer ik bijdraag aan het verbeteren van de werksfeer, kan ik beter samenwerken met mijn collega's.",
    satisfied:
        "Ik ben tevreden wanneer ik in het komende project 1 keer per week een compliment geef aan een collega.",
    support:
        "Ik zou graag ondersteuning van mijn teamleden willen ontvangen tijdens dit proces.",
        deadline: moment().add(1, "day").format("MMMM Do YYYY, h:mm:ss"),
    feedback:
        "Ik wens feedback van mijn manager (Vera PM) te ontvangen na afloop van de POP cyclus.",
    goalSteps: [
        {
            stepId: 1,
            step: "Neem elke ochtend 5 minuten om een collega een compliment te geven.",
            description:
                "De sfeer van de organisatie begint bij de individu.",
        },
    ],
});

export const currentPopGoal4 = readable({
    goalId: 1004,
    goalType: "Training",
    what: "Ik wil graag mijn communicatievaardigheden verbeteren.",
    why: "Wanneer ik mijn communicatievaardigheden verbeter, kan ik beter samenwerken met mijn collega's.",
    satisfied:
        "Ik ben tevreden wanneer ik in het komende project 1 keer per week een compliment geef aan een collega.",
    support:
        "Ik zou graag ondersteuning van mijn directe projectleden willen ontvangen. .",
        deadline: moment().add(1, "day").format("MMMM Do YYYY, h:mm:ss"),
    feedback:
        "Ik wens feedback van mijn directe collega's (Vera PM) te ontvangen na afloop van het komende project.",
    goalSteps: [
        {
            stepId: 1,
            step: "Een agenda opzetten.",
            description:
                "Ik wil vaste zelf-reflectie momenten hiervoor opzetten.",
        },
    ],
});

export const currentPopNotes = writable({
    notes: [
        {
            date: "",
            time: "",
            note: "",
        },
    ],
});

export const currentPop = writable({
    // Writable for testing purposes only, should be readable for evaluation purposes
    id: 1, // Readable
    user_id: 4, // Karin Tonnemann
    name: "Karin Tonnemann", // Readable
    task: currentPopTask, // Readable
    coreQuadrants: currentPopCoreQuadrants, // Readable
    goals: [currentPopGoal1, currentPopGoal2, currentPopGoal3, currentPopGoal4], // Readable
    notes: currentPopNotes, // Writable
});

export const currentPopGoals = [
    currentPopGoal1,
    currentPopGoal2,
    currentPopGoal3,
    currentPopGoal4,
]; // Readable

export const notes = writable(JSON.parse(localStorage.notes || "[]"));

notes.subscribe((value) => (localStorage.notes = JSON.stringify(value)));
