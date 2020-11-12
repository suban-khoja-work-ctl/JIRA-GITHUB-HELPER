const GITHUB_PR_BASE_URL = 'https://github.com/CenturyLink/pxapp-salesforce/pull/';
const JIRA_ISSUE_BASE_URL = 'https://ctl.atlassian.net/browse/';
const JIRA_ISSUE_NAME = 'QTAPO';
const URL_OPEN_BEHAVIOUR = '_blank';

function goto(type){
    let url2Open;
    if(type === 'GITHUB'){
        let pr_no = document.getElementById('pr-input').value;
        if(!pr_no) return;
        url2Open = GITHUB_PR_BASE_URL+ pr_no;
    }else if(type === 'JIRA'){
        let jira_no = document.getElementById('jira-input').value;
        if(!jira_no) return;
        url2Open = JIRA_ISSUE_BASE_URL+JIRA_ISSUE_NAME+'-'+jira_no;
    }
    if(url2Open) window.open(url2Open,URL_OPEN_BEHAVIOUR);
}
