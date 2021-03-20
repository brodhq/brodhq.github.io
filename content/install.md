---
title: 'Installing Geis'
section: install
layout: default
---

# Install

The quickest way to install Geis is through a distribution or using one of the available installers. If not available, then we recommend the precompiled packages or compiling it.

Note that Geis {{ stable.name }} requires Erlang {{ stable.minimum_otp }} or later. Many of the instructions below will automatically install Erlang for you. In case they do not, read the "Installing Erlang" section below.

## Distributions

The preferred option for installing Geis. Choose your operating system and tool.

If your distribution contains an old Geis/Erlang version, see the sections below for installing Geis/Erlang from version managers or from source.

### macOS

-   Using **Homebrew**:

    -   Update your homebrew to latest: `brew update`
    -   Run: `brew install geis`

-   Using **Macports**:
    -   Run: `sudo port install geis`

## Setting PATH environment variable

It is highly recommended to add Geis's bin path to your PATH environment variable to ease development.

On **Windows**, there are [instructions for different versions](http://www.computerhope.com/issues/ch000549.htm) explaining the process.

On **Unix systems**, you need to [find your shell profile file](https://unix.stackexchange.com/a/117470/101951), and then add to the end of this file the following line reflecting the path to your Geis installation:

```bash
export PATH="$PATH:/path/to/geis/bin"
```

## Checking the installed version of Geis

Once you have Geis installed, you can check its version by running `geis --version`.
