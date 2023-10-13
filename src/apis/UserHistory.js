const getUserHistory = async (personID) => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/history/${personID}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getUserHistory;
