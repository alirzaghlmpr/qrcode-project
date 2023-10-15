const getHistory = async (params = null) => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/history`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getHistory;
