Feature: Register User
    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

    Background: Access register screen
        Given I am on register screen

    Scenario: Campo nome vazio
        When I click on register
        Then I see the message on register "O campo nome deve ser prenchido"

    Scenario: Campo e-mail vazio
        And I fill name
        When I click on register
        Then I see the message on register "O campo e-mail deve ser prenchido corretamente"

    Scenario: Campo e-mail inválido
        And I fill name
        And I fill e-mail invalid
        When I click on register
        Then I see the message on register "O campo e-mail deve ser prenchido corretamente"

    Scenario: Campo senha vazio
        And I fill name
        And I fill e-mail on register
        When I click on register
        Then I see the message on register "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Campo senha inválido
        And I fill name
        And I fill e-mail on register
        And I fill invalid password on register
        When I click on register
        Then I see the message on register "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Cadastro de usuário com sucesso
        And I fill name
        And I fill e-mail on register
        And I fill password on register
        When I click on register
        Then I see success message on register