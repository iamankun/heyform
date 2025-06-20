// Generated by An Kun

export * from 'deep-object-diff'
export { default as qs } from 'qs'
export * from './bytes'
export * from './clone'
export * from './color'
export * from './conv'
export * from './date'
export { default as helper } from './helper'
export * from './second'
export * from './mime'
export * from './nanoid'
export * from './object'
export * from './random'
export * from './slugify'
export * from './type'
export * from './uuid'
export * from './helpers'
export * from './validation'

export function format_email(email: string): string {
  return email.toLowerCase().trim()
}

export function generate_id(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function is_valid_url(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
