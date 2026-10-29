# Inglês: ouvir e falar

App pessoal para aprender inglês com foco em ouvir e falar. As aulas acontecem no chat com o Claude, e o app guarda as atividades, os flashcards, o caderno de erros e a biblioteca de clássicos adaptados.

## Arquivos

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | O app inteiro: telas, ementa das 49 aulas, treinos de prática, prompts, atividades, biblioteca e livros |
| `manifest.webmanifest` | Nome, ícones e cores para instalar o app no celular |
| `sw.js` | Faz o app abrir sem internet |
| `icone-192.png`, `icone-512.png`, `icone-maskable-512.png` | Ícones do app |
| `android/`, `.github/workflows/apk.yml` | Projeto Android e a compilação automática do APK |

## Publicar no GitHub Pages

1. Os arquivos ficam na raiz da branch `main` do repositório `AmericanTi`.
2. Em Settings, abra Pages. Em Build and deployment, escolha Deploy from a branch, a branch `main` e a pasta `/ (root)`, e salve.
3. Em um ou dois minutos o app fica em `https://tiagomoura-dotcom.github.io/AmericanTi/`.

No plano gratuito do GitHub, o Pages só funciona com repositório público. O repositório não guarda nenhum dado seu: o progresso fica só no celular.

## Instalar no celular

- **Android (Chrome):** abra o endereço do app e use Instalar app, ou Adicionar à tela inicial, no menu do navegador.
- **iPhone (Safari):** toque em Compartilhar e depois em Adicionar à Tela de Início.

Instalado assim, o app abre em tela cheia, funciona sem internet e não precisa de APK.

## APK para Android

O APK é gerado sozinho pelo GitHub Actions (`.github/workflows/apk.yml`) sempre que algo em `android/`, no manifesto ou nos ícones muda na `main`. Também dá para gerar na hora: aba Actions, Gerar APK, Run workflow.

- **Baixar:** https://github.com/tiagomoura-dotcom/AmericanTi/releases/latest/download/ingles.apk
- Para instalar, o Android pede permissão para instalar apps de fontes desconhecidas.
- O APK abre o endereço do GitHub Pages dentro do Chrome, em tela cheia. Por isso o Pages precisa estar ativo, e o primeiro acesso precisa de internet.
- O progresso fica guardado no Chrome, não no APK. Desinstalar e instalar de novo não apaga nada.

A pasta `android/` tem o projeto Android (Trusted Web Activity, com a biblioteca android-browser-helper do Google).

**Assinatura.** Sem chave guardada no repositório, cada compilação assina o APK com uma chave nova, e o Android só aceita atualizar por cima se a chave for a mesma. Nesse caso, desinstale o APK antigo antes de instalar o novo. Para manter sempre a mesma chave, crie uma keystore e salve em Settings, Secrets and variables, Actions, dois segredos: `ANDROID_KEYSTORE_BASE64` (a keystore em base64, com alias `americanti`) e `ANDROID_KEYSTORE_PASSWORD`.

Sem o arquivo de verificação de domínio (`assetlinks.json`), o APK abre com uma barra de endereço fina no topo. Para tirar a barra, esse arquivo precisa ficar em `https://tiagomoura-dotcom.github.io/.well-known/assetlinks.json`, ou seja, num repositório chamado `tiagomoura-dotcom.github.io`, com a impressão digital SHA-256 da chave fixa. O log da compilação mostra essa impressão digital.

## Como usar

1. Na aba **Hoje**, ou na página da aula em **Aulas**, toque em **Copiar prompt da aula**. O prompt já leva o conteúdo da aula, a armadilha típica do brasileiro, seus erros pendentes, as palavras que você mais erra e os últimos ditados.
2. Cole numa conversa nova com o Claude e faça a aula. No fim, escreva **fim da aula**.
3. Copie o JSON que o Claude gerar e toque em **Importar aula**. Dá para colar o texto ou escolher um arquivo `.json`.
4. Faça as atividades da aula e revise os flashcards todo dia na aba **Revisão**.

## Prática: gramática, escuta e escrita

A aba **Prática** tem treinos que o próprio app corrige, ligados às aulas de conversa. Na aba **Aulas**, cada aula mostra embaixo os treinos para fazer junto, e a aba **Hoje** sugere os próximos.

- **Gramática:** uma unidade para cada aula, com explicação curta em português e exercícios (lacuna, escolha, ordenar e corrigir). A aula 0 tem um teste de nível, e cada checkpoint tem uma revisão sorteada do módulo. Os dados ficam na constante `GRAMATICA`.
- **Escuta:** 20 diálogos lidos pela voz do aparelho, com duas vozes quando há mais de uma instalada, perguntas, ditado e repetição com gravação. Os dados ficam em `ESCUTAS`.
- **Escrita:** 20 tarefas, com checklist conferido pelo app, contagem de palavras, texto modelo e exercícios. O texto fica salvo no aparelho. Os dados ficam em `ESCRITAS`.
- **Vídeos:** os vídeos mais recentes de canais de inglês, dentro do app (constante `CANAIS`), e uma lista sua de vídeos do YouTube.
- **Podcasts:** links para o Apple Podcasts e para uma busca no Spotify (constante `PODCASTS`).

