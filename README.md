<div align="center">
  <img src="build/appicon.png" alt="GUI.for.SingBox" width="200">
  <h1>MrGovart's fork of GUI.for.SingBox</h1>
  <p>A GUI program developed by vue3 + wails.</p>
  <a href="https://github.com/GUI-for-Cores/GUI.for.SingBox" target="_blank">Original repo</a>
</div>

# Main Changes

The original project has clash_mode values hardcoded to `'rule' | 'global' | 'direct'` values which limits usability and actually makes no sense as you would always use 'rule' mode logic if everything is properly configured per route rules.

The fork implements a logic of the original sing-box where clash_modes are parsed from config so it is now available to use custom clash_mode values and create your own rules based on them as originally intended. For example, to control DNS with proper DNS rules like:
```
"dns": {
    "servers": [
      {
        "tag": "google-secure",
        "type": "https",
        "domain_resolver": "local",
        "server": "dns.google",
        "path": "/dns-query",
        "detour": "proxy"
      },
    ...
    "rules":
      { "clash_mode": "googleDNS", "server": "google-secure" },
      ...
```

<img width="872" height="539" alt="image" src="https://github.com/user-attachments/assets/2acb34a0-d4e8-40e6-b281-8ccebf1e3452" />

## What's is actually changed:
- All hardcoded values for clash_mode is removed
- Route and DNS rules payload input is a simple string input instead of a radio now.
- Overview page and Profile Edit page now shows available clash_modes parsed from config.
- Scroll event on Overview page that opens Controller is now removed (commented out) for the sake of scrollability of clash_modes.
- Made some small visual fixes for Overview pages so it renders properly according to clash_mode behaviour changes.

# Plans
Original GUI has some other questionable UI/UX features that I'd like to improve in time.  
I'm just a hobbyist programmer but I'm open to any of your ideas that can make GUI.for.SingBox better.  
I'm not sure if I want to contribute to the original project as it is obvious that they designed their logic intentionally.
