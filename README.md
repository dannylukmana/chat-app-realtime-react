# Simple real-time chat web application using Ruby on Rails and React.js Starter Project

This is a starter project that combines a Ruby on Rails backend with a React.js frontend. This setup is ideal for building modern web applications with a clear separation between frontend and backend. It demonstrates how to build a real-time chat application using React for the frontend and Ruby on Rails 7 for the backend, with WebSockets enabling live communication.

**Key Components**

  **1. React Frontend**: React is used to build the user interface, handling the rendering of messages, chat input, and user interactions in real-time.

  **2. Ruby on Rails 7 Backend**: Rails 7 comes with built-in support for WebSockets via Action Cable, which allows real-time, bi-directional communication between the server and the client. Action Cable is   responsible for managing WebSocket connections, broadcasting messages, and ensuring communication between clients happens instantly.

  **3. WebSockets**: WebSockets provide full-duplex communication channels over a single TCP connection, enabling live data streaming between the client and the server without frequent HTTP requests. This makes it ideal for chat applications, where messages are transmitted instantly as users send them.

  **4. Action Cable**: This is a framework that integrates WebSocket connections into Rails, allowing Rails to handle multiple real-time connections. It enables chat messages to be broadcast in real time to all connected users.

**Basic Flow**
- When a user sends a message, the message is transmitted to the server using WebSockets.
- The server, using Action Cable, broadcasts the message to all subscribed clients.
- React listens for these messages and updates the chat interface instantly without page reloads.

## Implementation Steps
**Frontend Setup**:
  - **Technology**: React
  - **Styling**: Use a CSS.
  - **Real-Time Communication**: Implement WebSocket to handle real-time updates.
**Backend Setup**:
  - **Technology**: Node.js 
  - **WebSocket Server**: Use libraries like ws for a WebSocket server to handle real-time messaging.

**Frontend Implementation**
**Components**:
  - **Chat Window**: Displays messages and handles user input.
  - **Message List**: Shows the list of messages in the chatroom.
  - **Input Field**: Allows users to type and send messages.
**State Management**: Use React’s useState and useEffect hooks to manage and display messages.

**UI/UX Design**
- Ensure the chat window is scrollable and handles different message types gracefully.
- Use modern design principles to keep the UI clean and user-friendly.
- Implement responsive design to ensure usability on various devices.

This combination of React, Rails 7, WebSockets, and Action Cable is commonly used to build efficient, modern real-time applications, particularly chat systems.

Before you begin, ensure you have met the following requirements:

- **Ruby** (version 3.3.3)
- **Rails** (version 7.2.1)
- **Node.js** (version 20.12.0)
- **Yarn** (version 1.22.22)

You can verify your versions by running:

```
ruby -v
rails -v
node -v
yarn -v
```

## Getting Started

1. **Clone the Repository**
  To get a local copy of this project, run the following command:
  ```
  git clone https://github.com/dannylukmana/chat-app-realtime-react.git
  ```

2. **Navigate into the Project Directory**
  ```
  cd chat-app-realtime-react
  ```

3. **Install Ruby Gems**
  ```
  bundle install
  ```

4. **Jumping into VSCode**
  ```
  code .
  ```

> [!NOTE]
> Recommended using two terminals: one for the backend and one for the frontend

5. **Start the Backend**
  Open terminal 1 for Rails Server
  ```
  rails server
  ```
  open Local : http://127.0.0.1:3000 and click **Run pending migrations**
  
6. **Start the Frontend**
  Open Terminal 2 for React and direct to
  ```
  cd client
  ```

7. **Download and install dependencies for a project**
  ```
  npm install 
  ```

8. **Install Font Awesome**
  ```
  npm install @fortawesome/fontawesome-free
  ```
  **and**
  ```
  npm run dev
  ```
  open Local: http://localhost:5173/

## Specification 
- [x] Create a chatroom
- [x] Post messages with real-time updates to the view
- [x] Implement a tasteful UI
- [x] Use a modern JavaScript frontend (e.g., React)
- [x] No need for user authentication

## Report 
![LiveChatMessages-GoogleChrome2024-09-1217-17-49-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/7eca9066-764f-48a9-9db2-5f94ca78b3ab)


