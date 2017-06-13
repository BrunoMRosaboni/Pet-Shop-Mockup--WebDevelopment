<?xml version="1.0" encoding="ISO-8859-2"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <link href="css/cssreset.css" type="text/css" rel="stylesheet" />
        <link href="css/cssbase.css" type="text/css" rel="stylesheet" />
        <link href="css/cssgrids.css" type="text/css" rel="stylesheet" />
        <link href="css/fase_1.css" type="text/css" rel="stylesheet" />
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
        <title>SCC0565 - Animais e Produtos</title>
      </head>
      <body>
        <div id="header">
          <div class="yui3-g">
            <div class="yui3-u-1-3 image">
              <div class="field">
                <img src="images/icmc_thumb.png" alt="ICMC" height="80px"/>
              </div>
            </div>
            <div class="yui3-u-1-3 titulo">
              <div class="field">
                <h3>SCC0565 - Sistemas Interativos WEB</h3>
                <p>Prof. Dilvan de Abreu Moreira</p>
                <p>2. Semestre de 2013</p>
              </div>
            </div>

            <div class="yui3-u-1-3 identificao">
              <div class="field">
                <h3>Aluno</h3>
                <p>Leandro dos Santos Facao n.USP: 4286021</p>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <h1>Bem Vindo ao Pet Shop On-line</h1>
          <h1>Trabalho 2 - XSLs para a Pet Shop</h1>
          <br />
          <h2 align="center">Animais e Produtos</h2>
          <br />
          <div class="produtos">
            <table class="list">
              <tr>
                <th>Código</th>
                <th>Descriçăo</th>
                <th>Estoque</th>
                <th>Garantia</th>
                <th>Fabricante</th>
                <th>Valor</th>
              </tr>
              <xsl:for-each select="produtos//produto">
                <xsl:value-of select="data"/>
                <tr>
                  <td><xsl:value-of select="cod"/></td>
                  <td><xsl:value-of select="nome"/></td>
                  <td><xsl:value-of select="estoque"/></td>
                  <td><xsl:value-of select="garantia"/></td>
                  <td><xsl:value-of select="fabricante"/></td>
                  <td><xsl:value-of select="preco"/></td>
                </tr>
              </xsl:for-each>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
