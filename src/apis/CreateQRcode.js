const createQRcode = async (personID) => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/createQRcode/${personID}`,
      { method: "POST" }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default createQRcode;
