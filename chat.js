// Chat Widget Functionality
class ChatWidget {
    constructor() {
        this.chatToggle = document.querySelector('.chat-toggle');
        this.chatWindow = document.querySelector('.chat-window');
        this.closeButton = document.querySelector('.close-chat');
        this.sendButton = document.querySelector('.send-button');
        this.chatInput = document.querySelector('.chat-input textarea');
        this.messagesContainer = document.querySelector('.messages');
        
        this.init();
    }

    init() {
        this.addEventListeners();
    }

    addEventListeners() {
        this.chatToggle.addEventListener('click', () => this.toggleChat());
        this.closeButton.addEventListener('click', () => this.closeChat());
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
    }

    toggleChat() {
        this.chatWindow.classList.toggle('open');
        this.updateUnreadCount(0);
    }

    closeChat() {
        this.chatWindow.classList.remove('open');
    }

    sendMessage() {
        const message = this.chatInput.value.trim();
        if (message) {
            this.addMessage(message, 'sent');
            this.chatInput.value = '';
            this.simulateResponse();
        }
    }

    addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = content;
        
        const messageTime = document.createElement('div');
        messageTime.classList.add('message-time');
        messageTime.textContent = this.getCurrentTime();
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(messageTime);
        this.messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    simulateResponse() {
        setTimeout(() => {
            this.addMessage('Thank you for your message! How can we assist you further?', 'received');
        }, 1000);
    }

    updateUnreadCount(count) {
        const unreadCount = document.querySelector('.unread-count');
        unreadCount.textContent = count;
        unreadCount.style.display = count > 0 ? 'flex' : 'none';
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}

// Initialize Chat Widget
document.addEventListener('DOMContentLoaded', () => {
    new ChatWidget();
});