import { SET_KPI, SET_KPIS } from "../constants/types";

const kpi = (state = { kpi: null }, action) => {
    switch (action.type) {
        
        // case SET_KPI:
        //     return { ...state, kpi: action.payload }

        case SET_KPI: 
            return { ...state, kpi: action.payload }
        
        default:
            return state;
    }
}

export default kpi;