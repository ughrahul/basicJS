const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const random = require("random");

const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();

  const x = random.int(0, 54);
  const y = random.int(0, 6);

  const commitDate = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: commitDate,
  };

  console.log(commitDate);

  // Set the GIT_AUTHOR_DATE and GIT_COMMITTER_DATE environment variables for the commit
  process.env.GIT_AUTHOR_DATE = commitDate;
  process.env.GIT_COMMITTER_DATE = commitDate;

  jsonfile.writeFile(FILE_PATH, data, (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      simpleGit()
        .add([FILE_PATH])
        .commit(
          commitDate,
          { "--date": commitDate },
          makeCommit.bind(this, --n)
        );
    }
  });
};

makeCommit(500); // Change this number to the desired number of commits
