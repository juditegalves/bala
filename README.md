# bala.pt

Site do Bala: uma página estática (HTML + CSS + JS), publicada na Netlify a partir deste repositório.

## O que trocar e onde

| O quê | Onde |
| --- | --- |
| Link Uber Eats Cascais | `index.html`, procurar `#uber-cascais` e colar o link da loja. |
| Take away Amoreiras | `index.html`, procurar `#soon-amoreiras` e trocar pelo link do Google Maps que está no comentário ao lado. |
| Horários | `index.html`, procurar `horário a confirmar` (Alvalade e Cascais) |
| Fotos | `assets/fotos/` (hero, burritos, tacos, bowls, snacks, ingredientes, cozinha, catering). Para trocar, substituir o ficheiro com o mesmo nome (JPG, até ~1600px de largura). Imagem de partilha: `assets/og.jpg` (1200×630) |
| Vídeo do hero | `index.html`, bloco comentado dentro de `.hero-media` |
| Logotipo | `assets/logo-bala.svg` (vermelho), `assets/logo-bala-branco.svg` (rodapé), `assets/logo-bala-selo.svg` (selo completo, não usado no site) |
| Marcas do grupo (rodapé) | `index.html`, bloco `.grupo`. Logótipos a branco em `assets/grupo-*` (o da AHO é PNG, tirado de ahofoods.com; trocar por SVG quando houver). Os links do Bala e do Stella apontam para os endereços .netlify.app até os domínios estarem ligados. |
| Cores e fontes | `styles.css`, bloco `:root` no topo |
| Faixa de novidades | `index.html`, bloco `.news` |

## Formulário de catering

Usa Netlify Forms. Os pedidos aparecem no painel da Netlify em Forms → catering.
Para receber por e-mail: Site configuration → Notifications → Form submission notifications.

## Domínio

DNS no cPanel: registo A `bala.pt` → `75.2.60.5` e CNAME `www` → `<nome-do-site>.netlify.app`. Não mexer em MX/TXT.

## Publicar

- **Recomendado:** ligar este repositório à Netlify (Add new site → Import from Git). Cada alteração enviada para `main` publica sozinha.
- **Manual:** arrastar a pasta do site (ou o .zip) para Deploys na Netlify. Ativar Forms em Site configuration → Forms para o catering funcionar.

## IA no futuro

O site é estático, por isso um assistente de IA entra como uma Netlify Function (pasta `netlify/functions/`) que guarda a chave da API no servidor, em variáveis de ambiente da Netlify. A chave nunca vai no HTML nem no JS.