Cada treino tem um prompt para uma aula no chat: gramática, escuta com um vídeo ou podcast que você escolher, ou correção do seu texto. No fim, o Claude gera um JSON com `"tipo": "pratica"` e o `"unidade"` do treino (por exemplo `g5`, `e3` ou `w2`). Ele entra pelo mesmo botão **Importar aula**: os exercícios novos, o trecho do vídeo com perguntas e o ditado aparecem no treino, o vocabulário vira flashcard e os erros vão para o caderno.

## Plano de hoje e progresso

A aba **Hoje** abre com o plano do dia: vídeo do dia (meta de 20 minutos), flashcards, um treino de prática, um capítulo de leitura e a música da semana. O app conta a sequência de dias de estudo e mostra o progresso por habilidade: fala, gramática, escuta, escrita, vocabulário e minutos de imersão na semana.

## Imersão: vídeo do dia, música da semana, vídeos e podcasts

- **Vídeo do dia:** um vídeo do YouTube por dia, do nível da sua próxima aula (histórias, entrevistas, podcasts em vídeo e palestras), tocado dentro do app. O app conta os minutos assistidos até a meta de 20. Se um vídeo não abrir dentro do app, o player passa sozinho para o próximo da lista. Há campos para anotar expressões e escrever um resumo, e um prompt para conversar sobre o vídeo no chat. A lista fica na constante `VIDEOS_DIA`.
- **Música da semana:** uma música por semana, do seu nível, com o clipe oficial, o que estudar nela (tempo verbal, gírias, vocabulário e pronúncia), um roteiro de 7 dias e um prompt para discutir a construção da letra no chat. O app nunca mostra a letra; o link Ver a letra abre uma busca. A lista fica na constante `MUSICAS`.
- **Vídeos:** todos os vídeos por nível, canais para seguir e uma lista sua de vídeos do YouTube.
- **Podcasts:** links para o Apple Podcasts e uma busca no Spotify.

## Clube do livro

No fim de cada capítulo, na **Biblioteca**, o botão **Copiar prompt do clube do livro** monta uma aula de discussão com o texto do capítulo: compreensão, interpretação, vocabulário, gramática em contexto, pronúncia e previsão do próximo capítulo.

Os prompts do vídeo do dia, da música e do clube do livro terminam com um JSON `"tipo": "extra"`. Ele entra pelo botão **Importar**: o vocabulário vira flashcard, os erros vão para o caderno e, na música, os exercícios aparecem na própria página.

## Seus dados

Tudo fica salvo no navegador do aparelho. Exporte um backup pela aba **Hoje** de vez em quando, principalmente antes de trocar de celular ou limpar os dados do navegador, e restaure pela mesma aba. Não suba arquivos de aula nem backups no repositório: eles trazem seus erros e trechos de transcrições, e o repositório é público.

## Atualizar o app

O `index.html` se atualiza sozinho quando o app abre com internet. Se trocar ícones ou o manifesto, mude também `VERSAO` no `sw.js` (por exemplo, para `ingles-v2`).

## Livros

A biblioteca tem adaptações (graded readers) de clássicos em domínio público, em prateleiras por nível, do A1 ao C1: contos de Poe, Maupassant e Conan Doyle, romances de Wells, Verne, Dumas, Stevenson, Shelley, Wilde, Stoker e Fitzgerald, peças de Shakespeare em prosa (Macbeth, Othello, King Lear), Dostoiévski (White Nights, Notes from Underground, Crime and Punishment, The Idiot e The Brothers Karamazov) e diálogos de Platão. As prateleiras seguem os módulos, mas dá para ler em qualquer ordem. Os livros grandes vêm divididos em partes.

Cada livro é um arquivo em `livros/<id>.json`, e a constante `CATALOGO` do `index.html` lista os livros (o campo `arquivo: true` indica que o texto está nessa pasta). O app só baixa um livro quando você o abre, e depois ele fica salvo para ler sem internet. O botão **Baixar todos para ler sem internet** baixa a biblioteca inteira de uma vez. O conto The Gift of the Magi fica embutido na constante `LIVROS`.

No topo da Biblioteca, **Criar um livro com o Claude** gera um prompt para transformar um texto seu, em português ou inglês, num livro do nível escolhido. Use com textos em domínio público ou escritos por você. O resultado entra pelo botão **Importar livro**, no formato abaixo:

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
