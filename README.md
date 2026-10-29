# Inglês: ouvir e falar

App pessoal para aprender inglês com foco em ouvir e falar. As aulas acontecem no chat com o Claude, e o app guarda as atividades, os flashcards, o caderno de erros e a biblioteca de clássicos adaptados.

## Arquivos

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | O app inteiro: telas, ementa das 49 aulas, prompts, atividades, biblioteca e livros |
| `manifest.webmanifest` | Nome, ícones e cores para instalar o app no celular |
| `sw.js` | Faz o app abrir sem internet |
| `icone-192.png`, `icone-512.png`, `icone-maskable-512.png` | Ícones do app |

## Publicar no GitHub Pages

1. Suba todos os arquivos na raiz do repositório `americanTi` (Add file, depois Upload files).
2. Em Settings, abra Pages. Em Build and deployment, escolha Deploy from a branch, a branch `main` e a pasta `/ (root)`, e salve.
3. Em um ou dois minutos o app fica em `https://SEU-USUARIO.github.io/americanTi/`.

No plano gratuito do GitHub, o Pages só funciona com repositório público. O repositório não guarda nenhum dado seu: o progresso fica só no celular.

## Instalar no celular

- **Android (Chrome):** abra o endereço do app e use Instalar app, ou Adicionar à tela inicial, no menu do navegador.
- **iPhone (Safari):** toque em Compartilhar e depois em Adicionar à Tela de Início.

Instalado assim, o app abre em tela cheia, funciona sem internet e não precisa de APK.

## Gerar o APK (opcional)

1. Com o app já publicado, abra [pwabuilder.com](https://www.pwabuilder.com) e cole o endereço do app.
2. Peça o pacote para Android. O PWABuilder gera um `.apk` para instalar direto no celular e um `.aab` para a Play Store, junto com uma chave de assinatura. Guarde essa chave: ela é necessária para gerar atualizações do APK.
3. Para instalar o `.apk`, o Android pede permissão para instalar apps de fontes desconhecidas.

Sem o arquivo de verificação de domínio (`assetlinks.json`), o APK abre com uma barra de endereço fina no topo. Para tirar a barra, esse arquivo precisa ficar em `https://SEU-USUARIO.github.io/.well-known/assetlinks.json`, ou seja, num repositório chamado `SEU-USUARIO.github.io`. Os nomes dos botões do PWABuilder podem mudar com o tempo.

## Como usar

1. Na aba **Hoje**, ou na página da aula em **Aulas**, toque em **Copiar prompt da aula**. O prompt já leva o conteúdo da aula, a armadilha típica do brasileiro, seus erros pendentes, as palavras que você mais erra e os últimos ditados.
2. Cole numa conversa nova com o Claude e faça a aula. No fim, escreva **fim da aula**.
3. Copie o JSON que o Claude gerar e toque em **Importar aula**. Dá para colar o texto ou escolher um arquivo `.json`.
4. Faça as atividades da aula e revise os flashcards todo dia na aba **Revisão**.

## Seus dados

Tudo fica salvo no navegador do aparelho. Exporte um backup pela aba **Hoje** de vez em quando, principalmente antes de trocar de celular ou limpar os dados do navegador, e restaure pela mesma aba. Não suba arquivos de aula nem backups no repositório: eles trazem seus erros e trechos de transcrições, e o repositório é público.

## Atualizar o app

O `index.html` se atualiza sozinho quando o app abre com internet. Se trocar ícones ou o manifesto, mude também `VERSAO` no `sw.js` (por exemplo, para `ingles-v2`).

## Livros

Os livros embutidos ficam na constante `LIVROS` do `index.html`. Novos livros chegam como `.json` e entram pelo botão **Importar livro**, na **Biblioteca**. Formato:

```json
{
  "id": "gift-of-the-magi",
  "title": "The Gift of the Magi",
  "author": "O. Henry",
  "year": 1905,
  "module": 1,
  "level": "A1",
  "summary": "Resumo em português",
  "chapters": [
    {
      "title": "Título do capítulo",
      "paragraphs": ["Parágrafo 1", "Parágrafo 2"],
      "glossary": [{"term": "counts", "meaning": "conta"}]
    }
  ]
}
```
