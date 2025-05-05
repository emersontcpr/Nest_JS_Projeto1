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
    async matchNumbers(value: string | number | number[] = '') {
        const match = value.toString().match(/\d/g)
        return Array.isArray(match) ? match.map(Number) : []
    }
    async validCalc(x: number, numbers: number[]) {
        const slice = numbers.slice(0, x)
        let factor = x - 7
        let sum = 0

        for (let i = x; i >= 1; i--) {
            const n = slice[x - i]
            sum += n * factor--
            if (factor < 2) factor = 9
        }

        const result = 11 - (sum % 11)

        return result > 9 ? 0 : result
    }

    async ValidarCnpj(cnpj: string) {
        if (cnpj === undefined) {
            console.log("ValidarCnpj passo 1")
            return false;
        }
        var strCNPJ = cnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '');

        if (strCNPJ === '00000000000000' || strCNPJ === '11111111111111' || strCNPJ === '22222222222222' || strCNPJ === '33333333333333' ||
            strCNPJ === '44444444444444' || strCNPJ === '55555555555555' || strCNPJ === '66666666666666' || strCNPJ === '77777777777777' ||
            strCNPJ === '88888888888888' || strCNPJ === '99999999999999' || strCNPJ.length !== 14) {
            console.log("ValidarCnpj passo 2")
            return false;
        }
        const numbers = await this.matchNumbers(strCNPJ);

        // Valida a quantidade de dígitos
        if (numbers.length !== 14) return false

        // Elimina inválidos com todos os dígitos iguais
        const items = [...new Set(numbers)]
        if (items.length === 1) return false

        // Separa os 2 últimos dígitos verificadores
        const digits = numbers.slice(12)

        // Valida 1o. dígito verificador
        const digit0 = await this.validCalc(12, numbers)
        if (digit0 !== digits[0]) return false

        // Valida 2o. dígito verificador
        const digit1 = await this.validCalc(13, numbers)
        return digit1 === digits[1]


        return true;

    }
}