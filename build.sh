# Script de build do vite para copiar as imagens

# build
mkdir -p public/src/img
cp -r src/img/* public/src/img
npx vite build 

# limpeza
rm -r public/src/img

# deploy
npx vite preview --port 3000