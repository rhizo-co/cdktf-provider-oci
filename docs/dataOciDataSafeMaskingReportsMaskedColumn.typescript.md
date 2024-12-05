# `dataOciDataSafeMaskingReportsMaskedColumn` Submodule <a name="`dataOciDataSafeMaskingReportsMaskedColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingReportsMaskedColumn <a name="DataOciDataSafeMaskingReportsMaskedColumn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column oci_data_safe_masking_reports_masked_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingReportsMaskedColumn } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn(scope: Construct, id: string, config: DataOciDataSafeMaskingReportsMaskedColumnConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig">DataOciDataSafeMaskingReportsMaskedColumnConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig">DataOciDataSafeMaskingReportsMaskedColumnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetMaskingColumnGroup">resetMaskingColumnGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSensitiveTypeId">resetSensitiveTypeId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetColumnName"></a>

```typescript
public resetColumnName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaskingColumnGroup` <a name="resetMaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetMaskingColumnGroup"></a>

```typescript
public resetMaskingColumnGroup(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetObjectType` <a name="resetObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObjectType"></a>

```typescript
public resetObjectType(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetSensitiveTypeId` <a name="resetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSensitiveTypeId"></a>

```typescript
public resetSensitiveTypeId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct"></a>

```typescript
import { dataOciDataSafeMaskingReportsMaskedColumn } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement"></a>

```typescript
import { dataOciDataSafeMaskingReportsMaskedColumn } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeMaskingReportsMaskedColumn } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeMaskingReportsMaskedColumn } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeMaskingReportsMaskedColumn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeMaskingReportsMaskedColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingReportsMaskedColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList">DataOciDataSafeMaskingReportsMaskedColumnItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnNameInput">columnNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroupInput">maskingColumnGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportIdInput">maskingReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectInput">objectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectTypeInput">objectTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaNameInput">schemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeIdInput">sensitiveTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnName">columnName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroup">maskingColumnGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportId">maskingReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.object">object</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectType">objectType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaName">schemaName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.items"></a>

```typescript
public readonly items: DataOciDataSafeMaskingReportsMaskedColumnItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList">DataOciDataSafeMaskingReportsMaskedColumnItemsList</a>

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maskingColumnGroupInput`<sup>Optional</sup> <a name="maskingColumnGroupInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroupInput"></a>

```typescript
public readonly maskingColumnGroupInput: string[];
```

- *Type:* string[]

---

##### `maskingReportIdInput`<sup>Optional</sup> <a name="maskingReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportIdInput"></a>

```typescript
public readonly maskingReportIdInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectInput"></a>

```typescript
public readonly objectInput: string[];
```

- *Type:* string[]

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string[];
```

- *Type:* string[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string[];
```

- *Type:* string[]

---

##### `sensitiveTypeIdInput`<sup>Optional</sup> <a name="sensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeIdInput"></a>

```typescript
public readonly sensitiveTypeIdInput: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnName"></a>

```typescript
public readonly columnName: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingColumnGroup`<sup>Required</sup> <a name="maskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroup"></a>

```typescript
public readonly maskingColumnGroup: string[];
```

- *Type:* string[]

---

##### `maskingReportId`<sup>Required</sup> <a name="maskingReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportId"></a>

```typescript
public readonly maskingReportId: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.object"></a>

```typescript
public readonly object: string[];
```

- *Type:* string[]

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectType"></a>

```typescript
public readonly objectType: string[];
```

- *Type:* string[]

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingReportsMaskedColumnConfig <a name="DataOciDataSafeMaskingReportsMaskedColumnConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingReportsMaskedColumn } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingReportsMaskedColumnConfig: dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingReportId">maskingReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_report_id DataOciDataSafeMaskingReportsMaskedColumn#masking_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.columnName">columnName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#column_name DataOciDataSafeMaskingReportsMaskedColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#id DataOciDataSafeMaskingReportsMaskedColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingColumnGroup">maskingColumnGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_column_group DataOciDataSafeMaskingReportsMaskedColumn#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.object">object</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object DataOciDataSafeMaskingReportsMaskedColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.objectType">objectType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object_type DataOciDataSafeMaskingReportsMaskedColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.schemaName">schemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#schema_name DataOciDataSafeMaskingReportsMaskedColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumn#sensitive_type_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maskingReportId`<sup>Required</sup> <a name="maskingReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingReportId"></a>

```typescript
public readonly maskingReportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_report_id DataOciDataSafeMaskingReportsMaskedColumn#masking_report_id}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.columnName"></a>

```typescript
public readonly columnName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#column_name DataOciDataSafeMaskingReportsMaskedColumn#column_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#id DataOciDataSafeMaskingReportsMaskedColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maskingColumnGroup`<sup>Optional</sup> <a name="maskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingColumnGroup"></a>

```typescript
public readonly maskingColumnGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_column_group DataOciDataSafeMaskingReportsMaskedColumn#masking_column_group}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.object"></a>

```typescript
public readonly object: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object DataOciDataSafeMaskingReportsMaskedColumn#object}.

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.objectType"></a>

```typescript
public readonly objectType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object_type DataOciDataSafeMaskingReportsMaskedColumn#object_type}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#schema_name DataOciDataSafeMaskingReportsMaskedColumn#schema_name}.

---

##### `sensitiveTypeId`<sup>Optional</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumn#sensitive_type_id}.

---

### DataOciDataSafeMaskingReportsMaskedColumnItems <a name="DataOciDataSafeMaskingReportsMaskedColumnItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingReportsMaskedColumn } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingReportsMaskedColumnItems: dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingReportsMaskedColumnItemsList <a name="DataOciDataSafeMaskingReportsMaskedColumnItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingReportsMaskedColumn } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference <a name="DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingReportsMaskedColumn } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingColumnGroup">maskingColumnGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingFormatUsed">maskingFormatUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.parentColumnKey">parentColumnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.totalMaskedValues">totalMaskedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems">DataOciDataSafeMaskingReportsMaskedColumnItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maskingColumnGroup`<sup>Required</sup> <a name="maskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingColumnGroup"></a>

```typescript
public readonly maskingColumnGroup: string;
```

- *Type:* string

---

##### `maskingFormatUsed`<sup>Required</sup> <a name="maskingFormatUsed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingFormatUsed"></a>

```typescript
public readonly maskingFormatUsed: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `parentColumnKey`<sup>Required</sup> <a name="parentColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.parentColumnKey"></a>

```typescript
public readonly parentColumnKey: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `totalMaskedValues`<sup>Required</sup> <a name="totalMaskedValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.totalMaskedValues"></a>

```typescript
public readonly totalMaskedValues: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeMaskingReportsMaskedColumnItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems">DataOciDataSafeMaskingReportsMaskedColumnItems</a>

---



