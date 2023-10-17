const updateLeavage = async (vacationID, data) => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/vacation?vacationId=${vacationID}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default updateLeavage;
