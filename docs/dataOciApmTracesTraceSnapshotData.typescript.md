# `dataOciApmTracesTraceSnapshotData` Submodule <a name="`dataOciApmTracesTraceSnapshotData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTraceSnapshotData <a name="DataOciApmTracesTraceSnapshotData" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data oci_apm_traces_trace_snapshot_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer"></a>

```typescript
import { dataOciApmTracesTraceSnapshotData } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData(scope: Construct, id: string, config: DataOciApmTracesTraceSnapshotDataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig">DataOciApmTracesTraceSnapshotDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig">DataOciApmTracesTraceSnapshotDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetIsSummarized">resetIsSummarized</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetSnapshotTime">resetSnapshotTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetThreadId">resetThreadId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsSummarized` <a name="resetIsSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetIsSummarized"></a>

```typescript
public resetIsSummarized(): void
```

##### `resetSnapshotTime` <a name="resetSnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetSnapshotTime"></a>

```typescript
public resetSnapshotTime(): void
```

##### `resetThreadId` <a name="resetThreadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetThreadId"></a>

```typescript
public resetThreadId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesTraceSnapshotData resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct"></a>

```typescript
import { dataOciApmTracesTraceSnapshotData } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement"></a>

```typescript
import { dataOciApmTracesTraceSnapshotData } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource"></a>

```typescript
import { dataOciApmTracesTraceSnapshotData } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport"></a>

```typescript
import { dataOciApmTracesTraceSnapshotData } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApmTracesTraceSnapshotData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmTracesTraceSnapshotData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmTracesTraceSnapshotData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTraceSnapshotData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceSnapshotDetails">traceSnapshotDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarizedInput">isSummarizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTimeInput">snapshotTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadIdInput">threadIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKeyInput">traceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarized">isSummarized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTime">snapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadId">threadId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKey">traceKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `traceSnapshotDetails`<sup>Required</sup> <a name="traceSnapshotDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceSnapshotDetails"></a>

```typescript
public readonly traceSnapshotDetails: DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isSummarizedInput`<sup>Optional</sup> <a name="isSummarizedInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarizedInput"></a>

```typescript
public readonly isSummarizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotTimeInput`<sup>Optional</sup> <a name="snapshotTimeInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTimeInput"></a>

```typescript
public readonly snapshotTimeInput: string;
```

- *Type:* string

---

##### `threadIdInput`<sup>Optional</sup> <a name="threadIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadIdInput"></a>

```typescript
public readonly threadIdInput: string;
```

- *Type:* string

---

##### `traceKeyInput`<sup>Optional</sup> <a name="traceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKeyInput"></a>

```typescript
public readonly traceKeyInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isSummarized`<sup>Required</sup> <a name="isSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarized"></a>

```typescript
public readonly isSummarized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotTime`<sup>Required</sup> <a name="snapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTime"></a>

```typescript
public readonly snapshotTime: string;
```

- *Type:* string

---

##### `threadId`<sup>Required</sup> <a name="threadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadId"></a>

```typescript
public readonly threadId: string;
```

- *Type:* string

---

##### `traceKey`<sup>Required</sup> <a name="traceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKey"></a>

```typescript
public readonly traceKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceSnapshotDataConfig <a name="DataOciApmTracesTraceSnapshotDataConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.Initializer"></a>

```typescript
import { dataOciApmTracesTraceSnapshotData } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceSnapshotDataConfig: dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.traceKey">traceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.isSummarized">isSummarized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.snapshotTime">snapshotTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.threadId">threadId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}.

---

##### `traceKey`<sup>Required</sup> <a name="traceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.traceKey"></a>

```typescript
public readonly traceKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSummarized`<sup>Optional</sup> <a name="isSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.isSummarized"></a>

```typescript
public readonly isSummarized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}.

---

##### `snapshotTime`<sup>Optional</sup> <a name="snapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.snapshotTime"></a>

```typescript
public readonly snapshotTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}.

---

##### `threadId`<sup>Optional</sup> <a name="threadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.threadId"></a>

```typescript
public readonly threadId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}.

---

### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails.Initializer"></a>

```typescript
import { dataOciApmTracesTraceSnapshotData } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceSnapshotDataTraceSnapshotDetails: dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer"></a>

```typescript
import { dataOciApmTracesTraceSnapshotData } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get"></a>

```typescript
public get(index: number): DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesTraceSnapshotData } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails</a>

---



