export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          email: string
          full_name: string
          phone: string | null
          insurance_provider: string | null
          insurance_policy_number: string | null
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          phone?: string | null
          insurance_provider?: string | null
          insurance_policy_number?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone?: string | null
          insurance_provider?: string | null
          insurance_policy_number?: string | null
          created_at?: string
        }
      }
      medications: {
        Row: {
          id: string
          name: string
          sku: string
          category: string
          stock: number
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          sku: string
          category: string
          stock?: number
          price: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          sku?: string
          category?: string
          stock?: number
          price?: number
          created_at?: string
        }
      }
      prescriptions: {
        Row: {
          id: string
          prescription_number: string
          customer_id: string
          medication_id: string
          doctor_id: string
          quantity: number
          instructions: string | null
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          prescription_number: string
          customer_id: string
          medication_id: string
          doctor_id: string
          quantity: number
          instructions?: string | null
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          prescription_number?: string
          customer_id?: string
          medication_id?: string
          doctor_id?: string
          quantity?: number
          instructions?: string | null
          status?: string
          created_at?: string
        }
      }
    }
  }
}