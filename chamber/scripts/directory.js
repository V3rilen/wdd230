const getMemberData = async () => {
  const data = await fetch("./data/members.json").then((response) =>
    response.json()
  );
  console.log(data);
};

getMemberData();
