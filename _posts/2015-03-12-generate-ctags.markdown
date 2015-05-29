---
layout: post
title:  "Simple flow to generate, update and load ctags"
date:   2015-03-12 21:00:00
tags: vim, php, ctags, gianarb
category: trick
author: GianArb
author_link: https://gianarb.it
summary: Simple flow to create, update and load ctags
---
Hi! I use this codeto generate (", tags") ctags file.
{% highlight vim %}
map <Leader>tags :!ctags -R --languages= .<LEFT><LEFT>
{% endhighlight %}

After every saved if exists a tags file I update tags with last modified.
{% highlight vim %}
autocmd BufWritePost * if filereadable('tags') | exec ':silent ! ctags -a %' | endif
{% endhighlight %}

If tags file exists I load it in my session of work
{% highlight vim %}
if filereadable("./tags")
    set tags+=./tags
endif
{% endhighlight %}
