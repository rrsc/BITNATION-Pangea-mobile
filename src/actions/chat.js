// @flow

import type { ProfileType, ChatSessionType, GiftedChatMessageType } from '../types/Chat';

export const SHOW_CHAT_SPINNER = 'SHOW_CHAT_SPINNER';
export const HIDE_CHAT_SPINNER = 'HIDE_CHAT_SPINNER';
export const FIND_USER_BY_KEY = 'FIND_USER_BY_KEY';
export const GET_PROFILE = 'GET_PROFILE';
export const NEW_CHAT_SESSION = 'NEW_CHAT_SESSION';
export const CHATS_UPDATED = 'CHATS_UPDATED';
export const ADD_CREATED_CHAT_SESSION = 'ADD_CREATED_CHAT_SESSION';
export const OPEN_CHAT_SESSION = 'OPEN_CHAT_SESSION';
export const SELECT_PROFILE = 'SELECT_PROFILE';
export const FETCH_ALL_CHATS = 'FETCH_ALL_CHATS';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const LOAD_CHAT_MESSAGES = 'LOAD_CHAT_MESSAGES';
export const CHAT_MESSAGES_LOADED = 'CHAT_MESSAGES_LOADED';
export const PANTHALASSA_MESSAGE_PERSISTED = 'PANTHALASSA_MESSAGE_PERSISTED';
export const ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE';
export const CHANGE_UNREAD_STATUS = 'CHANGE_UNREAD_STATUS';
export const UNREAD_STATUS_CHANGED = 'UNREAD_STATUS_CHANGED';

export type ShowSpinnerAction = { +type: 'SHOW_CHAT_SPINNER' };
export type HideSpinnerAction = { +type: 'HIDE_CHAT_SPINNER' };
export type FindUserByPubKeyAction = {
  +type: 'FIND_USER_BY_KEY',
  +key: string
};
export type GetProfileAction = {
  +type: 'GET_PROFILE',
  +identityKey: string,
  +callback: (profile: ProfileType | null, error: Error | null) => void,
};
export type NewChatSessionAction = {
  +type: 'NEW_CHAT_SESSION',
  +profile: ProfileType,
  +callback: () => void,
};
export type AddCreatedChatSessionAction = {
  +type: 'ADD_CREATED_CHAT_SESSION',
  +chat: ChatSessionType,
};
export type UpdateChatsAction = {
  +type: 'CHATS_UPDATED',
  +chats: Array<any>,
};
export type OpenChatAction = {
  +type: 'OPEN_CHAT_SESSION',
  +publicKey: string,
  +callback: () => void,
};
export type SelectProfileAction = {
  +type: 'SELECT_PROFILE',
  +profile: ProfileType,
};
export type FetchAllChatsAction = {
  +type: 'FETCH_ALL_CHATS',
}
export type SendMessageAction = {
  +type: 'SEND_MESSAGE',
  +message: string,
  +recipientPublicKey: string,
  +callback: () => void,
};
export type SaveMessageAction = {
  +type: 'SAVE_HUMAN_MESSAGE',
  +message: string,
};
export type LoadChatMessagesAction = {
  +type: 'LOAD_CHAT_MESSAGES',
  +recipientPublicKey: string,
  +fromMessageId: string,
}
export type ChatMessagesLoadedAction = {
  +type: 'CHAT_MESSAGES_LOADED',
  +recipientPublicKey: string,
  +messages: Array<any>,
}
export type PanthalassaMessagePersistedAction = {
  +type: 'PANTHALASSA_MESSAGE_PERSISTED',
  +payload: Object,
}
export type AddChatMessageAction = {
  +type: 'ADD_CHAT_MESSAGE',
  +publicKey: string,
  +message: GiftedChatMessageType,
}
export type ChangeUnreadStatusAction = {
  +type: 'CHANGE_UNREAD_STATUS',
  +recipientPublicKey: string,
  +hasUnreadMessages: boolean,
}
export type UnreadStatusChangedAction = {
  +type: 'UNREAD_STATUS_CHANGED',
  +recipientPublicKey: string,
  +hasUnreadMessages: boolean,
}

export type Action =
  | ShowSpinnerAction
  | HideSpinnerAction
  | FindUserByPubKeyAction
  | GetProfileAction
  | NewChatSessionAction
  | UpdateChatsAction
  | OpenChatAction
  | SelectProfileAction
  | FetchAllChatsAction
  | SendMessageAction
  | SaveMessageAction
  | LoadChatMessagesAction
  | ChatMessagesLoadedAction
  | PanthalassaMessagePersistedAction
  | AddChatMessageAction
  | ChangeUnreadStatusAction
  | UnreadStatusChangedAction;

/**
 * @desc Action for an action that shows spinner while processing in background
 * @returns {ShowSpinnerAction} An action
 */
export function showSpinner(): ShowSpinnerAction {
  return {
    type: SHOW_CHAT_SPINNER,
  };
}

/**
 * @desc Action for an action that hide spinner after the process is completed
 * @returns {HideSpinnerAction} An action
 */
export function hideSpinner(): HideSpinnerAction {
  return {
    type: HIDE_CHAT_SPINNER,
  };
}

/**
 * @desc Action for an action that find a user to chat with
 * @param {string} key Public key of the user
 * @returns {FindUserByPubKeyAction} An action.
 */
export function findUserByPublicKey(key: string): FindUserByPubKeyAction {
  return {
    type: FIND_USER_BY_KEY,
    key,
  };
}

