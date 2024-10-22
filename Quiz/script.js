    let animal = null;
    let steps = ""; // Variável para armazenar os passos percorridos

    let menu_1 = null;
    let menu_2 = null;
    let menu_3 = null;

    let menu_1_resp = null;
    let menu_2_resp = null;
    let menu_3_resp = null;

    menu_1 = `
        Escolha o tipo de animal:
        1 - Mamífero
        2 - Ave
        3 - Réptil
    `;
    menu_1_resp = prompt(menu_1);

    steps += "Tipo de animal escolhido: ";
    if (menu_1_resp == "1") {
        steps += "Mamífero\n";
        menu_2 = `
            Escolha o subtipo de Mamífero:
            1 - Quadrúpede
            2 - Bípede
            3 - Voadores
            4 - Aquáticos
        `;
        menu_2_resp = prompt(menu_2);
        steps += "Subtipo de Mamífero escolhido: ";
        if (menu_2_resp == "1") {
            steps += "Quadrúpede\n";
            menu_3 = `
                Selecione a alimentação desse animal:
                1 - Carnívoro
                2 - Herbívoro
            `;
            menu_3_resp = prompt(menu_3);
            steps += "Alimentação escolhida: ";
            if (menu_3_resp == "1") {
                steps += "Carnívoro\n";
            } else if (menu_3_resp == "2") {
                steps += "Herbívoro\n";
            }
        } else if (menu_2_resp == "2") {
            steps += "Bípede\n";
            menu_3 = `
                Selecione a alimentação desse animal:
                1 - Onívaro
                2 - Frutívoros
            `;
            menu_3_resp = prompt(menu_3);
            steps += "Alimentação escolhida: ";
            if (menu_3_resp == "1") {
                steps += "Onívaro\n";
            } else if (menu_3_resp == "2") {
                steps += "Frutívoros\n";
            }
        }
    } else if (menu_1_resp == "2") {
        steps += "Ave\n";
        menu_2 = `
            Escolha o subtipo de Ave:
            1 - Não-voadoras
            2 - Nadadoras
            3 - De rapina
        `;
        menu_2_resp = prompt(menu_2);
        steps += "Subtipo de Ave escolhido: ";
        if (menu_2_resp == "1") {
            steps += "Não-voadoras\n";
            menu_3 = `
                Selecione a prevalência geográfica do animal:
                1 - Tropicais
                2 - Polares
            `;
            menu_3_resp = prompt(menu_3);
            steps += "Prevalência geográfica escolhida: ";
            if (menu_3_resp == "1") {
                steps += "Tropicais\n";
            } else if (menu_3_resp == "2") {
                steps += "Polares\n";
            }
        }
    } else {
        steps += "Réptil\n";
        menu_2 = `
            Escolha o subtipo de Réptil:
            1 - Com casco
            2 - Carnívoros
            3 - Sem patas
        `;
        menu_2_resp = prompt(menu_2);
        steps += "Subtipo de Réptil escolhido: ";
        if (menu_2_resp == "1") {
            steps += "Com casco\n";
        } else if (menu_2_resp == "2") {
            steps += "Carnívoros\n";
        } else if (menu_2_resp == "3") {
            steps += "Sem patas\n";
        }
    }

    if (menu_1_resp == "1" && menu_2_resp == "1" && menu_3_resp == "1") animal = "Leão";
    if (menu_1_resp == "1" && menu_2_resp == "1" && menu_3_resp == "2") animal = "Cavalo";
    if (menu_1_resp == "1" && menu_2_resp == "2" && menu_3_resp == "1") animal = "Homem";
    if (menu_1_resp == "1" && menu_2_resp == "2" && menu_3_resp == "2") animal = "Macaco";
    if (menu_1_resp == "1" && menu_2_resp == "3") animal = "Morcego";
    if (menu_1_resp == "1" && menu_2_resp == "4") animal = "Baleia";

    if (menu_1_resp == "2" && menu_2_resp == "1" && menu_3_resp == "1") animal = "Avestruz";
    if (menu_1_resp == "2" && menu_2_resp == "1" && menu_3_resp == "2") animal = "Pinguim";
    if (menu_1_resp == "2" && menu_2_resp == "2") animal = "Pato";
    if (menu_1_resp == "2" && menu_2_resp == "3") animal = "Águia";

    if (menu_1_resp == "3" && menu_2_resp == "1") animal = "Tartaruga";
    if (menu_1_resp == "3" && menu_2_resp == "2") animal = "Crocodilo";
    if (menu_1_resp == "3" && menu_2_resp == "3") animal = "Cobra";

    alert("Passos percorridos:\n" + steps + "\nO animal é: " + animal);