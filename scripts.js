import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

document.addEventListener('DOMContentLoaded', () => {
    Chatbot.init({
        chatflowid: "8be0b0fd-2701-41ca-86c8-e87aefcad09f",
        apiHost: "https://augustocsr-flowiseai.hf.space",
        chatflowConfig: {},
        theme: {
            button: {
                backgroundColor: "white",
                right: 20,
                bottom: 20,
                size: 48,
                dragAndDrop: true,
                iconColor: "black",
                customIconSrc: "./img/report.png",
                autoWindowOpen: {
                    autoOpen: false, //parameter to control automatic window opening
                    openDelay: 2, // Optional parameter for delay time in seconds
                    autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
                    },
            },
            tooltip: {
                showTooltip: true,
                tooltipMessage: 'Precisa de ajuda com seu treino?👋',
                tooltipBackgroundColor: 'white',
                tooltipTextColor: 'black',
                tooltipFontSize: 20,
            },
            chatWindow: {
                showTitle: true,
                title: 'AI Training',
                titleAvatarSrc: './img/weightlifter.png',
                showAgentMessages: true,
                welcomeMessage: 'Olá! Eu sou o AI Training Assistant. Em que posso ajudá-lo do seu treino?',
                errorMessage: 'Desculpe, não foi possível processar sua mensagem. Por favor, tente novamente.',
                backgroundColor: "#ffffff",
                backgroundImage: './img/backgroundchat.jpg',
                height: 700,
                width: 400,
                fontSize: 16,
                starterPrompts: ['Desejo um exercício de quadríceps', 'Desejo um exercício para a posterior da coxa', 'Desejo um exercício de panturrilha', 'Desejo um exercício de peitoral', 'Desejo um exercício para a dorsal', 'Desejo um exercício de bíceps', 'Desejo um exercício de tríceps'],
                starterPromptFontSize: 15,
                clearChatOnReload: false,
                botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#303235",
                    showAvatar: true,
                    avatarSrc: "./img/weightlifter.png",
                },
                userMessage: {
                    backgroundColor: "green",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc: "./img/trainer.png",
                },
                textInput: {
                    placeholder: ' Digite sua dúvida',
                    backgroundColor: '#ffffff',
                    textColor: '#303235',
                    sendButtonColor: 'black',
                    maxChars: 100,
                    maxCharsWarningMessage: 'Você excedeu o limite de caracteres. Por favor, insira menos de 100 caracteres.',
                    autoFocus: true,
                    sendMessageSound: true,
                    receiveMessageSound: true,
                },
                feedback: {
                    color: '#303235',
                },
                footer: {
                    textColor: '#303235',
                    text: 'Powered by',
                    company: 'Flowise',
                    companyLink: 'https://flowiseai.com',
                }
            }
        }
    });
});
