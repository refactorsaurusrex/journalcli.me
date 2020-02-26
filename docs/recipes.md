---
id: recipes
title: Recipes
sidebar_label: Recipes
---

> The examples below frequently use aliases for the sake of brevity. Short commands are emphasized here because the goal is to teach fast and easy manipulation of your journal. If you don't know what an alias is, just run `Get-Alias <name>` in your terminal to get the definition. If you're not familiar with the definition either, then [google](https://duckduckgo.com/?ratb=e) is your friend. ;)

## Paginate through a filtered list of entries

Run this command to retrieve all entries tagged `work` and iterate through the content of each one, displaying one page of data at a time. To omit the entry body, just remove the `-IncludeBodies` switch. 

```powershell
Get-JournalEntriesByTag -Tags work -IncludeBodies | 
  select -ExpandProperty entries | 
  fl | 
  more
```

## Search for text within all entries

This will search all journal entries for the word `vail` and display the results one page at a time. You could omit `select LineNumber,Line,Filename` if you wanted, but the results will be a bit repetitive and verbose. 

```powershell
Get-JournalFiles | 
  sls -Pattern 'vail' | 
  select LineNumber,Line,Filename |
  fl | 
  more
```

