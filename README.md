# bala.pt

Site do Bala: uma página estática (HTML + CSS + JS), publicada na Netlify a partir deste repositório.

## O que trocar e onde

| O quê | Onde |
| --- | --- |
| Link Uber Eats Cascais | `index.html`, procurar `#uber-cascais` e colar o link da loja. O botão passa a funcionar sozinho. |
| Horários | `index.html`, procurar `horário a confirmar` (Alvalade e Cascais) |
| Fotos | `index.html`, cada `<div class="ph" data-ph="...">` é um placeholder. Trocar por `<img src="/assets/fotos/nome.jpg" alt="...">` |
| Vídeo do hero | `index.html`, bloco comentado dentro de `.hero-media` |
| Logotipo | trocar `<span class="logo-word">bala</span>` por `<img src="/assets/logo.svg" alt="Bala">` |
| Cores e fontes | `styles.css`, bloco `:root` no topo |
| Faixa de novidades | `index.html`, bloco `.news` |

## Formulário de catering

Usa Netlify Forms. Os pedidos aparecem no painel da Netlify em Forms → catering.
Para receber por e-mail: Site configuration → Notifications → Form submission notifications.

## Domínio

DNS no cPanel: registo A `bala.pt` → `75.2.60.5` e CNAME `www` → `<nome-do-site>.netlify.app`. Não mexer em MX/TXT.
