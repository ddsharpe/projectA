// Load BOM file from downstream Project B
bomFilename = process.env.WORKSPACE + '/downstream/projectB/folder/bom.json';
const jsonData=require(bomFilename);

// locate data in BOM that needs to change
const project = jsonData['components'].find(element => element['name'] === "projectA");

foundTag = false;
if (project !== undefined) {
    const subfolder = project['subcomponents'].find(element => element['name'] === "projectA")
    if (subfolder !== undefined) {
        const image = subfolder['images'].find(element => element['image'] === "yyyy")
        image['tag'] = "v2.0-derek"
        console.log(image)
        foundTag = true;
    }
}

if (foundTag) {
    try {
        const fs=require('fs');
        const data = `${JSON.stringify(jsonData, null, 2)}\n`
        fs.writeFileSync(bomFilename, data)
    } catch (e) {
        console.error(e);
    }
} else {
    console.error('Unable to locate BOM file in Project B')
    process.exit(1)
}

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