/**
 * @desc Action for retrieving profile for identity key. Takes it either from database or network.
 * @param {string} identityKey Identity key of profile to be got
 * @param {function} callback Callback to be called with result or error
 * @returns {GetProfileAction} An action
 */
export function getProfile(identityKey: string, callback: (result: ProfileType | null, error: Error | null) => void): GetProfileAction {
  return {
    type: GET_PROFILE,
    identityKey,
    callback,
  };
}

/**
 * @desc Action for creating a new chat session
 * @param {Object} profile Profile of the user
 * @param {func} callback Callback
 * @returns {NewChatSessionAction} An action.
 */
export function newChatSession(profile: ProfileType, callback: () => void): NewChatSessionAction {
  return {
    type: NEW_CHAT_SESSION,
    profile,
    callback,
  };
}

/**
 * @desc Action for adding a newly created chat session
 * @param {ChatSessionType} chat Created chat.
 * @returns {AddCreatedChatSessionAction} An action.
 */
export function addCreatedChatSession(chat: ChatSessionType): AddCreatedChatSessionAction {
  return {
    type: ADD_CREATED_CHAT_SESSION,
    chat,
  };
}

/**
 * @desc Action for updating chats
 * @param {Array<ChatSessionType>} chats Updated chats
 * @returns {UpdateChatsAction} An action
 */
export function chatsUpdated(chats: Array<ChatSessionType>): UpdateChatsAction {
  return {
    type: CHATS_UPDATED,
    chats,
  };
}

/**
 * @desc Action for opening chat session from the list
 * @param {string} publicKey Public Key of the chat session
 * @param {func} callback Callback
 * @returns {OpenChatAction} An action
 */
export function openChat(publicKey: string, callback: () => void): OpenChatAction {
  return {
    type: OPEN_CHAT_SESSION,
    publicKey,
    callback,
  };
}

/**
 * @desc Action for getting selected profile
 * @param {Object} profile Public Key of the chat session
 * @returns {SelectProfileAction} An action
 */
export function selectProfile(profile: ProfileType): SelectProfileAction {
  return {
    type: SELECT_PROFILE,
    profile,
  };
}

/**
 * @desc Action to fetch all chats
 * @returns {FetchAllChatsAction} An action
 */
export function fetchAllChats(): FetchAllChatsAction {
  return {
    type: FETCH_ALL_CHATS,
  };
}

/**
 * @desc Action for sending message
 * @param {string} recipientPublicKey The recipient's public key
 * @param {string} message Message to send
 * @param {func} callback Callback
 * @returns {SendMessageAction} An action
 */
export function sendMessage(recipientPublicKey: string, message: string, callback: () => void = () => undefined): SendMessageAction {
  return {
    type: SEND_MESSAGE,
    recipientPublicKey,
    message,
    callback,
  };
}

/**
 * @desc Action for loading chat messages
 * @param {string} recipientPublicKey Public Key of the chat recipient
 * @param {string} fromMessageId Id of message to start load from
 * @returns {LoadChatMessagesAction} An action
 */
export function loadChatMessages(recipientPublicKey: string, fromMessageId: string = '0'): LoadChatMessagesAction {
  return {
    type: LOAD_CHAT_MESSAGES,
    recipientPublicKey,
    fromMessageId,
  };
}

/**
 * @desc Action for loaded messages
 * @param {string} recipientPublicKey The public key of the recipient
 * @param {Array<any>} messages Loaded messages
 * @param {number} expectedCount Number of message that was requested. Used to determine if there are older messages.
 * @returns {ChatMessagesLoadedAction} An action
 */
export function chatMessagesLoaded(recipientPublicKey: string, messages: Array<any>, expectedCount: number): ChatMessagesLoadedAction {
  return {
    type: CHAT_MESSAGES_LOADED,
    recipientPublicKey,
    messages,
    expectedCount,
  };
}

/**
 * @desc Action for handling a panthalassa persisted message event
 * @param {Object} payload The event payload
 * @returns {PanthalassaMessagePersistedAction} An action
 */
export function panthalassaMessagePersisted(payload: Object): PanthalassaMessagePersistedAction {
  return {
    type: PANTHALASSA_MESSAGE_PERSISTED,
    payload,
  };
}

/**
 * @desc Action for adding a chat message
 * @param {string} publicKey The chat public key
 * @param {GiftedChatMessageType} message The chat message
 * @returns {AddChatMessageAction} An action
 */
export function addChatMessage(publicKey: string, message: GiftedChatMessageType): AddChatMessageAction {
  return {
    type: ADD_CHAT_MESSAGE,
    publicKey,
    message,
  };
}

/**
 * @desc Action creator for an action that requests change a conversation's new messages flag
 * @param {string} recipientPublicKey Public Key of the chat recipient
 * @param {boolean} hasUnreadMessages Status flag for new messages on chat
 * @returns {ChangeUnreadStatusAction} An action
 */
export function changeUnreadStatus(recipientPublicKey: string, hasUnreadMessages: boolean): ChangeUnreadStatusAction {
  return {
    type: CHANGE_UNREAD_STATUS,
    recipientPublicKey,
    hasUnreadMessages,
  };
}

/**
 * @desc Action creator for an action that is called when conversation's new messages flag is changed
 * @param {string} recipientPublicKey Public Key of the chat recipient
 * @param {boolean} hasUnreadMessages Status flag for new messages on chat
 * @returns {UnreadStatusChangedAction} An action
 */
export function unreadStatusChanged(recipientPublicKey: string, hasUnreadMessages: boolean): UnreadStatusChangedAction {
  return {
    type: UNREAD_STATUS_CHANGED,
    recipientPublicKey,
    hasUnreadMessages,
  };
}
