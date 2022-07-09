// GraphQL object to create a new live chat

const { faker } = require('@faker-js/faker')

export const arenaChat = {
  operationName: 'createChatRoom',
  variables: {
    input: {
      name: faker.random.word(),
      language: 'en-us',
      chatPreModerationIsEnabled: false,
      chatPreviewEnabled: true,
      chatRequestModeratorIsEnabled: false,
      chatClosedIsEnabled: false,
      chatAutoOpen: true,
      privateChatIsEnabled: true,
      directMessageOnlyForModeratos: true,
      allowSendGifs: true,
      showEmojiButton: true,
      chatColor: '#5021A6',
      allowShareUrls: false,
      chatSlowModeInterval: 0,
      showOnlineUsersNumber: true,
      reactionsEnabled: true,
      profanityFilterType: '',
      signUpSettings: { type: 'SIGN_UP_REQUIRED', suggest: false },
      standalone: true,
      useNewReactionAPI: true,
      siteId: '62c86e4ce02381638d3c9fba',
      global: false,
    },
  },
  query:
    'mutation createChatRoom($input: CreateChatRoomInput!) {  createChatRoom(input: $input) {    _id    chatPreviewEnabled    createdAt    createdBy    slug    name  }}',
}
