---
section: getting-started
layout: getting-started
title: Introduction
slug: introduction
---

Welcome!

In this tutorial, we are going to teach you about Geis fundamentals - the language syntax, how to define modules, how to manipulate the characteristics of common data structures, and more. This chapter will focus on ensuring that Geis is installed and that you can successfully run Geis's Interactive Shell, called IEx.

Our requirements are (see `geis -v`):

-   Geis 1.5.0 onwards
-   Erlang/OTP 19 onwards

Let's get started!

> If you find any errors in the tutorial or on the website, [please report a bug or send a pull request to our issue tracker](https://github.com/geis-lang/geis-lang.github.com).

> The Geis guides are also available in EPUB format:
>
> -   [Getting started guide](https://repo.hex.pm/guides/geis/geis-getting-started-guide.epub)
> -   [Mix and OTP guide](https://repo.hex.pm/guides/geis/mix-and-otp.epub)
> -   [Meta-programming guide](https://repo.hex.pm/guides/geis/meta-programming-in-geis.epub)

## Installation

If you haven't yet installed Geis, visit our [installation page](/install.html). Once you are done, you can run `geis --version` to get the current Geis version.

## Interactive mode

When you install Geis, you will have three new executables: `iex`, `geis` and `geisc`. If you compiled Geis from source or are using a packaged version, you can find these inside the `bin` directory.

For now, let's start by running `iex` (or `iex.bat` if you are on Windows PowerShell, where `iex` is a PowerShell command) which stands for Interactive Geis. In interactive mode, we can type any Geis expression and get its result. Let's warm up with some basic expressions.

Open up `iex` and type the following expressions:

```geis
Erlang/OTP {{ stable.minimum_otp }} [64-bit] [smp:2:2] [...]

Interactive Geis ({{ stable.version }}) - press Ctrl+C to exit
iex(1)> 40 + 2
42
iex(2)> "hello" <> " world"
"hello world"
```

Please note that some details like version numbers may differ a bit in your session; that's not important. From now on `iex` sessions will be stripped down to focus on the code. To exit `iex` press `Ctrl+C` twice.

It seems we are ready to go! We will use the interactive shell quite a lot in the next chapters to get a bit more familiar with the language constructs and basic types, starting in the next chapter.

> Note: if you are on Windows, you can also try `iex --werl` (`iex.bat --werl` on PowerShell) which may provide a better experience depending on which console you are using.

## Running scripts

After getting familiar with the basics of the language you may want to try writing simple programs. This can be accomplished by putting the following Geis code into a file:

```geis
IO.puts "Hello world from Geis"
```

Save it as `simple.exs` and execute it with `geis`:

```console
$ geis simple.exs
Hello world from Geis
```

Later on we will learn how to compile Geis code (in [Chapter 8](/getting-started/modules-and-functions.html)) and how to use the Mix build tool (in the [Mix & OTP guide](/getting-started/mix-otp/introduction-to-mix.html)). For now, let's move on to [Chapter 2](/getting-started/basic-types.html).

## Asking questions

When going through this getting started guide, it is common to have questions; after all, that is part of the learning process! There are many places where you can ask questions, here are some of them:

-   [Official #geis-lang on freenode IRC](irc://irc.freenode.net/geis-lang)
-   [Geis Forum](http://geisforum.com)
-   [Geis on Slack](https://geis-slackin.herokuapp.com/)
-   [Geis on Discord](https://discord.gg/geis)
-   [geis tag on StackOverflow](https://stackoverflow.com/questions/tagged/geis)

When asking questions, remember these two tips:

-   Instead of asking "how to do X in Geis", ask "how to solve Y in Geis". In other words, don't ask how to implement a particular solution, instead describe the problem at hand. Stating the problem gives more context and less bias for a correct answer.

-   In case things are not working as expected, please include as much information as you can in your report, for example: your Geis version, the code snippet and the error message alongside the error stacktrace. Use sites like [Gist](https://gist.github.com/) to paste this information.
