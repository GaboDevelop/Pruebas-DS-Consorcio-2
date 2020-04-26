import axios from 'axios';
import { GetterTree, ActionTree, MutationTree } from 'vuex';

import { State } from '@/store/interfaces/Term.ts';
// types
import TermTypes from '@/store/types/TermTypes';

//Models
import TermModel from '../models/TermModel';

const namespaced: boolean = true;

const state: State = {
    terms: [],
};
const getters: GetterTree<State, any> = {
  [TermTypes.getters.GET_TERMS] : ( state ) => {
    return state.terms;
  },

};

const actions: ActionTree<State, any> = {
    [TermTypes.actions.GET_TERMS_LANGUAGE]: ({ commit }, language: string) => {
        axios.get("http://localhost:3000/content",{
            params: {
             language,
            },
        }).then( (res) => {
            const terms: TermModel = res.data.terms;
            commit(TermTypes.mutations.TERMS_SUCCESS, terms);
        });
    },
};

const mutations: MutationTree<State> = {
    [TermTypes.mutations.TERMS_SUCCESS]: (state, terms) => {
        state.terms = terms;
    },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};