/**
 * 인증 관련 api호출 로직
 */

import { supabase } from "../config/supabase";

export interface LoginPayLoad{
    backNumber: number
    name: string
}

export const authenticateUser = async (payload: LoginPayLoad) => {
    try {
        const {data, error} = await supabase
            .from('employee_auth')
            .select('*')
            .eq('back_number', payload.backNumber)
            .eq('name', payload.name)
            .single()

        debugger
        if (error) {
            return { success: false, error: error.message }
        }

        return { success: true, data }
    } catch (error) {
        return { 
            success: false,
            error: error instanceof Error ? error.message : String(error)  
        }
    }
}