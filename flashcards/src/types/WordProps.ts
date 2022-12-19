export type WordProps = {
    eng: string,
    pol: string,
    example?: Exclude<WordProps, 'example'>
}