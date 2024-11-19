// TwitterとGitHubのリンクIDを指定してください
const twitterID = "syr_tit"; // 例: your_twitter_id
const githubID = "syr1290t";   // 例: your_github_id

// リンクの生成
document.getElementById("twitter-link").href = `https://twitter.com/${twitterID}`;
document.getElementById("github-link").href = `https://github.com/${githubID}`;

// ターゲット属性を設定（新しいタブで開くように設定）
document.getElementById("twitter-link").setAttribute("target", "_blank");
document.getElementById("github-link").setAttribute("target", "_blank");
