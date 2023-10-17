const getUserLeavages = async (username) => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/vacations?username=${username}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getUserLeavages;
