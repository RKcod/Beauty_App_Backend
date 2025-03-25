const { Server } = require("socket.io");

class WebSocketService {
  constructor() {
    this.io = null;
  }

  initialize(server) {
    this.io = new Server(server, {
      cors: {
        origin: "*", 
        methods: ["GET", "POST"],
      },
    });

    this.io.on("connection", (socket) => {
      console.log(`🔌 User connected: ${socket.id}`);

      socket.on("joinConversation", ({ userId }) => {
        socket.join(`user_${userId}`);
        console.log(`📩 User ${userId} joined their room.`);
      });

      socket.on("disconnect", () => {
        console.log(`❌ User disconnected: ${socket.id}`);
      });
    });
  }

  emitToUser(userId, event, data) {
    if (this.io) {
      this.io.to(`user_${userId}`).emit(event, data);
    }
  }

  // ✅ Nouvelle méthode pour émettre dans une conversation
  emitToConversation(conversationId, event, data) {
    if (this.io) {
      console.log(`📢 Emitting event "${event}" to conversation_${conversationId}`, data);
      this.io.to(`conversation_${conversationId}`).emit(event, data);
    }
  }
}

module.exports = new WebSocketService();
