import http from '../interceptor';

export const registerRequest = (data) =>
  http.post('entrance/registration', data);

export const loginRequest = (data) => http.post('entrance/login', data);

export const getUser = () => http.get('user/getUser');

export const payMent = (data) => http.post('user/pay', data.formData);

export const changeMark = (data) => http.put('user/changeMark', data);

export const cashOut = (data) => http.post('user/cashout', data);

export const updateUser = (data) => http.put('user/updateUser', data);

export const getPreviewChat = (data) => http.post('chat/getPreview', data);

export const getDialog = ({ interlocutorId }) =>
  http.get(`chat/${interlocutorId}`);

export const newMessage = (data) => http.post('chat/newMessage', data);

export const changeChatFavorite = (data) => http.put('chat/favorite', data);

export const changeChatBlock = (data) => http.put('chat/blackList', data);

export const getCatalogList = (data) => http.post('chat/getCatalogs', data);

export const addChatToCatalog = (data) =>
  http.post('chat/addNewChatToCatalog', data);

export const createCatalog = (data) => http.post('chat/createCatalog', data);

export const deleteCatalog = (data) => http.delete('chat/deleteCatalog', {
  params: {
    catalogId: data.catalogId
  }
});

export const removeChatFromCatalog = (data) =>
  http.delete('chat/removeChatFromCatalog', {
    params: {
      catalogId: data.catalogId,
      chatId: data.chatId
    },
  });

export const changeCatalogName = (data) =>
  http.put('chat/updateNameCatalog', data);

export const dataForContest = (data) =>
  http.post('contests/dataForContest', data);

export const updateContest = (data) =>
  http.put(`contests/${data.get('contestId')}`, data);

export const setNewOffer = (data) => http.post('contests/setNewOffer', data);

export const setOfferStatus = (data) =>
  http.post('contests/setOfferStatus', data);

export const downloadContestFile = (data) =>
  http.get(`contests/downloadFile/${data.fileName}`);

export const getCustomersContests = (data) =>
  http.get('contests/customers', {
    params: {
      status: data.contestStatus,
      limit: data.limit,
      offset: data.offset,
    },
  });

export const getActiveContests = (data) => {
  return http.get('contests/all', {
    params: {
    offset:data.offset,
    limit: data.limit,
    typeIndex: data.typeIndex,
    contestId: data.contestId,
    industry:data.industry,
    awardSort:data.awardSort,
    ownEntries:data.ownEntries
    }
  });
};

export const getContestById = ({ contestId }) =>
  http.get(`contests/${contestId}`);

  export const getAllOffers = () => http.get('moderator/getAllOffers')
