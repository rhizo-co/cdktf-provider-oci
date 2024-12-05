# `dataOciDataSafeTargetDatabasesSchemas` Submodule <a name="`dataOciDataSafeTargetDatabasesSchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabasesSchemas <a name="DataOciDataSafeTargetDatabasesSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas oci_data_safe_target_databases_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas(scope: Construct, id: string, config: DataOciDataSafeTargetDatabasesSchemasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig">DataOciDataSafeTargetDatabasesSchemasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig">DataOciDataSafeTargetDatabasesSchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetIsOracleMaintained">resetIsOracleMaintained</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetSchemaNameContains">resetSchemaNameContains</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeTargetDatabasesSchemasFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter">DataOciDataSafeTargetDatabasesSchemasFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsOracleMaintained` <a name="resetIsOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetIsOracleMaintained"></a>

```typescript
public resetIsOracleMaintained(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetSchemaNameContains` <a name="resetSchemaNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.resetSchemaNameContains"></a>

```typescript
public resetSchemaNameContains(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabasesSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isConstruct"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isTerraformElement"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabasesSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeTargetDatabasesSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeTargetDatabasesSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabasesSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList">DataOciDataSafeTargetDatabasesSchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.schemas">schemas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList">DataOciDataSafeTargetDatabasesSchemasSchemasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter">DataOciDataSafeTargetDatabasesSchemasFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.isOracleMaintainedInput">isOracleMaintainedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.schemaNameContainsInput">schemaNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.schemaNameInput">schemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.targetDatabaseIdInput">targetDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.isOracleMaintained">isOracleMaintained</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.schemaName">schemaName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.schemaNameContains">schemaNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.targetDatabaseId">targetDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeTargetDatabasesSchemasFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList">DataOciDataSafeTargetDatabasesSchemasFilterList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.schemas"></a>

```typescript
public readonly schemas: DataOciDataSafeTargetDatabasesSchemasSchemasList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList">DataOciDataSafeTargetDatabasesSchemasSchemasList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeTargetDatabasesSchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter">DataOciDataSafeTargetDatabasesSchemasFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isOracleMaintainedInput`<sup>Optional</sup> <a name="isOracleMaintainedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.isOracleMaintainedInput"></a>

```typescript
public readonly isOracleMaintainedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaNameContainsInput`<sup>Optional</sup> <a name="schemaNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.schemaNameContainsInput"></a>

```typescript
public readonly schemaNameContainsInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string[];
```

- *Type:* string[]

---

##### `targetDatabaseIdInput`<sup>Optional</sup> <a name="targetDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.targetDatabaseIdInput"></a>

```typescript
public readonly targetDatabaseIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isOracleMaintained`<sup>Required</sup> <a name="isOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.isOracleMaintained"></a>

```typescript
public readonly isOracleMaintained: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

---

##### `schemaNameContains`<sup>Required</sup> <a name="schemaNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.schemaNameContains"></a>

```typescript
public readonly schemaNameContains: string;
```

- *Type:* string

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.targetDatabaseId"></a>

```typescript
public readonly targetDatabaseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemas.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabasesSchemasConfig <a name="DataOciDataSafeTargetDatabasesSchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeTargetDatabasesSchemasConfig: dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.targetDatabaseId">targetDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#target_database_id DataOciDataSafeTargetDatabasesSchemas#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter">DataOciDataSafeTargetDatabasesSchemasFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#id DataOciDataSafeTargetDatabasesSchemas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.isOracleMaintained">isOracleMaintained</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#is_oracle_maintained DataOciDataSafeTargetDatabasesSchemas#is_oracle_maintained}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.schemaName">schemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#schema_name DataOciDataSafeTargetDatabasesSchemas#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.schemaNameContains">schemaNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#schema_name_contains DataOciDataSafeTargetDatabasesSchemas#schema_name_contains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.targetDatabaseId"></a>

```typescript
public readonly targetDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#target_database_id DataOciDataSafeTargetDatabasesSchemas#target_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeTargetDatabasesSchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter">DataOciDataSafeTargetDatabasesSchemasFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#filter DataOciDataSafeTargetDatabasesSchemas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#id DataOciDataSafeTargetDatabasesSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOracleMaintained`<sup>Optional</sup> <a name="isOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.isOracleMaintained"></a>

```typescript
public readonly isOracleMaintained: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#is_oracle_maintained DataOciDataSafeTargetDatabasesSchemas#is_oracle_maintained}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#schema_name DataOciDataSafeTargetDatabasesSchemas#schema_name}.

---

##### `schemaNameContains`<sup>Optional</sup> <a name="schemaNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasConfig.property.schemaNameContains"></a>

```typescript
public readonly schemaNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#schema_name_contains DataOciDataSafeTargetDatabasesSchemas#schema_name_contains}.

---

### DataOciDataSafeTargetDatabasesSchemasFilter <a name="DataOciDataSafeTargetDatabasesSchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeTargetDatabasesSchemasFilter: dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#name DataOciDataSafeTargetDatabasesSchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#values DataOciDataSafeTargetDatabasesSchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#regex DataOciDataSafeTargetDatabasesSchemas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#name DataOciDataSafeTargetDatabasesSchemas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#values DataOciDataSafeTargetDatabasesSchemas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_schemas#regex DataOciDataSafeTargetDatabasesSchemas#regex}.

---

### DataOciDataSafeTargetDatabasesSchemasSchemas <a name="DataOciDataSafeTargetDatabasesSchemasSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemas.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeTargetDatabasesSchemasSchemas: dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemas = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabasesSchemasFilterList <a name="DataOciDataSafeTargetDatabasesSchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeTargetDatabasesSchemasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter">DataOciDataSafeTargetDatabasesSchemasFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeTargetDatabasesSchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter">DataOciDataSafeTargetDatabasesSchemasFilter</a>[]

---


### DataOciDataSafeTargetDatabasesSchemasFilterOutputReference <a name="DataOciDataSafeTargetDatabasesSchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter">DataOciDataSafeTargetDatabasesSchemasFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeTargetDatabasesSchemasFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasFilter">DataOciDataSafeTargetDatabasesSchemasFilter</a>

---


### DataOciDataSafeTargetDatabasesSchemasSchemasList <a name="DataOciDataSafeTargetDatabasesSchemasSchemasList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.get"></a>

```typescript
public get(index: number): DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference <a name="DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabasesSchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.property.isOracleMaintained">isOracleMaintained</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemas">DataOciDataSafeTargetDatabasesSchemasSchemas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOracleMaintained`<sup>Required</sup> <a name="isOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.property.isOracleMaintained"></a>

```typescript
public readonly isOracleMaintained: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeTargetDatabasesSchemasSchemas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesSchemas.DataOciDataSafeTargetDatabasesSchemasSchemas">DataOciDataSafeTargetDatabasesSchemasSchemas</a>

---



