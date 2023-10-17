const getUserReports = async (personID, params) => {
  try {
    let response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/admin/report?personId=${personID}${params ? `&${params}` : ""}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getUserReports;
