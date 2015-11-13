---
layout: post
title:  "vim composer 0.3.0 is ready"
date:   2015-09-15 23:08:27
author: GianArb
author_link: https://gianarb.it
categories: php, vim
tags: php, vim
summary: vim-composer is a plugin to manage integration between composer and vim
priority: 0.6
changefreq: yearly
---
<blockquote align="center" class="twitter-tweet" data-cards="hidden" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/vimForPHP?src=hash">#vimForPHP</a> <a href="https://t.co/EdczdpCrRc">https://t.co/EdczdpCrRc</a> <a href="https://twitter.com/hashtag/php?src=hash">#php</a> <a href="https://twitter.com/hashtag/vim?src=hash">#vim</a> Release 0.3.0 <a href="https://twitter.com/hashtag/composer?src=hash">#composer</a> plugin is ready! Thanks <a href="https://twitter.com/sensorario">@sensorario</a> for your work!</p>&mdash; Gianluca Arbezzano (@GianArb) <a href="https://twitter.com/GianArb/status/641674841192574976">September 9, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I'm very happy to announce release 0.3.0 of [vim-composer](https://github.com/vim-php/vim-composer).  
This plugin builds a good integration between VIM and [composer](https://getcomposer.org) the strong dependency manager for PHP.

## Changelog
* [#18](https://github.com/vim-php/vim-composer/pull/18) Added missing ComposerUpdate function
* [#21](https://github.com/vim-php/vim-composer/pull/21) Added missing CONTRIBUTING.md file
* [#20](https://github.com/vim-php/vim-composer/pull/20) Require and/or init commands

Now this plugin serve new function to require specific package. Update it and map new function `:ComposerRequireFunc`.
