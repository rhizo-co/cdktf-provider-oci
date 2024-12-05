# `dataOciDataSafeMaskingReport` Submodule <a name="`dataOciDataSafeMaskingReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingReport <a name="DataOciDataSafeMaskingReport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_report oci_data_safe_masking_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingReport } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport(scope: Construct, id: string, config: DataOciDataSafeMaskingReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig">DataOciDataSafeMaskingReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig">DataOciDataSafeMaskingReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingReport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isConstruct"></a>

```typescript
import { dataOciDataSafeMaskingReport } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isTerraformElement"></a>

```typescript
import { dataOciDataSafeMaskingReport } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeMaskingReport } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeMaskingReport } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeMaskingReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeMaskingReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.isDropTempTablesEnabled">isDropTempTablesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.isRedoLoggingEnabled">isRedoLoggingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.isRefreshStatsEnabled">isRefreshStatsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.maskingWorkRequestId">maskingWorkRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.parallelDegree">parallelDegree</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.recompile">recompile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.timeMaskingFinished">timeMaskingFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.timeMaskingStarted">timeMaskingStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.totalMaskedColumns">totalMaskedColumns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.totalMaskedObjects">totalMaskedObjects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.totalMaskedSchemas">totalMaskedSchemas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.totalMaskedSensitiveTypes">totalMaskedSensitiveTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.totalMaskedValues">totalMaskedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.maskingReportIdInput">maskingReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.maskingReportId">maskingReportId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `isDropTempTablesEnabled`<sup>Required</sup> <a name="isDropTempTablesEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.isDropTempTablesEnabled"></a>

```typescript
public readonly isDropTempTablesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRedoLoggingEnabled`<sup>Required</sup> <a name="isRedoLoggingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.isRedoLoggingEnabled"></a>

```typescript
public readonly isRedoLoggingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRefreshStatsEnabled`<sup>Required</sup> <a name="isRefreshStatsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.isRefreshStatsEnabled"></a>

```typescript
public readonly isRefreshStatsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

---

##### `maskingWorkRequestId`<sup>Required</sup> <a name="maskingWorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.maskingWorkRequestId"></a>

```typescript
public readonly maskingWorkRequestId: string;
```

- *Type:* string

---

##### `parallelDegree`<sup>Required</sup> <a name="parallelDegree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.parallelDegree"></a>

```typescript
public readonly parallelDegree: string;
```

- *Type:* string

---

##### `recompile`<sup>Required</sup> <a name="recompile" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.recompile"></a>

```typescript
public readonly recompile: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeMaskingFinished`<sup>Required</sup> <a name="timeMaskingFinished" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.timeMaskingFinished"></a>

```typescript
public readonly timeMaskingFinished: string;
```

- *Type:* string

---

##### `timeMaskingStarted`<sup>Required</sup> <a name="timeMaskingStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.timeMaskingStarted"></a>

```typescript
public readonly timeMaskingStarted: string;
```

- *Type:* string

---

##### `totalMaskedColumns`<sup>Required</sup> <a name="totalMaskedColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.totalMaskedColumns"></a>

```typescript
public readonly totalMaskedColumns: string;
```

- *Type:* string

---

##### `totalMaskedObjects`<sup>Required</sup> <a name="totalMaskedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.totalMaskedObjects"></a>

```typescript
public readonly totalMaskedObjects: string;
```

- *Type:* string

---

##### `totalMaskedSchemas`<sup>Required</sup> <a name="totalMaskedSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.totalMaskedSchemas"></a>

```typescript
public readonly totalMaskedSchemas: string;
```

- *Type:* string

---

##### `totalMaskedSensitiveTypes`<sup>Required</sup> <a name="totalMaskedSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.totalMaskedSensitiveTypes"></a>

```typescript
public readonly totalMaskedSensitiveTypes: string;
```

- *Type:* string

---

##### `totalMaskedValues`<sup>Required</sup> <a name="totalMaskedValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.totalMaskedValues"></a>

```typescript
public readonly totalMaskedValues: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maskingReportIdInput`<sup>Optional</sup> <a name="maskingReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.maskingReportIdInput"></a>

```typescript
public readonly maskingReportIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingReportId`<sup>Required</sup> <a name="maskingReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.maskingReportId"></a>

```typescript
public readonly maskingReportId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingReportConfig <a name="DataOciDataSafeMaskingReportConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingReport } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingReportConfig: dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.maskingReportId">maskingReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_report#masking_report_id DataOciDataSafeMaskingReport#masking_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_report#id DataOciDataSafeMaskingReport#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maskingReportId`<sup>Required</sup> <a name="maskingReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.maskingReportId"></a>

```typescript
public readonly maskingReportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_report#masking_report_id DataOciDataSafeMaskingReport#masking_report_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReport.DataOciDataSafeMaskingReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_report#id DataOciDataSafeMaskingReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



