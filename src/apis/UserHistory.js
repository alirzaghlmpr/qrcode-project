const getUserHistory = async (username, params = null) => {
  try {
    let response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/admin/history?username=${username}${params ? `&${params}` : ""}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getUserHistory;
