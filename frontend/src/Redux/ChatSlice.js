import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "./myAxios";
import socket from "./socket";

export const myConversations = createAsyncThunk(
  "client/myConversations",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await myAxios.get("/chat/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (e) {
      if (e.message == "Network Error") {
        return rejectWithValue("Check The Server");
      }
    }
  }
);
export const conversationMessages = createAsyncThunk(
  "client/conversationMessages",
  async (chatId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await myAxios.get(`/chat/messages/${chatId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (e) {
      if (e.message == "Network Error") {
        return rejectWithValue("Check The Server");
      }
    }
  }
);
export const sendMessage = createAsyncThunk(
  "client/sendMessage",
  async ({ receiver, text }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await myAxios.post(
        `/chat/sendMessage`,
        { receiver, text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Emit socket event for real-time message
      socket.emit("sendMessage", {
        senderId: JSON.parse(localStorage.getItem("userInfo"))._id,
        receiverId: receiver,
        text,
        chatId: null,
      });
      return res.data;
    } catch (e) {
      if (e.message == "Network Error") {
        return rejectWithValue("Check The Server");
      }
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    data: [],
    messages: [],
    error: null,
  },
  reducers: {
    setNewMessages: (state, action) => {
      if (!state.messages.conversationMessages) {
        state.messages.conversationMessages = [];
      }
      state.messages.conversationMessages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // Get User Conversations
    builder.addCase(myConversations.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(myConversations.rejected, (state, action) => {
      state.error = action.payload;
    });
    // Get Converation Message
    builder.addCase(conversationMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(conversationMessages.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

socket.on("getMessage", (data) => {
  // Dispatch action to add new message to state
  // This requires access to the store's dispatch, so we will export a function to set dispatch
});

let dispatchFunction = null;

export const setSocketDispatch = (dispatch) => {
  dispatchFunction = dispatch;
  socket.on("getMessage", (data) => {
    if (dispatchFunction) {
      dispatchFunction(setNewMessages(data));
    }
  });
};

export const { setNewMessages } = chatSlice.actions;
export default chatSlice.reducer;
