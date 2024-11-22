rm -rf ./prisma/migrations
rm -rf ./upload-php/uploads/*
rm -rf ./upload-php/logs/*

pnpm run prisma:generate
pnpm run prisma:migrate
pnpm run seed