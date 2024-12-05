# `dataOciCoreInstanceMeasuredBootReport` Submodule <a name="`dataOciCoreInstanceMeasuredBootReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceMeasuredBootReport <a name="DataOciCoreInstanceMeasuredBootReport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report oci_core_instance_measured_boot_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport(scope: Construct, id: string, config: DataOciCoreInstanceMeasuredBootReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig">DataOciCoreInstanceMeasuredBootReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig">DataOciCoreInstanceMeasuredBootReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceMeasuredBootReport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreInstanceMeasuredBootReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreInstanceMeasuredBootReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreInstanceMeasuredBootReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceMeasuredBootReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.isPolicyVerificationSuccessful">isPolicyVerificationSuccessful</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.measurements">measurements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList">DataOciCoreInstanceMeasuredBootReportMeasurementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `isPolicyVerificationSuccessful`<sup>Required</sup> <a name="isPolicyVerificationSuccessful" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.isPolicyVerificationSuccessful"></a>

```typescript
public readonly isPolicyVerificationSuccessful: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `measurements`<sup>Required</sup> <a name="measurements" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.measurements"></a>

```typescript
public readonly measurements: DataOciCoreInstanceMeasuredBootReportMeasurementsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList">DataOciCoreInstanceMeasuredBootReportMeasurementsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceMeasuredBootReportConfig <a name="DataOciCoreInstanceMeasuredBootReportConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreInstanceMeasuredBootReportConfig: dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#instance_id DataOciCoreInstanceMeasuredBootReport#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#id DataOciCoreInstanceMeasuredBootReport#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#instance_id DataOciCoreInstanceMeasuredBootReport#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_measured_boot_report#id DataOciCoreInstanceMeasuredBootReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreInstanceMeasuredBootReportMeasurements <a name="DataOciCoreInstanceMeasuredBootReportMeasurements" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreInstanceMeasuredBootReportMeasurements: dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements = { ... }
```


### DataOciCoreInstanceMeasuredBootReportMeasurementsActual <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActual" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreInstanceMeasuredBootReportMeasurementsActual: dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual = { ... }
```


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreInstanceMeasuredBootReportMeasurementsPolicy: dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreInstanceMeasuredBootReportMeasurementsActualList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActualList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get"></a>

```typescript
public get(index: number): DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.hashAlgorithm">hashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.pcrIndex">pcrIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual">DataOciCoreInstanceMeasuredBootReportMeasurementsActual</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.hashAlgorithm"></a>

```typescript
public readonly hashAlgorithm: string;
```

- *Type:* string

---

##### `pcrIndex`<sup>Required</sup> <a name="pcrIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.pcrIndex"></a>

```typescript
public readonly pcrIndex: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreInstanceMeasuredBootReportMeasurementsActual;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActual">DataOciCoreInstanceMeasuredBootReportMeasurementsActual</a>

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get"></a>

```typescript
public get(index: number): DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.actual">actual</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList">DataOciCoreInstanceMeasuredBootReportMeasurementsActualList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements">DataOciCoreInstanceMeasuredBootReportMeasurements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actual`<sup>Required</sup> <a name="actual" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.actual"></a>

```typescript
public readonly actual: DataOciCoreInstanceMeasuredBootReportMeasurementsActualList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsActualList">DataOciCoreInstanceMeasuredBootReportMeasurementsActualList</a>

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.policy"></a>

```typescript
public readonly policy: DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreInstanceMeasuredBootReportMeasurements;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurements">DataOciCoreInstanceMeasuredBootReportMeasurements</a>

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get"></a>

```typescript
public get(index: number): DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference <a name="DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciCoreInstanceMeasuredBootReport } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.hashAlgorithm">hashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.pcrIndex">pcrIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.hashAlgorithm"></a>

```typescript
public readonly hashAlgorithm: string;
```

- *Type:* string

---

##### `pcrIndex`<sup>Required</sup> <a name="pcrIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.pcrIndex"></a>

```typescript
public readonly pcrIndex: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMeasuredBootReport.DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy">DataOciCoreInstanceMeasuredBootReportMeasurementsPolicy</a>

---



