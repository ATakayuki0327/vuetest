Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
docker-compose run --rm frontend npm install
docker compose up


flushPromises は非同期処理の完了を待つために使用するユーティリティ
npm install flush-promises