const getUserHistory = async (personID, params = null) => {
  try {
    let response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/admin/history?personId=${personID}${params ? `&${params}` : ""}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getUserHistory;
