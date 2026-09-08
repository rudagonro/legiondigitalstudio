$ErrorActionPreference = "Stop"

$projectRoot = $PSScriptRoot
$publishedIndex = Join-Path $projectRoot "index.html"
$indexBackup = Join-Path $projectRoot ".published-index.backup"
$publishedAssets = Join-Path $projectRoot "assets"
$assetsBackup = Join-Path $projectRoot ".published-assets.backup"
$viteCommand = Join-Path $projectRoot "node_modules\.bin\vite.cmd"
$buildOutput = Join-Path $projectRoot ".output"
$hadPublishedIndex = Test-Path -LiteralPath $publishedIndex
$hadPublishedAssets = Test-Path -LiteralPath $publishedAssets

if (Test-Path -LiteralPath $buildOutput) {
  Remove-Item -LiteralPath $buildOutput -Recurse -Force
}

if ($hadPublishedIndex) {
  Move-Item -LiteralPath $publishedIndex -Destination $indexBackup -Force
}

if ($hadPublishedAssets) {
  Move-Item -LiteralPath $publishedAssets -Destination $assetsBackup -Force
}

try {
  & $viteCommand build
  if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
  }
}
finally {
  if ($hadPublishedIndex -and (Test-Path -LiteralPath $indexBackup)) {
    Move-Item -LiteralPath $indexBackup -Destination $publishedIndex -Force
  }
  if ($hadPublishedAssets -and (Test-Path -LiteralPath $assetsBackup)) {
    Move-Item -LiteralPath $assetsBackup -Destination $publishedAssets -Force
  }
}
