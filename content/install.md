---
title: 'Installing Elixir'
section: install
layout: default
---

# Install

The quickest way to install Elixir is through a distribution or using one of the available installers. If not available, then we recommend the precompiled packages or compiling it.

Note that Elixir {{ stable.name }} requires Erlang {{ stable.minimum_otp }} or later. Many of the instructions below will automatically install Erlang for you. In case they do not, read the "Installing Erlang" section below.

## Distributions

The preferred option for installing Elixir. Choose your operating system and tool.

If your distribution contains an old Elixir/Erlang version, see the sections below for installing Elixir/Erlang from version managers or from source.

### macOS

-   Using **Homebrew**:

    -   Update your homebrew to latest: `brew update`
    -   Run: `brew install elixir`

-   Using **Macports**:
    -   Run: `sudo port install elixir`

## Setting PATH environment variable

It is highly recommended to add Elixir's bin path to your PATH environment variable to ease development.

On **Windows**, there are [instructions for different versions](http://www.computerhope.com/issues/ch000549.htm) explaining the process.

On **Unix systems**, you need to [find your shell profile file](https://unix.stackexchange.com/a/117470/101951), and then add to the end of this file the following line reflecting the path to your Elixir installation:

```bash
export PATH="$PATH:/path/to/elixir/bin"
```

## Checking the installed version of Elixir

Once you have Elixir installed, you can check its version by running `elixir --version`.
