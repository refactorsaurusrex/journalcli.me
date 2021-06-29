---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

> NOTE! This documentation is for journal-cli version 1, which is currently deprecated. Documentation for the latest version can be found [here](https://journalcli.app).

## Quick Start

1. Ensure you have a default application set for `.md` files. 
2. Install the [latest version of PowerShell](https://github.com/PowerShell/PowerShell/releases/latest) for your system.
3. Install the [latest version of journal-cli](https://www.powershellgallery.com/packages/JournalCli): `Install-Module JournalCli`
4. Restart your PowerShell terminal.
5. Run `New-JournalEntry -Location C:\Path\To\Your\Journal` and start writing! The path can be any directory on your system where you'd like to store your journal entries. (The example path above uses Window's format; be sure to change it to suit your operating system.)

## Basic Usage

### Overview

`journal-cli` is a tool for anyone who likes to journal, loves markdown sytax, and has a fondness for command line applications. It's _especially_ for folks who prefer minimalist interfaces, are apprehensive about storing intimate information in the cloud, and dislike proprietary file formats. `journal-cli` stores journal entries offline by default - in plain text - far away from the prying eyes of hackers and [other bad actors](https://www.wsj.com/articles/techs-dirty-secret-the-app-developers-sifting-through-your-gmail-1530544442). It also makes maintaining a well-structured collection of journal entries simple and fun. 

>  For more details on how `journal-cli` came to exist, check out the [background information page](/docs/background). For a complete feature overview, [click here](/docs/features).

### Your First Journal Entry

#### Prerequisites

First things first. Before using `journal-cli`, you must have a default application registered on your system for `.md` files. This is because `journal-cli` assumes all journal entries are written to files with a `.md` file extension. Other file types are ignored. Also, some commands will attempt to open journal files for you; this obviously won't work if a default application isn't set on your machine. [Typora](https://www.typora.io/) is highly recommended, but you can use any editor you prefer.

#### Writing with a markdown editor

To create a new journal entry for today and edit it with a markdown editor, run a command like this:

```powershell
New-JournalEntry -Location 'C:\Path\To\Your\Journal' -Tags work
# The path structure you use may be different, depending on your 
# operating system.
```
**Pro tip:** You can use the alias `nj` in place of the full command name. 

#### Writing in your terminal window

To create a new journal entry for today directly from your terminal window, run a command like this:

```powershell
Add-JournalEntryContent "Today I went skiing and it was nice." 
  -Tags skiing,vacation
  -Location 'C:\Path\To\Your\Journal'
# The path structure you use may be different, depending on your 
# operating system.
```

**Pro tip:** You can use the alias `aje` in place of the full command name. 

#### Setting a default journal path

The path to your journal is completely arbitrary; it can be wherever you want it to be. Both example commands above would create an entry for today in the same location. That said, you really don't want to type out the full path to your journal every time you want to write a journal entry. Instead, you should save it as your default location: 

```powershell
Set-JournalDefaultLocation 'C:\Path\To\Your\Journal'
# Once again, the path structure you use may be different, 
# depending on your operating system.
```

Now you can omit the `-Location` parameter from both the `New-JournalEntry` and `Add-JournalEntryContent` cmdlets. 

### Tags and Readme's

> The `Add-JournalEntryContent` cmdlet does not yet support `-Readme` parameters. This will be added in an upcoming release. 

The `New-JournalEntry` and `Add-JournalEntryContent` cmdlets have two other parameters you should know about: `-Tags` and `-Readme`. The first takes an array of strings which represent tags to apply to your entry:

```powershell
nj -Tags running,work,shopping
# Or!
aje -Tags running,work,shopping
```

This will create a new journal entry for today with yaml front matter, like this:

```
---
tags:
  - running
  - work
  - shopping
---
# Saturday, October 12, 2019
```

The other parameter, `-Readme`, allows you to provide a specific date in the future when you'd like to re-read the entry. You can pass in either a specific date such as `1/2/2025` or a duration like `5 years`, which will calculate a date based on when the entry was originally written. 

### Indexing and Searching

Okay, so you've been journaling for a while now. You've written scores of entries, each of which has been diligently tagged. How do you find them again? 

For a complete index of your entire journal, run `Get-JournalIndex`. This command will parse every entry in your journal, dynamically generate an index, and display the results.

```powershell
> Get-JournalIndex

Tag              Count Entries
---              ----- -------
work               141 {2018.01.08, 2018.01.09, 2018.01.10, 2018.01.11…}
exercise            89 {2018.01.07, 2018.01.10, 2018.01.13, 2018.01.15…}
vacation            47 {2018.01.26, 2018.01.27, 2018.01.28, 2018.01.29…}
coding              46 {2018.02.22, 2018.02.26, 2018.03.03, 2018.03.04…}
family              37 {2018.01.13, 2018.02.21, 2018.02.24, 2018.02.26…}
big-event           37 {2018.01.16, 2018.01.25, 2018.03.02, 2018.04.13…}
friends             34 {2018.01.12, 2018.02.09, 2018.02.22, 2018.02.27…}
```

This list shows the topics you write about most frequently. You can change the sort direction, or sort alphabetically by tag, by using the `-OrderBy` and `-Direction` parameters. To narrow this list down to a particular tag or set of tags, use the `Get-JournalEntriesByTag` command. Maybe you want to see a list of entries that are tagged either `work` or `vacation`:

```
> Get-JournalEntriesByTag -Tags work,vacation

Tag       Count Entries
---       ----- -------
work        141 {2018.01.08, 2018.01.09, 2018.01.10, 2018.01.11…}
vacation      1 {2019.10.11}
```

Or perhaps you only want to see entries that are tagged both `work` _and_ `vacation`, in which case you should use the `-All` switch:

```powershell
> Get-JournalEntriesByTag -Tags work,vacation -All

Tag         Count Entries
---         ----- -------
big-event       1 {2019.10.11}
coding          1 {2019.10.11}
work            1 {2019.10.11}
vacation        1 {2019.10.11}
```

In this case, there is only one entry that contains both the `work` and `vacation` tags. That entry is also tagged `big-event` and `coding`, both of which are displayed in the results. 

## Built-in Help

`journal-cli` comes with extensive help documentation which can be read directly from your terminal. Just run `help <CMDLET_NAME>` to display details about a specific cmdlet. For example, `help New-JournalEntry` will show all the documentation for the `New-JournalEntry` cmdlet. To display a list of all available cmdlets, run `Get-Command -Module JournalCli`. 

## Updates & Release Notes

`journal-cli` is actively developed and new versions are released frequently. By default, the application will check for updates every seven days. If one is available, it will be installed automatically. You can delay this automatic check by running [Suspend-JournalCliUpdateChecks](https://github.com/refactorsaurusrex/journal-cli/wiki/Suspend-JournalCliUpdateChecks). You can also manually install an update by running `Update-Module JournalCli` and restarting your terminal. To view a history of changes, look at the the [release history](https://github.com/refactorsaurusrex/journal-cli/releases) in GitHub.