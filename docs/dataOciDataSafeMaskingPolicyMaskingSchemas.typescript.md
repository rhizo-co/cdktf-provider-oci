# `dataOciDataSafeMaskingPolicyMaskingSchemas` Submodule <a name="`dataOciDataSafeMaskingPolicyMaskingSchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyMaskingSchemas <a name="DataOciDataSafeMaskingPolicyMaskingSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas oci_data_safe_masking_policy_masking_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas(scope: Construct, id: string, config: DataOciDataSafeMaskingPolicyMaskingSchemasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig">DataOciDataSafeMaskingPolicyMaskingSchemasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig">DataOciDataSafeMaskingPolicyMaskingSchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeMaskingPolicyMaskingSchemasFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter">DataOciDataSafeMaskingPolicyMaskingSchemasFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyMaskingSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isConstruct"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformElement"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyMaskingSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyMaskingSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeMaskingPolicyMaskingSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyMaskingSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList">DataOciDataSafeMaskingPolicyMaskingSchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingSchemaCollection">maskingSchemaCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter">DataOciDataSafeMaskingPolicyMaskingSchemasFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyIdInput">maskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaNameInput">schemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaName">schemaName</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeMaskingPolicyMaskingSchemasFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList">DataOciDataSafeMaskingPolicyMaskingSchemasFilterList</a>

---

##### `maskingSchemaCollection`<sup>Required</sup> <a name="maskingSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingSchemaCollection"></a>

```typescript
public readonly maskingSchemaCollection: DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeMaskingPolicyMaskingSchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter">DataOciDataSafeMaskingPolicyMaskingSchemasFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maskingPolicyIdInput`<sup>Optional</sup> <a name="maskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyIdInput"></a>

```typescript
public readonly maskingPolicyIdInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyMaskingSchemasConfig <a name="DataOciDataSafeMaskingPolicyMaskingSchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyMaskingSchemasConfig: dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#masking_policy_id DataOciDataSafeMaskingPolicyMaskingSchemas#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter">DataOciDataSafeMaskingPolicyMaskingSchemasFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#id DataOciDataSafeMaskingPolicyMaskingSchemas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.schemaName">schemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#schema_name DataOciDataSafeMaskingPolicyMaskingSchemas#schema_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#masking_policy_id DataOciDataSafeMaskingPolicyMaskingSchemas#masking_policy_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeMaskingPolicyMaskingSchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter">DataOciDataSafeMaskingPolicyMaskingSchemasFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#filter DataOciDataSafeMaskingPolicyMaskingSchemas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#id DataOciDataSafeMaskingPolicyMaskingSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#schema_name DataOciDataSafeMaskingPolicyMaskingSchemas#schema_name}.

---

### DataOciDataSafeMaskingPolicyMaskingSchemasFilter <a name="DataOciDataSafeMaskingPolicyMaskingSchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyMaskingSchemasFilter: dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#name DataOciDataSafeMaskingPolicyMaskingSchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#values DataOciDataSafeMaskingPolicyMaskingSchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#regex DataOciDataSafeMaskingPolicyMaskingSchemas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#name DataOciDataSafeMaskingPolicyMaskingSchemas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#values DataOciDataSafeMaskingPolicyMaskingSchemas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#regex DataOciDataSafeMaskingPolicyMaskingSchemas#regex}.

---

### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection: dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection = { ... }
```


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems: dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyMaskingSchemasFilterList <a name="DataOciDataSafeMaskingPolicyMaskingSchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter">DataOciDataSafeMaskingPolicyMaskingSchemasFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeMaskingPolicyMaskingSchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter">DataOciDataSafeMaskingPolicyMaskingSchemasFilter</a>[]

---


### DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter">DataOciDataSafeMaskingPolicyMaskingSchemasFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeMaskingPolicyMaskingSchemasFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter">DataOciDataSafeMaskingPolicyMaskingSchemasFilter</a>

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems</a>

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeMaskingPolicyMaskingSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection</a>

---



