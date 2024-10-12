var totalCompra = 0;

        function adicionarAoCarrinho(nomeProduto, preco, idQuantidade) {
            const quantidade = document.getElementById(idQuantidade).value;
            const subtotal = preco * quantidade;
            totalCompra += subtotal;

            const itemCarrinho = document.createElement('li');
        }

        var totalCompra = 0;

        function adicionarAoCarrinho(nomeProduto, preco, idQuantidade) {
            const quantidade = document.getElementById(idQuantidade).value;
            const subtotal = preco * quantidade;
            totalCompra += subtotal;

            const itemCarrinho = document.createElement('li');
            itemCarrinho.textContent = (`${nomeProduto} - R$${preco.toFixed(2)} x ${quantidade} = R$${subtotal.toFixed(2)}`);
            document.getElementById('lista-carrinho');
        }

        var totalCompra = 0;

        function adicionarAoCarrinho(nomeProduto, preco, idQuantidade) {
            const quantidade = document.getElementById(idQuantidade).value;
            const subtotal = preco * quantidade;
            totalCompra += subtotal;

            const itemCarrinho = document.createElement('li');
            itemCarrinho.textContent = (`${nomeProduto} - R$${preco.toFixed(2)} x ${quantidade} = R$${subtotal.toFixed(2)}`);
            document.getElementById('lista-carrinho');
        }

        var totalCompra = 0;

        function adicionarAoCarrinho(nomeProduto, preco, idQuantidade) {
            const quantidade = document.getElementById(idQuantidade).value;
            const subtotal = preco * quantidade;
            totalCompra += subtotal;

            const itemCarrinho = document.createElement('li');
            itemCarrinho.textContent = (`${nomeProduto} - R$${preco.toFixed(2)} x ${quantidade} = R$${subtotal.toFixed(2)}`);
            document.getElementById('lista-carrinho').appendChild(itemCarrinho);

            document.getElementById('totalCompra');
        }


        var totalCompra = 0;

        function adicionarAoCarrinho(nomeProduto, preco, idQuantidade) {
            const quantidade = document.getElementById(idQuantidade).value;
            const subtotal = preco * quantidade;
            totalCompra += subtotal;

            const itemCarrinho = document.createElement('li');
            itemCarrinho.textContent = (`${nomeProduto} - R$${preco.toFixed(2)} x ${quantidade} = R$${subtotal.toFixed(2)}`);
            document.getElementById('lista-carrinho').appendChild(itemCarrinho);

            document.getElementById('total').textContent = totalCompra.toFixed(2);
        }

        var totalCompra = 0;

        function adicionarAoCarrinho(nomeProduto, preco, idQuantidade) {
            const quantidade = document.getElementById(idQuantidade).value;
            const subtotal = preco * quantidade;
            totalCompra += subtotal;

            const itemCarrinho = document.createElement('li');
            itemCarrinho.textContent = (`${nomeProduto} - R$${preco.toFixed(2)} x ${quantidade} = R$${subtotal.toFixed(2)}`);
            document.getElementById('lista-carrinho').appendChild(itemCarrinho);

            document.getElementById('total').textContent = totalCompra.toFixed(2);
        }

        var totalCompra = 0;

        function adicionarAoCarrinho(nomeProduto, preco, idQuantidade) {
            const quantidade = document.getElementById(idQuantidade).value;
            const subtotal = preco * quantidade;
            totalCompra += subtotal;

            const itemCarrinho = document.createElement('li');
            itemCarrinho.textContent = (`${nomeProduto} - R$${preco.toFixed(2)} x ${quantidade} = R$${subtotal.toFixed(2)}`);
            document.getElementById('lista-carrinho').appendChild(itemCarrinho);

            document.getElementById('total').innerText = totalCompra.toFixed(2);
        
            // Calcular o desconto de 10%
            let desconto = totalCompra * 0.10;
            document.getElementById("desconto").innerText = desconto.toFixed(2);

    // Calcular o valor total com desconto
    let totalComDesconto = totalCompra - desconto;
    document.getElementById("valor-total-com-desconto").innerText = totalComDesconto.toFixed(2);

        }

       