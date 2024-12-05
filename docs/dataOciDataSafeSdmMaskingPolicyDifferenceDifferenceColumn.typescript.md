# `dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn` Submodule <a name="`dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column oci_data_safe_sdm_masking_policy_difference_difference_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn(scope: Construct, id: string, config: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isConstruct"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.differenceType">differenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.maskingColumnkey">maskingColumnkey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.plannedAction">plannedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.sensitiveColumnkey">sensitiveColumnkey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.syncStatus">syncStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.timeLastSynced">timeLastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.differenceColumnKeyInput">differenceColumnKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.sdmMaskingPolicyDifferenceIdInput">sdmMaskingPolicyDifferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.differenceColumnKey">differenceColumnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.sdmMaskingPolicyDifferenceId">sdmMaskingPolicyDifferenceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `differenceType`<sup>Required</sup> <a name="differenceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.differenceType"></a>

```typescript
public readonly differenceType: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maskingColumnkey`<sup>Required</sup> <a name="maskingColumnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.maskingColumnkey"></a>

```typescript
public readonly maskingColumnkey: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `plannedAction`<sup>Required</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.plannedAction"></a>

```typescript
public readonly plannedAction: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sensitiveColumnkey`<sup>Required</sup> <a name="sensitiveColumnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.sensitiveColumnkey"></a>

```typescript
public readonly sensitiveColumnkey: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `syncStatus`<sup>Required</sup> <a name="syncStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.syncStatus"></a>

```typescript
public readonly syncStatus: string;
```

- *Type:* string

---

##### `timeLastSynced`<sup>Required</sup> <a name="timeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.timeLastSynced"></a>

```typescript
public readonly timeLastSynced: string;
```

- *Type:* string

---

##### `differenceColumnKeyInput`<sup>Optional</sup> <a name="differenceColumnKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.differenceColumnKeyInput"></a>

```typescript
public readonly differenceColumnKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sdmMaskingPolicyDifferenceIdInput`<sup>Optional</sup> <a name="sdmMaskingPolicyDifferenceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.sdmMaskingPolicyDifferenceIdInput"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceIdInput: string;
```

- *Type:* string

---

##### `differenceColumnKey`<sup>Required</sup> <a name="differenceColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.differenceColumnKey"></a>

```typescript
public readonly differenceColumnKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sdmMaskingPolicyDifferenceId`<sup>Required</sup> <a name="sdmMaskingPolicyDifferenceId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.sdmMaskingPolicyDifferenceId"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig: dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.differenceColumnKey">differenceColumnKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#difference_column_key DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn#difference_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.sdmMaskingPolicyDifferenceId">sdmMaskingPolicyDifferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#sdm_masking_policy_difference_id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn#sdm_masking_policy_difference_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `differenceColumnKey`<sup>Required</sup> <a name="differenceColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.differenceColumnKey"></a>

```typescript
public readonly differenceColumnKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#difference_column_key DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn#difference_column_key}.

---

##### `sdmMaskingPolicyDifferenceId`<sup>Required</sup> <a name="sdmMaskingPolicyDifferenceId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.sdmMaskingPolicyDifferenceId"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#sdm_masking_policy_difference_id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn#sdm_masking_policy_difference_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



