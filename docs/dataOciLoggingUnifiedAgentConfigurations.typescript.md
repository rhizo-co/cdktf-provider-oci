# `dataOciLoggingUnifiedAgentConfigurations` Submodule <a name="`dataOciLoggingUnifiedAgentConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoggingUnifiedAgentConfigurations <a name="DataOciLoggingUnifiedAgentConfigurations" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations oci_logging_unified_agent_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations(scope: Construct, id: string, config: DataOciLoggingUnifiedAgentConfigurationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig">DataOciLoggingUnifiedAgentConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig">DataOciLoggingUnifiedAgentConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetIsCompartmentIdInSubtree">resetIsCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetLogId">resetLogId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLoggingUnifiedAgentConfigurationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupId` <a name="resetGroupId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCompartmentIdInSubtree` <a name="resetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetIsCompartmentIdInSubtree"></a>

```typescript
public resetIsCompartmentIdInSubtree(): void
```

##### `resetLogId` <a name="resetLogId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetLogId"></a>

```typescript
public resetLogId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoggingUnifiedAgentConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLoggingUnifiedAgentConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoggingUnifiedAgentConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoggingUnifiedAgentConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoggingUnifiedAgentConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList">DataOciLoggingUnifiedAgentConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.unifiedAgentConfigurationCollection">unifiedAgentConfigurationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtreeInput">isCompartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logIdInput">logIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filter"></a>

```typescript
public readonly filter: DataOciLoggingUnifiedAgentConfigurationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList">DataOciLoggingUnifiedAgentConfigurationsFilterList</a>

---

##### `unifiedAgentConfigurationCollection`<sup>Required</sup> <a name="unifiedAgentConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.unifiedAgentConfigurationCollection"></a>

```typescript
public readonly unifiedAgentConfigurationCollection: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLoggingUnifiedAgentConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>[]

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="isCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtreeInput"></a>

```typescript
public readonly isCompartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logIdInput"></a>

```typescript
public readonly logIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCompartmentIdInSubtree`<sup>Required</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.isCompartmentIdInSubtree"></a>

```typescript
public readonly isCompartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoggingUnifiedAgentConfigurationsConfig <a name="DataOciLoggingUnifiedAgentConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciLoggingUnifiedAgentConfigurationsConfig: dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.logId">logId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#compartment_id DataOciLoggingUnifiedAgentConfigurations#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#display_name DataOciLoggingUnifiedAgentConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLoggingUnifiedAgentConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#filter DataOciLoggingUnifiedAgentConfigurations#filter}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#group_id DataOciLoggingUnifiedAgentConfigurations#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#id DataOciLoggingUnifiedAgentConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCompartmentIdInSubtree`<sup>Optional</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.isCompartmentIdInSubtree"></a>

```typescript
public readonly isCompartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#is_compartment_id_in_subtree DataOciLoggingUnifiedAgentConfigurations#is_compartment_id_in_subtree}.

---

##### `logId`<sup>Optional</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#log_id DataOciLoggingUnifiedAgentConfigurations#log_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#state DataOciLoggingUnifiedAgentConfigurations#state}.

---

### DataOciLoggingUnifiedAgentConfigurationsFilter <a name="DataOciLoggingUnifiedAgentConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciLoggingUnifiedAgentConfigurationsFilter: dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#name DataOciLoggingUnifiedAgentConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#values DataOciLoggingUnifiedAgentConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#regex DataOciLoggingUnifiedAgentConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#name DataOciLoggingUnifiedAgentConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#values DataOciLoggingUnifiedAgentConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/logging_unified_agent_configurations#regex DataOciLoggingUnifiedAgentConfigurations#regex}.

---

### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection: dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection = { ... }
```


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems: dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoggingUnifiedAgentConfigurationsFilterList <a name="DataOciLoggingUnifiedAgentConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get"></a>

```typescript
public get(index: number): DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLoggingUnifiedAgentConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>[]

---


### DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLoggingUnifiedAgentConfigurationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsFilter">DataOciLoggingUnifiedAgentConfigurationsFilter</a>

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationState">configurationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationType">configurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeLastModified">timeLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configurationState`<sup>Required</sup> <a name="configurationState" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationState"></a>

```typescript
public readonly configurationState: string;
```

- *Type:* string

---

##### `configurationType`<sup>Required</sup> <a name="configurationType" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.configurationType"></a>

```typescript
public readonly configurationType: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastModified`<sup>Required</sup> <a name="timeLastModified" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.timeLastModified"></a>

```typescript
public readonly timeLastModified: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItems</a>

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get"></a>

```typescript
public get(index: number): DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference <a name="DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciLoggingUnifiedAgentConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoggingUnifiedAgentConfigurations.DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection">DataOciLoggingUnifiedAgentConfigurationsUnifiedAgentConfigurationCollection</a>

---



