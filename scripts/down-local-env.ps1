$localEnvPath = Join-Path $PSScriptRoot ../env/local

Push-Location $localEnvPath
docker-compose down
Pop-Location