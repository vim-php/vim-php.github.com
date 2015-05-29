---
layout: post
title:  Plugin Vim-Composer release 0.1.0
date:   2015-04-28 21:00:00
tags: vim, php, composer, gianarb
category: plugin
author: GianArb
author_link: https://gianarb.it
summary: Vim Composer is a vim plugin that help you to manage integration with this PHP tool. Composer is a tool to manage project's depenendencies in PHP
---
This plugin helps you to manage integration between [composer](http://getcomposer.org) and vim.

## Composer
Composer is a tool to manage project's dependencies in PHP.

## Changelog
* [[#5]](https://github.com/vim-php/vim-composer/pull/5) Close #4 ComposerInstall command
* [[#6]](https://github.com/vim-php/vim-composer/pull/6) Close #2 init composer.json open command
* [[#10]](https://github.com/vim-php/vim-composer/pull/10) Close #3 exec custom callback after composer install
* [[#11]](https://github.com/vim-php/vim-composer/pull/11) Add help

## Features
This plugin's version offers a little set of features.
In first it supports auto-install and auto discovery of composer installation.
ex. `:ComposerGet` command installs composer.phar

`:ComposerRun` is the first wrapper of composer tool, it supports all commands with them options
ex.
`:ComposerRun validate`
`:ComposerRun update --no-dev -o`
`:ComposerRun install --prefer-source`
...

If in your route exists a **composer.json** file you can vsplit it with `:ComposerJSON` command.

`:ComposerInstall` is a wrapper of **composer install** command, it supports its options and call callback function if exists.
{% highlight vim %}
function! MyCallbackFunction()
    exec ':silent ! ctags -a %'
endfunction
let g:composer_install_callback = "MyCallbackFunction"
{% endhighlight %}

There are a lot of possible features, you can help us to work the right ones with your [feedback](https://github.com/vim-pph/vim-composer/issues)!
