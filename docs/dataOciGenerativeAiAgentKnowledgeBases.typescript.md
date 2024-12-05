# `dataOciGenerativeAiAgentKnowledgeBases` Submodule <a name="`dataOciGenerativeAiAgentKnowledgeBases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentKnowledgeBases <a name="DataOciGenerativeAiAgentKnowledgeBases" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases oci_generative_ai_agent_knowledge_bases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases(scope: Construct, id: string, config?: DataOciGenerativeAiAgentKnowledgeBasesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig">DataOciGenerativeAiAgentKnowledgeBasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig">DataOciGenerativeAiAgentKnowledgeBasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciGenerativeAiAgentKnowledgeBasesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenerativeAiAgentKnowledgeBases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenerativeAiAgentKnowledgeBases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentKnowledgeBases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList">DataOciGenerativeAiAgentKnowledgeBasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.knowledgeBaseCollection">knowledgeBaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filter"></a>

```typescript
public readonly filter: DataOciGenerativeAiAgentKnowledgeBasesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList">DataOciGenerativeAiAgentKnowledgeBasesFilterList</a>

---

##### `knowledgeBaseCollection`<sup>Required</sup> <a name="knowledgeBaseCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.knowledgeBaseCollection"></a>

```typescript
public readonly knowledgeBaseCollection: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciGenerativeAiAgentKnowledgeBasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentKnowledgeBasesConfig <a name="DataOciGenerativeAiAgentKnowledgeBasesConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentKnowledgeBasesConfig: dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#compartment_id DataOciGenerativeAiAgentKnowledgeBases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#display_name DataOciGenerativeAiAgentKnowledgeBases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#id DataOciGenerativeAiAgentKnowledgeBases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#state DataOciGenerativeAiAgentKnowledgeBases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#compartment_id DataOciGenerativeAiAgentKnowledgeBases#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#display_name DataOciGenerativeAiAgentKnowledgeBases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciGenerativeAiAgentKnowledgeBasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#filter DataOciGenerativeAiAgentKnowledgeBases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#id DataOciGenerativeAiAgentKnowledgeBases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#state DataOciGenerativeAiAgentKnowledgeBases#state}.

---

### DataOciGenerativeAiAgentKnowledgeBasesFilter <a name="DataOciGenerativeAiAgentKnowledgeBasesFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentKnowledgeBasesFilter: dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#name DataOciGenerativeAiAgentKnowledgeBases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#values DataOciGenerativeAiAgentKnowledgeBases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#regex DataOciGenerativeAiAgentKnowledgeBases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#name DataOciGenerativeAiAgentKnowledgeBases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#values DataOciGenerativeAiAgentKnowledgeBases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#regex DataOciGenerativeAiAgentKnowledgeBases#regex}.

---

### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection: dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection = { ... }
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems: dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems = { ... }
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig: dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig = { ... }
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection: dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection = { ... }
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions: dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions = { ... }
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes: dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes = { ... }
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema: dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema = { ... }
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail: dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentKnowledgeBasesFilterList <a name="DataOciGenerativeAiAgentKnowledgeBasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGenerativeAiAgentKnowledgeBasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>[]

---


### DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGenerativeAiAgentKnowledgeBasesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.schema">schema</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.schema"></a>

```typescript
public readonly schema: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.bodyKey">bodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.embeddingBodyKey">embeddingBodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.titleKey">titleKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.urlKey">urlKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bodyKey`<sup>Required</sup> <a name="bodyKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.bodyKey"></a>

```typescript
public readonly bodyKey: string;
```

- *Type:* string

---

##### `embeddingBodyKey`<sup>Required</sup> <a name="embeddingBodyKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.embeddingBodyKey"></a>

```typescript
public readonly embeddingBodyKey: string;
```

- *Type:* string

---

##### `titleKey`<sup>Required</sup> <a name="titleKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.titleKey"></a>

```typescript
public readonly titleKey: string;
```

- *Type:* string

---

##### `urlKey`<sup>Required</sup> <a name="urlKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.urlKey"></a>

```typescript
public readonly urlKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseConnection">databaseConnection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseFunctions">databaseFunctions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexConfigType">indexConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexes">indexes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.secretDetail">secretDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.shouldEnableHybridSearch">shouldEnableHybridSearch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `databaseConnection`<sup>Required</sup> <a name="databaseConnection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseConnection"></a>

```typescript
public readonly databaseConnection: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList</a>

---

##### `databaseFunctions`<sup>Required</sup> <a name="databaseFunctions" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseFunctions"></a>

```typescript
public readonly databaseFunctions: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList</a>

---

##### `indexConfigType`<sup>Required</sup> <a name="indexConfigType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexConfigType"></a>

```typescript
public readonly indexConfigType: string;
```

- *Type:* string

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexes"></a>

```typescript
public readonly indexes: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList</a>

---

##### `secretDetail`<sup>Required</sup> <a name="secretDetail" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.secretDetail"></a>

```typescript
public readonly secretDetail: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList</a>

---

##### `shouldEnableHybridSearch`<sup>Required</sup> <a name="shouldEnableHybridSearch" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.shouldEnableHybridSearch"></a>

```typescript
public readonly shouldEnableHybridSearch: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.idcsUrl">idcsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.scopeUrl">scopeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.vaultSecretId">vaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `idcsUrl`<sup>Required</sup> <a name="idcsUrl" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.idcsUrl"></a>

```typescript
public readonly idcsUrl: string;
```

- *Type:* string

---

##### `scopeUrl`<sup>Required</sup> <a name="scopeUrl" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.scopeUrl"></a>

```typescript
public readonly scopeUrl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vaultSecretId`<sup>Required</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.vaultSecretId"></a>

```typescript
public readonly vaultSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.indexConfig">indexConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexConfig`<sup>Required</sup> <a name="indexConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.indexConfig"></a>

```typescript
public readonly indexConfig: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentKnowledgeBases } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection</a>

---



