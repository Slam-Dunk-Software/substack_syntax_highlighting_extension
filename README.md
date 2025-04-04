# Substack Syntax Highlighting Extension

This repo contains a Chromium extension that can be added to your browser to enhance the experience of Substack newsletters.

Repo published as part of [Slam Dunk Software's substack newsletter](https://slamdunksoftware.substack.com/p/a-substack-plugin-for-syntax-highlighting).

## Features:
- Add a unique background color and 1px border to inline code styling
  - The 1px border color is calculated based on your primary link (a element) color
  - The background color is calculated based on the background of the Substack newsletter you're reading (it's adjusted by brightness factor of 1.05)
- (Hopefully) coming soon, code block syntax highlighting


## Other notes:
- My hope is that Substack will come around and support syntax highlighting.
  - The "inject Javascript and CSS" route is really messy, and would, for example, be really hard to support email clients, and impossible to support in the Substack mobile app.
