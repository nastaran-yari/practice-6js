const userList = [
  {
    name: "nastaran yari",
    age: 20,
    id: "20ghjlrkdl",
    FieldofStudy: "experimental",
  },
  {
    name: "nazanin jafari",
    age: 17,
    id: "17 jhapruo",
    FieldofStudy: "Mathematics",
  },
];

console.log(userList);

const addList = (user) => {
  userList.push(user);
};

addList({
  name: "ali mohammadi",
  age: 22,
  id: "22ghjiaklkp;dl",
  FieldofStudy: "experimental",
});

console.log(userList());

const editUser = (id, { user }) => {
  const userIndex = userList.findIndex((item) => item.id === id);
};

editUser("20ghjlrkdl", {
  name: "nastaran yari",
  age: 50,
  id: "20ghjlrkdl",
  FieldofStudy: "experimental",
});

console.log(userList);

const delitUser = (id) => {
  const delitUser = userList.filter((item) => item.id !== id);
};

console.log(delitUser("20ghjlrkdl"))
