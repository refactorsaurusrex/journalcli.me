---
id: faq
title: FAQ
sidebar_label: FAQ
---

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

Notice that only up to four entries are listed for each tag, despite the fact that they all have more than four entries? That's because, by default, PowerShell [only displays up to four enumerated items](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_preference_variables?view=powershell-6#formatenumerationlimit). However, this can easily be changed using the `$FormatEnumerationLimit` variable. For example, run `$FormatEnumerationLimit = 8` to set the limit to 8. If you set it to -1, the upper limit is removed. Note that the value you set only persists for a single PowerShell session, so if you want to set it permanently you'll [need to modify your profile](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-6). If you're on Windows and use [cmder](https://cmder.net/), you should modify your `user_profile.ps1` script. 

