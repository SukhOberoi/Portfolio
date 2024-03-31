import { Octokit } from "octokit";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Skeleton } from "./ui/skeleton";

const sampleres = {
	status: 200,
	url: "https://api.github.com/users/SukhOberoi/repos",
	headers: {
		"access-control-allow-origin": "*",
		"access-control-expose-headers":
			"ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset",
		"cache-control": "private, max-age=60, s-maxage=60",
		"content-encoding": "gzip",
		"content-security-policy": "default-src 'none'",
		"content-type": "application/json; charset=utf-8",
		date: "Sat, 30 Mar 2024 11:44:54 GMT",
		etag: 'W/"b9ee1808b204ae411f0dda2449adeee22cf59d2c5181758933438a4f63654193"',
		"referrer-policy":
			"origin-when-cross-origin, strict-origin-when-cross-origin",
		server: "GitHub.com",
		"strict-transport-security":
			"max-age=31536000; includeSubdomains; preload",
		"transfer-encoding": "chunked",
		vary: "Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With",
		"x-accepted-oauth-scopes": "",
		"x-content-type-options": "nosniff",
		"x-frame-options": "deny",
		"x-github-api-version-selected": "2022-11-28",
		"x-github-media-type": "github.v3; format=json",
		"x-github-request-id": "FFD9:1709AC:49BD9B2:4D117DA:6607FB35",
		"x-oauth-scopes": "repo, user",
		"x-ratelimit-limit": "5000",
		"x-ratelimit-remaining": "4995",
		"x-ratelimit-reset": "1711800619",
		"x-ratelimit-resource": "core",
		"x-ratelimit-used": "5",
		"x-xss-protection": "0",
	},
	data: [
		{
			id: 769647612,
			node_id: "R_kgDOLd_j_A",
			name: "activist",
			full_name: "SukhOberoi/activist",
			private: false,
			owner: [Object],
			html_url: "https://github.com/SukhOberoi/activist",
			description: "An open-source activism platform",
			fork: true,
			url: "https://api.github.com/repos/SukhOberoi/activist",
			forks_url: "https://api.github.com/repos/SukhOberoi/activist/forks",
			keys_url:
				"https://api.github.com/repos/SukhOberoi/activist/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/SukhOberoi/activist/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/SukhOberoi/activist/teams",
			hooks_url: "https://api.github.com/repos/SukhOberoi/activist/hooks",
			issue_events_url:
				"https://api.github.com/repos/SukhOberoi/activist/issues/events{/number}",
			events_url:
				"https://api.github.com/repos/SukhOberoi/activist/events",
			assignees_url:
				"https://api.github.com/repos/SukhOberoi/activist/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/SukhOberoi/activist/branches{/branch}",
			tags_url: "https://api.github.com/repos/SukhOberoi/activist/tags",
			blobs_url:
				"https://api.github.com/repos/SukhOberoi/activist/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/SukhOberoi/activist/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/SukhOberoi/activist/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/SukhOberoi/activist/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/SukhOberoi/activist/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/SukhOberoi/activist/languages",
			stargazers_url:
				"https://api.github.com/repos/SukhOberoi/activist/stargazers",
			contributors_url:
				"https://api.github.com/repos/SukhOberoi/activist/contributors",
			subscribers_url:
				"https://api.github.com/repos/SukhOberoi/activist/subscribers",
			subscription_url:
				"https://api.github.com/repos/SukhOberoi/activist/subscription",
			commits_url:
				"https://api.github.com/repos/SukhOberoi/activist/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/SukhOberoi/activist/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/SukhOberoi/activist/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/SukhOberoi/activist/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/SukhOberoi/activist/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/SukhOberoi/activist/compare/{base}...{head}",
			merges_url:
				"https://api.github.com/repos/SukhOberoi/activist/merges",
			archive_url:
				"https://api.github.com/repos/SukhOberoi/activist/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/SukhOberoi/activist/downloads",
			issues_url:
				"https://api.github.com/repos/SukhOberoi/activist/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/SukhOberoi/activist/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/SukhOberoi/activist/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/SukhOberoi/activist/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/SukhOberoi/activist/labels{/name}",
			releases_url:
				"https://api.github.com/repos/SukhOberoi/activist/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/SukhOberoi/activist/deployments",
			created_at: "2024-03-09T17:00:48Z",
			updated_at: "2024-03-10T04:09:20Z",
			pushed_at: "2024-03-14T22:27:44Z",
			git_url: "git://github.com/SukhOberoi/activist.git",
			ssh_url: "git@github.com:SukhOberoi/activist.git",
			clone_url: "https://github.com/SukhOberoi/activist.git",
			svn_url: "https://github.com/SukhOberoi/activist",
			homepage: "https://activist.org",
			size: 38138,
			stargazers_count: 0,
			watchers_count: 0,
			language: "Vue",
			has_issues: false,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: [Object],
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: [Object],
		},
		{
			id: 726455607,
			node_id: "R_kgDOK0zVNw",
			name: "advent-of-code",
			full_name: "SukhOberoi/advent-of-code",
			private: false,
			owner: [Object],
			html_url: "https://github.com/SukhOberoi/advent-of-code",
			description: "solution for advent of code 2023",
			fork: false,
			url: "https://api.github.com/repos/SukhOberoi/advent-of-code",
			forks_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/forks",
			keys_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/collaborators{/collaborator}",
			teams_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/teams",
			hooks_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/hooks",
			issue_events_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/issues/events{/number}",
			events_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/events",
			assignees_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/branches{/branch}",
			tags_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/tags",
			blobs_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/languages",
			stargazers_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/stargazers",
			contributors_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/contributors",
			subscribers_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/subscribers",
			subscription_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/subscription",
			commits_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/compare/{base}...{head}",
			merges_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/merges",
			archive_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/downloads",
			issues_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/labels{/name}",
			releases_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/SukhOberoi/advent-of-code/deployments",
			created_at: "2023-12-02T13:01:47Z",
			updated_at: "2023-12-19T07:36:25Z",
			pushed_at: "2023-12-19T07:34:11Z",
			git_url: "git://github.com/SukhOberoi/advent-of-code.git",
			ssh_url: "git@github.com:SukhOberoi/advent-of-code.git",
			clone_url: "https://github.com/SukhOberoi/advent-of-code.git",
			svn_url: "https://github.com/SukhOberoi/advent-of-code",
			homepage: "https://adventofcode.com/2023/",
			size: 124,
			stargazers_count: 0,
			watchers_count: 0,
			language: "Python",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: [Object],
		},
		{
			id: 693304160,
			node_id: "R_kgDOKVL7YA",
			name: "arithematic-operations-api",
			full_name: "SukhOberoi/arithematic-operations-api",
			private: false,
			owner: [Object],
			html_url:
				"https://github.com/SukhOberoi/arithematic-operations-api",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/SukhOberoi/arithematic-operations-api",
			forks_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/forks",
			keys_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/collaborators{/collaborator}",
			teams_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/teams",
			hooks_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/hooks",
			issue_events_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/issues/events{/number}",
			events_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/events",
			assignees_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/branches{/branch}",
			tags_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/tags",
			blobs_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/languages",
			stargazers_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/stargazers",
			contributors_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/contributors",
			subscribers_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/subscribers",
			subscription_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/subscription",
			commits_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/compare/{base}...{head}",
			merges_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/merges",
			archive_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/downloads",
			issues_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/labels{/name}",
			releases_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/SukhOberoi/arithematic-operations-api/deployments",
			created_at: "2023-09-18T18:58:06Z",
			updated_at: "2023-10-23T05:07:46Z",
			pushed_at: "2023-10-23T05:07:33Z",
			git_url:
				"git://github.com/SukhOberoi/arithematic-operations-api.git",
			ssh_url: "git@github.com:SukhOberoi/arithematic-operations-api.git",
			clone_url:
				"https://github.com/SukhOberoi/arithematic-operations-api.git",
			svn_url: "https://github.com/SukhOberoi/arithematic-operations-api",
			homepage: "",
			size: 693,
			stargazers_count: 0,
			watchers_count: 0,
			language: "JavaScript",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: [Object],
		},
		{
			id: 752026882,
			node_id: "R_kgDOLNMFAg",
			name: "Encrypti-V",
			full_name: "SukhOberoi/Encrypti-V",
			private: false,
			owner: [Object],
			html_url: "https://github.com/SukhOberoi/Encrypti-V",
			description: null,
			fork: true,
			url: "https://api.github.com/repos/SukhOberoi/Encrypti-V",
			forks_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/forks",
			keys_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/collaborators{/collaborator}",
			teams_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/teams",
			hooks_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/hooks",
			issue_events_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/issues/events{/number}",
			events_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/events",
			assignees_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/branches{/branch}",
			tags_url: "https://api.github.com/repos/SukhOberoi/Encrypti-V/tags",
			blobs_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/languages",
			stargazers_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/stargazers",
			contributors_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/contributors",
			subscribers_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/subscribers",
			subscription_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/subscription",
			commits_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/compare/{base}...{head}",
			merges_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/merges",
			archive_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/downloads",
			issues_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/labels{/name}",
			releases_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/SukhOberoi/Encrypti-V/deployments",
			created_at: "2024-02-02T21:11:15Z",
			updated_at: "2024-02-02T21:15:24Z",
			pushed_at: "2024-02-02T21:15:21Z",
			git_url: "git://github.com/SukhOberoi/Encrypti-V.git",
			ssh_url: "git@github.com:SukhOberoi/Encrypti-V.git",
			clone_url: "https://github.com/SukhOberoi/Encrypti-V.git",
			svn_url: "https://github.com/SukhOberoi/Encrypti-V",
			homepage: null,
			size: 4455,
			stargazers_count: 0,
			watchers_count: 0,
			language: "Python",
			has_issues: false,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: [Object],
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: [Object],
		},
		{
			id: 748232959,
			node_id: "R_kgDOLJkg_w",
			name: "helloreact",
			full_name: "SukhOberoi/helloreact",
			private: false,
			owner: [Object],
			html_url: "https://github.com/SukhOberoi/helloreact",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/SukhOberoi/helloreact",
			forks_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/forks",
			keys_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/collaborators{/collaborator}",
			teams_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/teams",
			hooks_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/hooks",
			issue_events_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/issues/events{/number}",
			events_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/events",
			assignees_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/branches{/branch}",
			tags_url: "https://api.github.com/repos/SukhOberoi/helloreact/tags",
			blobs_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/languages",
			stargazers_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/stargazers",
			contributors_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/contributors",
			subscribers_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/subscribers",
			subscription_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/subscription",
			commits_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/compare/{base}...{head}",
			merges_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/merges",
			archive_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/downloads",
			issues_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/labels{/name}",
			releases_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/SukhOberoi/helloreact/deployments",
			created_at: "2024-01-25T14:55:12Z",
			updated_at: "2024-01-28T17:56:51Z",
			pushed_at: "2024-01-28T17:54:44Z",
			git_url: "git://github.com/SukhOberoi/helloreact.git",
			ssh_url: "git@github.com:SukhOberoi/helloreact.git",
			clone_url: "https://github.com/SukhOberoi/helloreact.git",
			svn_url: "https://github.com/SukhOberoi/helloreact",
			homepage: "https://craftmytrip.netlify.app",
			size: 3936,
			stargazers_count: 0,
			watchers_count: 0,
			language: "JavaScript",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "master",
			permissions: [Object],
		},
		{
			id: 692630916,
			node_id: "R_kgDOKUi1hA",
			name: "iNVESTbOT",
			full_name: "SukhOberoi/iNVESTbOT",
			private: false,
			owner: [Object],
			html_url: "https://github.com/SukhOberoi/iNVESTbOT",
			description: "Hack Summit 4.0 Project",
			fork: false,
			url: "https://api.github.com/repos/SukhOberoi/iNVESTbOT",
			forks_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/forks",
			keys_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/collaborators{/collaborator}",
			teams_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/teams",
			hooks_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/hooks",
			issue_events_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/issues/events{/number}",
			events_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/events",
			assignees_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/branches{/branch}",
			tags_url: "https://api.github.com/repos/SukhOberoi/iNVESTbOT/tags",
			blobs_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/languages",
			stargazers_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/stargazers",
			contributors_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/contributors",
			subscribers_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/subscribers",
			subscription_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/subscription",
			commits_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/compare/{base}...{head}",
			merges_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/merges",
			archive_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/downloads",
			issues_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/labels{/name}",
			releases_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/SukhOberoi/iNVESTbOT/deployments",
			created_at: "2023-09-17T04:50:47Z",
			updated_at: "2023-09-17T04:54:31Z",
			pushed_at: "2023-09-17T05:04:08Z",
			git_url: "git://github.com/SukhOberoi/iNVESTbOT.git",
			ssh_url: "git@github.com:SukhOberoi/iNVESTbOT.git",
			clone_url: "https://github.com/SukhOberoi/iNVESTbOT.git",
			svn_url: "https://github.com/SukhOberoi/iNVESTbOT",
			homepage: "",
			size: 860,
			stargazers_count: 0,
			watchers_count: 0,
			language: "HTML",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: [Object],
		},
		{
			id: 725599436,
			node_id: "R_kgDOKz_EzA",
			name: "moodboard",
			full_name: "SukhOberoi/moodboard",
			private: false,
			owner: [Object],
			html_url: "https://github.com/SukhOberoi/moodboard",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/SukhOberoi/moodboard",
			forks_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/forks",
			keys_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/collaborators{/collaborator}",
			teams_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/teams",
			hooks_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/hooks",
			issue_events_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/issues/events{/number}",
			events_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/events",
			assignees_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/branches{/branch}",
			tags_url: "https://api.github.com/repos/SukhOberoi/moodboard/tags",
			blobs_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/languages",
			stargazers_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/stargazers",
			contributors_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/contributors",
			subscribers_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/subscribers",
			subscription_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/subscription",
			commits_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/compare/{base}...{head}",
			merges_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/merges",
			archive_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/downloads",
			issues_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/labels{/name}",
			releases_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/SukhOberoi/moodboard/deployments",
			created_at: "2023-11-30T13:39:16Z",
			updated_at: "2023-11-30T13:42:44Z",
			pushed_at: "2023-11-30T13:39:19Z",
			git_url: "git://github.com/SukhOberoi/moodboard.git",
			ssh_url: "git@github.com:SukhOberoi/moodboard.git",
			clone_url: "https://github.com/SukhOberoi/moodboard.git",
			svn_url: "https://github.com/SukhOberoi/moodboard",
			homepage: "https://moodboard-journal.netlify.app/",
			size: 3,
			stargazers_count: 0,
			watchers_count: 0,
			language: "JavaScript",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: [Object],
		},
		{
			id: 721713187,
			node_id: "R_kgDOKwR4Iw",
			name: "SRM-Margin-Check",
			full_name: "SukhOberoi/SRM-Margin-Check",
			private: false,
			owner: [Object],
			html_url: "https://github.com/SukhOberoi/SRM-Margin-Check",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/SukhOberoi/SRM-Margin-Check",
			forks_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/forks",
			keys_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/collaborators{/collaborator}",
			teams_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/teams",
			hooks_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/hooks",
			issue_events_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/issues/events{/number}",
			events_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/events",
			assignees_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/branches{/branch}",
			tags_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/tags",
			blobs_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/languages",
			stargazers_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/stargazers",
			contributors_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/contributors",
			subscribers_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/subscribers",
			subscription_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/subscription",
			commits_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/compare/{base}...{head}",
			merges_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/merges",
			archive_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/downloads",
			issues_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/labels{/name}",
			releases_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/SukhOberoi/SRM-Margin-Check/deployments",
			created_at: "2023-11-21T16:11:56Z",
			updated_at: "2024-03-30T10:54:35Z",
			pushed_at: "2024-03-28T07:58:02Z",
			git_url: "git://github.com/SukhOberoi/SRM-Margin-Check.git",
			ssh_url: "git@github.com:SukhOberoi/SRM-Margin-Check.git",
			clone_url: "https://github.com/SukhOberoi/SRM-Margin-Check.git",
			svn_url: "https://github.com/SukhOberoi/SRM-Margin-Check",
			homepage:
				"https://chrome.google.com/webstore/detail/srm-margin-check/dofniecopchojcnidpeiodcfnodlenph",
			size: 1024,
			stargazers_count: 5,
			watchers_count: 5,
			language: "JavaScript",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 3,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 1,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 3,
			open_issues: 1,
			watchers: 5,
			default_branch: "main",
			permissions: [Object],
		},
		{
			id: 707343093,
			node_id: "R_kgDOKiky9Q",
			name: "Weather-Web-App",
			full_name: "SukhOberoi/Weather-Web-App",
			private: false,
			owner: [Object],
			html_url: "https://github.com/SukhOberoi/Weather-Web-App",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/SukhOberoi/Weather-Web-App",
			forks_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/forks",
			keys_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/collaborators{/collaborator}",
			teams_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/teams",
			hooks_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/hooks",
			issue_events_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/issues/events{/number}",
			events_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/events",
			assignees_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/branches{/branch}",
			tags_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/tags",
			blobs_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/languages",
			stargazers_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/stargazers",
			contributors_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/contributors",
			subscribers_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/subscribers",
			subscription_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/subscription",
			commits_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/compare/{base}...{head}",
			merges_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/merges",
			archive_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/downloads",
			issues_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/labels{/name}",
			releases_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/SukhOberoi/Weather-Web-App/deployments",
			created_at: "2023-10-19T17:44:40Z",
			updated_at: "2023-10-19T18:45:09Z",
			pushed_at: "2023-10-21T16:29:39Z",
			git_url: "git://github.com/SukhOberoi/Weather-Web-App.git",
			ssh_url: "git@github.com:SukhOberoi/Weather-Web-App.git",
			clone_url: "https://github.com/SukhOberoi/Weather-Web-App.git",
			svn_url: "https://github.com/SukhOberoi/Weather-Web-App",
			homepage: "https://sukhoberoi.github.io/Weather-Web-App/",
			size: 6245,
			stargazers_count: 0,
			watchers_count: 0,
			language: "JavaScript",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: true,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: [Object],
		},
		{
			id: 771464918,
			node_id: "R_kgDOLfue1g",
			name: "WebCarbonTracker",
			full_name: "SukhOberoi/WebCarbonTracker",
			private: false,
			owner: [Object],
			html_url: "https://github.com/SukhOberoi/WebCarbonTracker",
			description: null,
			fork: false,
			url: "https://api.github.com/repos/SukhOberoi/WebCarbonTracker",
			forks_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/forks",
			keys_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/keys{/key_id}",
			collaborators_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/collaborators{/collaborator}",
			teams_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/teams",
			hooks_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/hooks",
			issue_events_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/issues/events{/number}",
			events_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/events",
			assignees_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/assignees{/user}",
			branches_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/branches{/branch}",
			tags_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/tags",
			blobs_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/git/blobs{/sha}",
			git_tags_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/git/tags{/sha}",
			git_refs_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/git/refs{/sha}",
			trees_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/git/trees{/sha}",
			statuses_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/statuses/{sha}",
			languages_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/languages",
			stargazers_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/stargazers",
			contributors_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/contributors",
			subscribers_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/subscribers",
			subscription_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/subscription",
			commits_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/commits{/sha}",
			git_commits_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/git/commits{/sha}",
			comments_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/comments{/number}",
			issue_comment_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/issues/comments{/number}",
			contents_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/contents/{+path}",
			compare_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/compare/{base}...{head}",
			merges_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/merges",
			archive_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/{archive_format}{/ref}",
			downloads_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/downloads",
			issues_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/issues{/number}",
			pulls_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/pulls{/number}",
			milestones_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/milestones{/number}",
			notifications_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/notifications{?since,all,participating}",
			labels_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/labels{/name}",
			releases_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/releases{/id}",
			deployments_url:
				"https://api.github.com/repos/SukhOberoi/WebCarbonTracker/deployments",
			created_at: "2024-03-13T10:53:21Z",
			updated_at: "2024-03-13T10:53:31Z",
			pushed_at: "2024-03-13T11:10:16Z",
			git_url: "git://github.com/SukhOberoi/WebCarbonTracker.git",
			ssh_url: "git@github.com:SukhOberoi/WebCarbonTracker.git",
			clone_url: "https://github.com/SukhOberoi/WebCarbonTracker.git",
			svn_url: "https://github.com/SukhOberoi/WebCarbonTracker",
			homepage: null,
			size: 99,
			stargazers_count: 0,
			watchers_count: 0,
			language: "TypeScript",
			has_issues: true,
			has_projects: true,
			has_downloads: true,
			has_wiki: true,
			has_pages: false,
			has_discussions: false,
			forks_count: 0,
			mirror_url: null,
			archived: false,
			disabled: false,
			open_issues_count: 0,
			license: null,
			allow_forking: true,
			is_template: false,
			web_commit_signoff_required: false,
			topics: [],
			visibility: "public",
			forks: 0,
			open_issues: 0,
			watchers: 0,
			default_branch: "main",
			permissions: [Object],
		},
	],
};

