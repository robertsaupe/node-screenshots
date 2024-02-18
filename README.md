# node-screenshots - make automatic pixel perfect screenshots

[Supporting](https://github.com/robertsaupe/node-screenshots#supporting) |
[License](https://github.com/robertsaupe/node-screenshots#license) |
[Installing](https://github.com/robertsaupe/node-screenshots#installing) |
[Getting started](https://github.com/robertsaupe/node-screenshots#getting-started) |
[Windows](https://github.com/robertsaupe/node-screenshots#windows) |
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

## Windows

### Installing [NVM for Windows](https://github.com/coreybutler/nvm-windows)

Download and install nvm-setup.exe from [releases](https://github.com/coreybutler/nvm-windows/releases)

### Installing Node.js Version using [NVM for Windows](https://github.com/coreybutler/nvm-windows)

```powershell
$nvmrc = Get-Content .nvmrc
Invoke-Expression -Command "nvm install $nvmrc"
Invoke-Expression -Command "nvm use $nvmrc"
```

### PowerShell Startup Script for .nvmrc

#### Create a profile file

```powershell
New-item –type file –force $profile
```

#### edit the created profile file and add

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

## Update Dependencies

```powershell
npm install -g npm-check-updates
ncu -u
npm install
```

## Credits

- <https://github.com/puppeteer/puppeteer>
