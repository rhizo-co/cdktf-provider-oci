# `dataOciApmTracesTraceAggregatedSnapshotData` Submodule <a name="`dataOciApmTracesTraceAggregatedSnapshotData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTraceAggregatedSnapshotData <a name="DataOciApmTracesTraceAggregatedSnapshotData" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data oci_apm_traces_trace_aggregated_snapshot_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer"></a>

```typescript
import { dataOciApmTracesTraceAggregatedSnapshotData } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData(scope: Construct, id: string, config: DataOciApmTracesTraceAggregatedSnapshotDataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig">DataOciApmTracesTraceAggregatedSnapshotDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig">DataOciApmTracesTraceAggregatedSnapshotDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanKey">resetSpanKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanName">resetSpanName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServerName` <a name="resetServerName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetServiceName` <a name="resetServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetSpanKey` <a name="resetSpanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanKey"></a>

```typescript
public resetSpanKey(): void
```

##### `resetSpanName` <a name="resetSpanName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanName"></a>

```typescript
public resetSpanName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesTraceAggregatedSnapshotData resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct"></a>

```typescript
import { dataOciApmTracesTraceAggregatedSnapshotData } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement"></a>

```typescript
import { dataOciApmTracesTraceAggregatedSnapshotData } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource"></a>

```typescript
import { dataOciApmTracesTraceAggregatedSnapshotData } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport"></a>

```typescript
import { dataOciApmTracesTraceAggregatedSnapshotData } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApmTracesTraceAggregatedSnapshotData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmTracesTraceAggregatedSnapshotData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmTracesTraceAggregatedSnapshotData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTraceAggregatedSnapshotData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList">DataOciApmTracesTraceAggregatedSnapshotDataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKeyInput">spanKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanNameInput">spanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKeyInput">traceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKey">spanKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanName">spanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKey">traceKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.details"></a>

```typescript
public readonly details: DataOciApmTracesTraceAggregatedSnapshotDataDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList">DataOciApmTracesTraceAggregatedSnapshotDataDetailsList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `spanKeyInput`<sup>Optional</sup> <a name="spanKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKeyInput"></a>

```typescript
public readonly spanKeyInput: string;
```

- *Type:* string

---

##### `spanNameInput`<sup>Optional</sup> <a name="spanNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanNameInput"></a>

```typescript
public readonly spanNameInput: string;
```

- *Type:* string

---

##### `traceKeyInput`<sup>Optional</sup> <a name="traceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKeyInput"></a>

```typescript
public readonly traceKeyInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `spanKey`<sup>Required</sup> <a name="spanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKey"></a>

```typescript
public readonly spanKey: string;
```

- *Type:* string

---

##### `spanName`<sup>Required</sup> <a name="spanName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanName"></a>

```typescript
public readonly spanName: string;
```

- *Type:* string

---

##### `traceKey`<sup>Required</sup> <a name="traceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKey"></a>

```typescript
public readonly traceKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceAggregatedSnapshotDataConfig <a name="DataOciApmTracesTraceAggregatedSnapshotDataConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.Initializer"></a>

```typescript
import { dataOciApmTracesTraceAggregatedSnapshotData } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceAggregatedSnapshotDataConfig: dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.traceKey">traceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanKey">spanKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanName">spanName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}.

---

##### `traceKey`<sup>Required</sup> <a name="traceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.traceKey"></a>

```typescript
public readonly traceKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}.

---

##### `spanKey`<sup>Optional</sup> <a name="spanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanKey"></a>

```typescript
public readonly spanKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}.

---

##### `spanName`<sup>Optional</sup> <a name="spanName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanName"></a>

```typescript
public readonly spanName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}.

---

### DataOciApmTracesTraceAggregatedSnapshotDataDetails <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails.Initializer"></a>

```typescript
import { dataOciApmTracesTraceAggregatedSnapshotData } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceAggregatedSnapshotDataDetails: dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceAggregatedSnapshotDataDetailsList <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer"></a>

```typescript
import { dataOciApmTracesTraceAggregatedSnapshotData } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get"></a>

```typescript
public get(index: number): DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesTraceAggregatedSnapshotData } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails">DataOciApmTracesTraceAggregatedSnapshotDataDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmTracesTraceAggregatedSnapshotDataDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails">DataOciApmTracesTraceAggregatedSnapshotDataDetails</a>

---



