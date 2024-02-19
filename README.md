# node-screenshots - make automatic pixel perfect screenshots

[Supporting](https://github.com/robertsaupe/node-screenshots#supporting) |
[License](https://github.com/robertsaupe/node-screenshots#license) |
[Installing](https://github.com/robertsaupe/node-screenshots#installing) |
[Getting started](https://github.com/robertsaupe/node-screenshots#getting-started) |
[Updating](https://github.com/robertsaupe/node-screenshots#updating) |
[Credits](https://github.com/robertsaupe/node-screenshots#credits)

## Supporting

[GitHub](https://github.com/sponsors/robertsaupe) |
[Patreon](https://www.patreon.com/robertsaupe) |
[PayPal](https://www.paypal.com/donate?hosted_button_id=SQMRNY8YVPCZQ) |
[Amazon](https://www.amazon.de/ref=as_li_ss_tl?ie=UTF8&linkCode=ll2&tag=robertsaupe-21&linkId=b79bc86cee906816af515980cb1db95e&language=de_DE)

## License

This software is distributed under the MIT license. Please read [LICENSE](LICENSE) for information.

## Installing

### Requirements

- [Install Node.js](https://nodejs.org)

### Installing Requirements on Windows

#### Installing [Chocolatey (Package Manager for Windows)](https://chocolatey.org) [Recommended, Optional]

First, ensure that you are using an [administrative shell](https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-10/) - you can also install as a non-admin, check out [Non-Administrative Installation](https://docs.chocolatey.org/en-us/choco/setup#non-administrative-install).

Install with powershell.exe

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Other install methods can be found [here](https://chocolatey.org/install).

#### Installing [NVM for Windows](https://github.com/coreybutler/nvm-windows)

##### Installing [NVM for Windows](https://github.com/coreybutler/nvm-windows) using [Chocolatey (Package Manager for Windows)](https://chocolatey.org)

```bash
choco install nvm
```

or

##### Download and install nvm-setup.exe from [releases](https://github.com/coreybutler/nvm-windows/releases)

#### Installing Node.js Version using [NVM for Windows](https://github.com/coreybutler/nvm-windows)

```powershell
$nvmrc = Get-Content .nvmrc
Invoke-Expression -Command "nvm install $nvmrc"
Invoke-Expression -Command "nvm use $nvmrc"
```

#### PowerShell Startup Script for .nvmrc

##### Create a profile file

```powershell
New-item –type file –force $profile
```

##### edit the created profile file and add

```powershell
Function runNvmUse([string]$version) {
    Invoke-Expression -Command "nvm use $version"
}
if (Test-Path .nvmrc) {
    $nvmrc = Get-Content .nvmrc
    $project_version = "v$nvmrc"
    $current_version = Invoke-Expression -Command "node -v"
    if ($project_version -ne $current_version) {
        runNvmUse($nvmrc)
    } else {
        Write-Output "Already using node $current_version"
    }
}
```

### Environment

```bash
git clone https://github.com/robertsaupe/node-screenshots.git
cd node-screenshots/
npm install
```

## Getting started

modify example.js or create your own

then simple run:

```bash
node example.js
```

you can find screenshots in ./screenshots/

## Updating

### Updating Dependencies

```bash
npm install -g npm-check-updates
ncu -u
npm install
```

## Credits

- <https://github.com/puppeteer/puppeteer>
