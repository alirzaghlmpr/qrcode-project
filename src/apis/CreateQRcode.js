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


/**
 * 
 * 
 * 
 * const insertUser = async (data) => {
  console.log(data);
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/person/create`,
      {
        headers: {
          "Content-Type": "application/json",
        },
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


 */
