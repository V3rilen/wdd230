const getMemberData = async () => {
  const response = await fetch("./data/members.json");
  console.log(response);
};

getMemberData();
