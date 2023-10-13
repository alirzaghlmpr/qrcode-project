const qrcodeValidation = async (data) => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/verifyQRcode`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        method: "POST",
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default qrcodeValidation;
