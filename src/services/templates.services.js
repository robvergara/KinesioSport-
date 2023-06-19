import {get, post, patch, erase} from './Network'

export function getAllTemplates() {
    return get("/plantillas")
}