import { BaseParser } from './base-parser';
import { Metadata, Language, Generator, Framework} from './model/metadata/metadata';
import { Class, ClassKind } from './model/class/class';
import { Platform } from './model/class/platform';
import { Example } from './model/class/example';
import { Prop, PropKind } from './model/class/prop';
import { Method } from './model/class/method';
import { Param } from './model/class/param';
import { Model } from './model/model';

export class DocumentationJsparser extends BaseParser {
    createMetadata(language: Language = 'javascript', generator: Generator = 'documentationJS', 
    framework: Framework = 'react'): Metadata {
        return new Metadata(language, generator, framework);        
    }
}