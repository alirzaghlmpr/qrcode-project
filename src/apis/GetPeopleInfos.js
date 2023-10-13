const getPeopleInfos = async () => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/people`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getPeopleInfos;
