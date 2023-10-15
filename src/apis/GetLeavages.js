const getLeavages = async () => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/vacations`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getLeavages;
