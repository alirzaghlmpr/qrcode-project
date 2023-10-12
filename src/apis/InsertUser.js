const insertUser = async (data) => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/person/create`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    return response;
  } catch (err) {
    return err;
  }
};

export default insertUser;
