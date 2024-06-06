FROM node:21-alpine@sha256:d44678a321331f2f003b51303cc5105f9787637e0524cf94d4323d08050a99c9 AS builder 

# executa a aplicação em produção (menor tempo de resposta)
ENV NODE_ENV=production

# copia os arquivos de configuração
COPY package*.json .

# executa o comando para instalar as dependencias
RUN npm ci --omit=dev

# copia o projeto
COPY . .

# cria a pasta de arquivo de imagem
RUN mkdir -p public/src/img

# copia para o public temporariamente
RUN cp -r src/img/* public/src/img

# converte para js simples o projeto
RUN npm run build

# remove a pasta anteriormente criada
RUN rm -r public/src/img



FROM nginx:alpine3.18-slim@sha256:b841779b72c127bdcb6e58b2ae3d810f890e020460858d84c7bd38d15cf26ddf

COPY /nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /dist /usr/share/nginx/html

EXPOSE 5173

ENTRYPOINT [ "nginx", "-g","daemon off;" ]
