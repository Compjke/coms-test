// Temporary file for setting the document title based on language preference
export const setDocumentTitle = (language: 'uk' | 'en') => {
  if (language === 'uk') {
    document.title = 'CoMS - Система управління конференціями';
  } else {
    document.title = 'CoMS - Conference Management System';
  }
};
