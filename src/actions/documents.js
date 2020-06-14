export const GET_DOCUMENTS = "GET_DOCUMENTS";

export const getDocuments = (term) => {
  return {
    type: GET_DOCUMENTS,
    payload: term,
  };
};
