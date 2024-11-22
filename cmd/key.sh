key=$(curl -s https://generate-secret.vercel.app/32)
hash=$(openssl rand -base64 32)
crypto=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")

sed -i '' 's/NEXTAUTH_SECRET=.*/NEXTAUTH_SECRET='$key'/g' .env
sed -i '' 's/SESSION_SECRET=.*/SESSION_SECRET='$hash'/g' .env
sed -i '' 's/JWT_SECRET=.*/JWT_SECRET='$crypto'/g' .env