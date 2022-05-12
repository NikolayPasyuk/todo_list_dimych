export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type ErrorType = null | string

const initialState = {
    status: 'loading' as RequestStatusType,
    error: 'some error' as ErrorType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

type ActionsType = any