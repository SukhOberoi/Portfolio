import { Octokit } from "octokit";
var fs = require('fs');

const githubToken = "token here"

const octokit = new Octokit({ 
    auth: `${githubToken}`
  });


const data = await octokit.request('GET /users/{username}/repos', {
  username: 'SukhOberoi',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});
  

