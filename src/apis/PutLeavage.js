const updateLeavage = async (personID, data) => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/vacation/${personID}`,
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
