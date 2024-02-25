# $projectRoot = Join-Path $PSScriptRoot ../
$localEnvPath = Join-Path $PSScriptRoot ../env/local
Push-Location $localEnvPath
docker-compose pull
docker-compose up -d
Pop-Location

# $env:NODE_ENV = "development"
# Push-Location $projectRoot
# yarn prisma:generate
# yarn prisma:migrate
# yarn prisma:seed
# Pop-Location