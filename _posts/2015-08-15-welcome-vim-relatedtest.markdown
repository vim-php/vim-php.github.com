---
layout: post
title:  "Welcome vim-relatedtest"
date:   2015-08-15 01:01:01
author: GianArb
author_link: https://gianarb.it
categories: plugin 
tags: php, vim, test
summary: vim-relatedtest is Vim plugin in order to open a related test case of a given source file
priority: 0.6
changefreq: yearly
---
This plugin opens a related test file of a given source file (and viceversa).

When you are editing a source file, eg: App.php and you want to open the test file you have to issue tt and the AppTest.php will be opened from your tests folder. If the test file is missing you can create it on the fly.

## Install
{% highlight bash %}
Bundle 'wdalmut/vim-relatedtest'
{% endhighlight %}

## Shortcut

You can redefine shortcuts

{% highlight vim %}
let g:relatedtest_open_command = '<C-t>'
{% endhighlight %}

## PHP Filetype configuration

Sometimes you need to set up where sources and tests folders are located, for doing that you can set in your .exrc file for your project.

For example for Symfony2 application you can limit the search operation in your src folder only...

{% highlight vim %}
let g:relatedtest_php_src="src/"
let g:relatedtest_php_tests="src/"
{% endhighlight %}

In order to exclude always a particular folder like: vendor you can use wildignore flag directly in your .vimrc configuration file.

{% highlight vim %}
:set wildignore+=**/vendor/**
{% endhighlight %}

## Open Strategy

The open strategy comes in help when you want to open the related test in a new window, split, tab etc..

{% highlight vim %}
let g:relatedtest_open_strategy = 'vsp'
{% endhighlight %}

You can use any vim command as open strategy, the most common are:

* `vsp` (open in a vertical split)
* `sp` (open in an horizontal split)
* `tabnew` (open in a tab)
* `e` (open in the current window)

Thanks [Walter Dal Mut](https://github.com/wdalmut) for your work!
