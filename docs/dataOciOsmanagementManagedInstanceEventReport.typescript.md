# `dataOciOsmanagementManagedInstanceEventReport` Submodule <a name="`dataOciOsmanagementManagedInstanceEventReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceEventReport <a name="DataOciOsmanagementManagedInstanceEventReport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report oci_osmanagement_managed_instance_event_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceEventReport } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport(scope: Construct, id: string, config: DataOciOsmanagementManagedInstanceEventReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig">DataOciOsmanagementManagedInstanceEventReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig">DataOciOsmanagementManagedInstanceEventReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetLatestTimestampGreaterThanOrEqualTo">resetLatestTimestampGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetLatestTimestampLessThan">resetLatestTimestampLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLatestTimestampGreaterThanOrEqualTo` <a name="resetLatestTimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetLatestTimestampGreaterThanOrEqualTo"></a>

```typescript
public resetLatestTimestampGreaterThanOrEqualTo(): void
```

##### `resetLatestTimestampLessThan` <a name="resetLatestTimestampLessThan" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetLatestTimestampLessThan"></a>

```typescript
public resetLatestTimestampLessThan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceEventReport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isConstruct"></a>

```typescript
import { dataOciOsmanagementManagedInstanceEventReport } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformElement"></a>

```typescript
import { dataOciOsmanagementManagedInstanceEventReport } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformDataSource"></a>

```typescript
import { dataOciOsmanagementManagedInstanceEventReport } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport"></a>

```typescript
import { dataOciOsmanagementManagedInstanceEventReport } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceEventReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceEventReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsmanagementManagedInstanceEventReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceEventReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.counts">counts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampGreaterThanOrEqualToInput">latestTimestampGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampLessThanInput">latestTimestampLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampGreaterThanOrEqualTo">latestTimestampGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampLessThan">latestTimestampLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `counts`<sup>Required</sup> <a name="counts" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.counts"></a>

```typescript
public readonly counts: number;
```

- *Type:* number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `latestTimestampGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="latestTimestampGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampGreaterThanOrEqualToInput"></a>

```typescript
public readonly latestTimestampGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `latestTimestampLessThanInput`<sup>Optional</sup> <a name="latestTimestampLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampLessThanInput"></a>

```typescript
public readonly latestTimestampLessThanInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `latestTimestampGreaterThanOrEqualTo`<sup>Required</sup> <a name="latestTimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampGreaterThanOrEqualTo"></a>

```typescript
public readonly latestTimestampGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `latestTimestampLessThan`<sup>Required</sup> <a name="latestTimestampLessThan" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampLessThan"></a>

```typescript
public readonly latestTimestampLessThan: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceEventReportConfig <a name="DataOciOsmanagementManagedInstanceEventReportConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceEventReport } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstanceEventReportConfig: dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#compartment_id DataOciOsmanagementManagedInstanceEventReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#managed_instance_id DataOciOsmanagementManagedInstanceEventReport#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#id DataOciOsmanagementManagedInstanceEventReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.latestTimestampGreaterThanOrEqualTo">latestTimestampGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_greater_than_or_equal_to DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.latestTimestampLessThan">latestTimestampLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_less_than DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#compartment_id DataOciOsmanagementManagedInstanceEventReport#compartment_id}.

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#managed_instance_id DataOciOsmanagementManagedInstanceEventReport#managed_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#id DataOciOsmanagementManagedInstanceEventReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latestTimestampGreaterThanOrEqualTo`<sup>Optional</sup> <a name="latestTimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.latestTimestampGreaterThanOrEqualTo"></a>

```typescript
public readonly latestTimestampGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_greater_than_or_equal_to DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_greater_than_or_equal_to}.

---

##### `latestTimestampLessThan`<sup>Optional</sup> <a name="latestTimestampLessThan" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.latestTimestampLessThan"></a>

```typescript
public readonly latestTimestampLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_less_than DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_less_than}.

---



