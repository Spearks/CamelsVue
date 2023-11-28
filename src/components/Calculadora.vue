<template>
    <div class="sm:hero min-h-screen">
        <div class="sm:hero-content flex-col lg:flex-row">
            <img src="@/assets/undraw_couple_love_re_3fw6.svg" class="sm:block hidden max-w-lg rounded-lg shadow-2xl" />
            <div class="card bg-base-200 shadow-xl m-auto mt-5 max-h-full w-max border-base-300 border-4 flex-col ">

                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Calculadora de camelos</h2>
                    <p>Quantos camelos sua namorada(o) valem?</p>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Nome</span>
                        </label>
                        <input v-model="personName" type="text" placeholder="Nome" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">

                            <span class="label-text">Sexo</span>
                        </label>
                        <div class="flex items-center">
                            <div>
                                <input v-model="personGender" type="radio" class="radio" name="gender" value="male" checked>
                                <label class="label">
                                    <span class="label-text">Masculino</span>
                                </label>
                            </div>
                            <div class="ml-4">
                                <input v-model="personGender" type="radio" class="radio" name="gender" value="female">
                                <label class="label">
                                    <span class="label-text">Feminino</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Idade</span>
                        </label>
                        <input v-model="personAge" type="number" placeholder="Idade" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Cor do cabelo</span>
                        </label>
                        <select v-model="personHairColor" name="Cor do cabelo" class="input input-bordered" id="">
                            <option value="">Escolher a cor</option>
                            <option value="Loiro">Loiro</option>
                            <option value="Preto">Preto</option>
                            <option value="Vermelho">Vermelho</option>
                            <option value="Castanho">Castanho</option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Altura</span>
                        </label>
                        <input v-model="personHeight" type="number" placeholder="Alura" class="input input-bordered" />
                    </div>
                </div>
                <footer class="card-footer pl-3 pb-3">
                    <button onclick="my_modal_4.showModal()"
                        class="btn btn-primary">Calcular</button>
                </footer>
                <dialog id="my_modal_4" class="modal">
                    <div class="modal-box w-11/12 max-w-5xl">
                        <h3 class="font-bold text-lg">Resultado da calculadora de camelos oficial</h3>

                        <p class="mt-4 py-4text-white text-xl inline">{{ personName }} </p>
                        <p class="inline"> vale o total de:</p>
                        <p class="font-bold text-2xl text-center">{{ computeCamelos }} camelos</p>
                        <div class="divider"></div>
                        <div class="modal-action">
                            <form method="dialog">
                                <button class="btn">Sair</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CalculadoraCamelo",
    data() {
        return {
            personName: "",
            personGender: "",
            personAge: "",
            personHairColor: "",
            personHeight: ""
        }
    },
    computed: {
        computeCamelos() {
            
            let age = this.personAge
            let ageFactor = 1
            let height = this.personHeight
            if(age >= 20 && age <= 30) {
                ageFactor = 1.5;
            } else {
                ageFactor = 0.6;
            }

            let name = this.personName
            let genderFactor = this.personGender === 'female' ? 1.5 : 1;
            let hairFactor = {
                'Loiro': 0.9,
                'Preto': 1.2,
                'Vermelho': 1,
                'Castanho': 1.2
            }[this.personHairColor] || 1;

            return parseFloat(( (age * ageFactor / 3 ) * name.length * genderFactor * hairFactor * height) / 2).toFixed(2)
        }
    }
}
</script>