const getUserReports = async (username, params) => {
  try {
    let response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/admin/report?username=${username}${params ? `&${params}` : ""}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getUserReports;