const githubToken = import.meta.env.VITE_githubToken;

export default function Github() {
	const [gitData, setGitData] = useState(null);
	const octokit = new Octokit({
		auth: `${githubToken}`,
	});
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await octokit.request(
					"GET /users/{username}/repos",
					{
						username: "SukhOberoi",
						headers: {
							"X-GitHub-Api-Version": "2022-11-28",
						},
					}
				);
				setGitData(response.data);
			} catch (e) {
				console.error(e);
			}
		}
		fetchData();
		// setGitData(sampleres.data);
		console.log(gitData);
	}, []);

	return (
		<>
			<div className="flex flex-row flex-wrap gap-4 p-4 place-content-center md:grid-cols-2">
				{gitData ? (
					gitData
						.filter((proj) => proj.fork == false)
						.sort((a, b) => {
							return (
								new Date(b.pushed_at) - new Date(a.pushed_at)
							);
						})
						.map((proj) => (
							<ProjectCard
								key={proj.name}
								name={proj.name}
								des={proj.description}
								url={proj.html_url}
								demo={proj.homepage}
								lang={proj.language}
							/>
						))
				) : (
					<div className="flex flex-row flex-wrap gap-4 p-4 place-content-center md:grid-cols-2">
						<Skeleton className="w-full h-[250px] p-6 rounded-lg md:w-[500px]" />
						<Skeleton className="w-full h-[250px] p-6 rounded-lg md:w-[500px]" />
						<Skeleton className="w-full h-[250px] p-6 rounded-lg md:w-[500px]" />
						<Skeleton className="w-full h-[250px] p-6 rounded-lg md:w-[500px]" />
						<Skeleton className="w-full h-[250px] p-6 rounded-lg md:w-[500px]" />
						<Skeleton className="w-full h-[250px] p-6 rounded-lg md:w-[500px]" />
					</div>
				)}
			</div>
			<p className="text-center text-zinc-500">
				Powered by GitHub Public API
			</p>
		</>
	);
}
