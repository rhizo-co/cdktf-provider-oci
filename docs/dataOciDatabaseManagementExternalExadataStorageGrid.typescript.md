# `dataOciDatabaseManagementExternalExadataStorageGrid` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageGrid` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageGrid <a name="DataOciDatabaseManagementExternalExadataStorageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_grid oci_database_management_external_exadata_storage_grid}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid(scope: Construct, id: string, config: DataOciDatabaseManagementExternalExadataStorageGridConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig">DataOciDatabaseManagementExternalExadataStorageGridConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig">DataOciDatabaseManagementExternalExadataStorageGridConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageGrid resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageGrid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageGrid to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalExadataStorageGrid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_grid#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageGrid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.serverCount">serverCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.storageServers">storageServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList">DataOciDatabaseManagementExternalExadataStorageGridStorageServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridIdInput">externalExadataStorageGridIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridId">externalExadataStorageGridId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `serverCount`<sup>Required</sup> <a name="serverCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.serverCount"></a>

```typescript
public readonly serverCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageServers`<sup>Required</sup> <a name="storageServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.storageServers"></a>

```typescript
public readonly storageServers: DataOciDatabaseManagementExternalExadataStorageGridStorageServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList">DataOciDatabaseManagementExternalExadataStorageGridStorageServersList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `externalExadataStorageGridIdInput`<sup>Optional</sup> <a name="externalExadataStorageGridIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridIdInput"></a>

```typescript
public readonly externalExadataStorageGridIdInput: string;
```

- *Type:* string

---

##### `externalExadataStorageGridId`<sup>Required</sup> <a name="externalExadataStorageGridId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridId"></a>

```typescript
public readonly externalExadataStorageGridId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGrid.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageGridConfig <a name="DataOciDatabaseManagementExternalExadataStorageGridConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataStorageGridConfig: dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.externalExadataStorageGridId">externalExadataStorageGridId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DataOciDatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalExadataStorageGridId`<sup>Required</sup> <a name="externalExadataStorageGridId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridConfig.property.externalExadataStorageGridId"></a>

```typescript
public readonly externalExadataStorageGridId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DataOciDatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}.

---

### DataOciDatabaseManagementExternalExadataStorageGridStorageServers <a name="DataOciDatabaseManagementExternalExadataStorageGridStorageServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServers.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataStorageGridStorageServers: dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageGridStorageServersList <a name="DataOciDatabaseManagementExternalExadataStorageGridStorageServersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.cpuCount">cpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.makeModel">makeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskIops">maxFlashDiskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskThroughput">maxFlashDiskThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskIops">maxHardDiskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskThroughput">maxHardDiskThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServers">DataOciDatabaseManagementExternalExadataStorageGridStorageServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `makeModel`<sup>Required</sup> <a name="makeModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.makeModel"></a>

```typescript
public readonly makeModel: string;
```

- *Type:* string

---

##### `maxFlashDiskIops`<sup>Required</sup> <a name="maxFlashDiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskIops"></a>

```typescript
public readonly maxFlashDiskIops: number;
```

- *Type:* number

---

##### `maxFlashDiskThroughput`<sup>Required</sup> <a name="maxFlashDiskThroughput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskThroughput"></a>

```typescript
public readonly maxFlashDiskThroughput: number;
```

- *Type:* number

---

##### `maxHardDiskIops`<sup>Required</sup> <a name="maxHardDiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskIops"></a>

```typescript
public readonly maxHardDiskIops: number;
```

- *Type:* number

---

##### `maxHardDiskThroughput`<sup>Required</sup> <a name="maxHardDiskThroughput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskThroughput"></a>

```typescript
public readonly maxHardDiskThroughput: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataStorageGridStorageServers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageGrid.DataOciDatabaseManagementExternalExadataStorageGridStorageServers">DataOciDatabaseManagementExternalExadataStorageGridStorageServers</a>

---



