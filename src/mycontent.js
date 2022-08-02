console.log("Hello World!")

fs=require('fs')
fs.readdir("./", (err,filename)=>console.log(filename))
fs.readdir("./ProjectB/folder", (err,filename)=>console.log(filename))

// const octokit = new Octokit({
//     auth: 'personal-access-token123'
// })
//
// await octokit.request('POST /repos/{owner}/{repo}/pulls', {
//     owner: 'OWNER',
//     repo: 'REPO',
//     title: 'Pull request from ProjectA',
//     body: 'ProjectA has been updated.  Update ProjectB to consume latest.',
//     head: 'octocat:new-feature',
//     base: 'main'
// })
