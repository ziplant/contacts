export default function useHistory() {
  const pushHistory = (history, data, action) => {
    history.push({
      data: { ...data },
      action: action,
    });
  };

  const popHistory = (history) => {
    return history.pop();
  };

  return {
    pushHistory,
    popHistory,
  };
}
