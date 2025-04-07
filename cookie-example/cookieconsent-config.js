import "./cookieconsent.umd.js";

// Enable dark mode
document.documentElement.classList.add("cc--darkmode");

const content = document.getElementById("content");

// Show content by making it visible
function showContent() {
    content.classList.add("visible");
}

CookieConsent.run({
    onInitialise: (status) => {
        console.log("CookieConsent initialized with status:", status);
        // Check if consent was already given
        if (status === 'allow') {
            showContent();
        }
    },
    onStatusChange: (status, chosenBefore) => {
        console.log("Consent status changed:", status);
        console.log("Chosen before:", chosenBefore);
        if (status === 'allow') {
            showContent();
        }
    },
    onConsent: ({ cookie }) => {
        console.log("Consent given:", cookie);
        showContent();
    },
    onModalHide: ({ modalName }) => {
        console.log("Modal hidden:", modalName);
    },
    guiOptions: {
        consentModal: {
            layout: "bar",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: true,
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false,
        },
    },
    categories: {
        necessary: {
            readOnly: true,
        },
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Hello traveller, it's cookie time!",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer:
                        '<a href="#link">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>',
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        },
                        {
                            title:
                                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                            description:
                                "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                            linkedCategory: "necessary",
                        },
                        {
                            title: "More information",
                            description:
                                'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
                        },
                    ],
                },
            },
        },
    },
    disablePageInteraction: true,
});