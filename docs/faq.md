---
id: faq
title: FAQ
sidebar_label: FAQ
---

## I love (or hate) this tool and want to provide feedback!

Great! I'm glad to hear that `journal-cli` evoked a strong emotional response. There are several avenues available to provide feedback. You can write a review on [alternativeto.net](https://alternativeto.net/software/journal-cli/reviews/). You can open a [GitHub issue](https://github.com/refactorsaurusrex/journal-cli/issues/new/choose). You can chat in [the gitter room](https://gitter.im/journal-cli/community). Or you can email the developer directly at hi@journalcli.app.  

## How can I be notified of new journal-cli releases?

By default, `journal-cli` will automatically check for and install updates every 7 days. You can also get email notifications about new releases, if desired. Just head over to the `journal-cli` [GitHub page](https://github.com/refactorsaurusrex/journal-cli) and select "Releases Only" from the "Watching" menu in the upper right corner. Instructions can be found [here](https://help.github.com/en/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository). 

## How can I change the number of entries shown in index results?

When you run `Get-JournalIndex` or `Get-JournalEntriesByTag`, you may see results like this:

```powershell
Tag              Count Entries
---              ----- -------
work               141 {2018.01.08, 2018.01.09, 2018.01.10, 2018.01.11…}
exercise            89 {2018.01.07, 2018.01.10, 2018.01.13, 2018.01.15…}
vacation            47 {2018.01.26, 2018.01.27, 2018.01.28, 2018.01.29…}
coding              46 {2018.02.22, 2018.02.26, 2018.03.03, 2018.03.04…}
family              37 {2018.01.13, 2018.02.21, 2018.02.24, 2018.02.26…}
```

Notice that only up to four entries are listed for each tag, despite the fact that they all have more than four entries? That's because, by default, PowerShell [only displays up to four enumerated items](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_preference_variables?view=powershell-6#formatenumerationlimit). This is easily changed with the `$FormatEnumerationLimit` variable. For example, run `$FormatEnumerationLimit = 8` to set the limit to 8. If you set it to -1, the upper limit is removed altogether. Note that the value you set only persists for a single PowerShell session, so if you want to set it permanently you'll [need to modify your profile](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-6). If you're on Windows and use [cmder](https://cmder.net/), you should modify your `user_profile.ps1` script. 

## I got a 'missing git binary' warning. What's that about?

`journal-cli` uses a native git library in order to track edits to your journal entries over time. This library requires an operating system specific binary in order to work. If you get warnings that you're missing this binary, it means that git integration is not currently working on your system and, consequently, edits to your journal are not being tracked. To fix this, [open a GitHub issue](https://github.com/refactorsaurusrex/journal-cli/issues) explaining that you're seeing this warning. Be sure to include your operating system name and version. In all likelihood this is an easy fix that can be implemented and deployed very quickly.
