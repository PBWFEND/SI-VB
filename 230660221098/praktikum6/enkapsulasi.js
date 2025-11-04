class Rekening {
  #saldo = 0;

  constructor(saldoAwal) {
    this.#saldo = saldoAwal;
  }

  lihatSaldo() {
    console.log(this.#saldo);
  }
}

const rekBCA = new Rekening(50000);
rekBCA.lihatSaldo();
