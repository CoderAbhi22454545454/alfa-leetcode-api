const express = require("express");
const app = express();
const port = 3000;
const leetcode = require("./leetCode");

app.get("/", (req, res) => {
  res.json({
    routes: {
      userDetails: {
        "/:username": "get your profile Details",
        "/:username/badges": "get your badges",
        "/:username/solved": "get total number of question you solved",
        "/:username/contest": "get your contest details",
        "/:username/contest/history": "get all contest history",
        "/:username/submission": "get your last 20 submission",
        "/:username/submission?limit=7": "get some of your last submission",
        "/:username/ac_submission": "get your last 20 accepted submission",
        "/:username/ac_submission?limit=7": "get some of your last accepted submission",
        "/:username/calendar": "get your submission calendar",
      },
      problems: {
        dailyProblem: { "/daily": "get daily Problem" },
        singleProblem: { "/select?titleSlug=two-sum": "get selected Problem" },
        problemList: {
          "/problems": "get list of 20 problems",
          "/problems?limit=50": "get list of some problems",
          "/problems?tags=array+math": "get list problems on selected topics",
          "/problems?tags=array+math+string&limit=5":
            "get list some problems on selected topics",
        },
      },
    },
  });
});

//get the daily leetCode problem
app.get("/daily", leetcode.dailyProblem);

//get the selected question
app.get("/select", leetcode.selectProblem);

//get list of problems
app.get("/problems", leetcode.problems);

//get user profile details
app.get("/:username", leetcode.userData);
app.get("/:username/badges", leetcode.userBadges);
app.get("/:username/solved", leetcode.solvedProblem);
app.get("/:username/contest", leetcode.userContest);
app.get("/:username/contest/history", leetcode.userContestHistory);
app.get("/:username/submission", leetcode.submission);
app.get("/:username/ac_submission", leetcode.acSubmission);
app.get("/:username/calendar", leetcode.calendar);

app.listen(port, () => {
  console.log(`I am listening at http://localhost:${port}`);
});
