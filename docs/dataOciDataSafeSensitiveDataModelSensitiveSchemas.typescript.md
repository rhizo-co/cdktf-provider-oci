# `dataOciDataSafeSensitiveDataModelSensitiveSchemas` Submodule <a name="`dataOciDataSafeSensitiveDataModelSensitiveSchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelSensitiveSchemas <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas oci_data_safe_sensitive_data_model_sensitive_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas(scope: Construct, id: string, config: DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig">DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig">DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isConstruct"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelSensitiveSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSensitiveDataModelSensitiveSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelSensitiveSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveSchemaCollection">sensitiveSchemaCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaNameInput">schemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaName">schemaName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList</a>

---

##### `sensitiveSchemaCollection`<sup>Required</sup> <a name="sensitiveSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveSchemaCollection"></a>

```typescript
public readonly sensitiveSchemaCollection: DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string[];
```

- *Type:* string[]

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelIdInput"></a>

```typescript
public readonly sensitiveDataModelIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveSchemasConfig: dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveSchemas#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#id DataOciDataSafeSensitiveDataModelSensitiveSchemas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.schemaName">schemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#schema_name DataOciDataSafeSensitiveDataModelSensitiveSchemas#schema_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveSchemas#sensitive_data_model_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#filter DataOciDataSafeSensitiveDataModelSensitiveSchemas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#id DataOciDataSafeSensitiveDataModelSensitiveSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#schema_name DataOciDataSafeSensitiveDataModelSensitiveSchemas#schema_name}.

---

### DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveSchemasFilter: dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#name DataOciDataSafeSensitiveDataModelSensitiveSchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#values DataOciDataSafeSensitiveDataModelSensitiveSchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#regex DataOciDataSafeSensitiveDataModelSensitiveSchemas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#name DataOciDataSafeSensitiveDataModelSensitiveSchemas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#values DataOciDataSafeSensitiveDataModelSensitiveSchemas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#regex DataOciDataSafeSensitiveDataModelSensitiveSchemas#regex}.

---

### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection: dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection = { ... }
```


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems: dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter</a>[]

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter</a>

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems</a>

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelSensitiveSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection</a>

---



