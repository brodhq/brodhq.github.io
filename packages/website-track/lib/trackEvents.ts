interface BaseEvent<TKind extends string> {
    kind: TKind
}

export interface InstallScriptCopied extends BaseEvent<'install_copied'> {}

export type AnyEvent = InstallScriptCopied
