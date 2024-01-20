const student = {
  Name: "Rahul Kumar Mandal",
  Faculty: "BEIT",
  Sub1: "Math",
  Sub2: "Java",
  Sub3: "DSA",
  Age: 23,
  isPassedSub: function () {
    return this.Sub1 + " and " + this.Sub2;
  },
  isEligibleToVote: function () {
    return this.Age > 18;
  },
};

console.log(student.isPassedSub());
console.log(student.isEligibleToVote());
