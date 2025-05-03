export class Validar {

    async ValidarCPF(cpf: string) {
        // Remove caracteres não numéricos
        cpf = cpf.replace(/[^\d]+/g, '');

        // Verifica se tem 11 dígitos ou se todos os dígitos são iguais
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

        // Valida os dois dígitos verificadores
        for (let t = 9; t < 11; t++) {
            let sum = 0;
            for (let i = 0; i < t; i++) {
                sum += parseInt(cpf.charAt(i)) * (t + 1 - i);
            }
            const dig = (sum * 10) % 11 % 10;
            if (parseInt(cpf.charAt(t)) !== dig) return false;
        }

        return true;

    }
}