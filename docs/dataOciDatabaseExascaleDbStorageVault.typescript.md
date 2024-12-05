# `dataOciDatabaseExascaleDbStorageVault` Submodule <a name="`dataOciDatabaseExascaleDbStorageVault` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExascaleDbStorageVault <a name="DataOciDatabaseExascaleDbStorageVault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vault oci_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.Initializer"></a>

```typescript
import { dataOciDatabaseExascaleDbStorageVault } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault(scope: Construct, id: string, config: DataOciDatabaseExascaleDbStorageVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig">DataOciDatabaseExascaleDbStorageVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig">DataOciDatabaseExascaleDbStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isConstruct"></a>

```typescript
import { dataOciDatabaseExascaleDbStorageVault } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isTerraformElement"></a>

```typescript
import { dataOciDatabaseExascaleDbStorageVault } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseExascaleDbStorageVault } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseExascaleDbStorageVault } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExascaleDbStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercent">additionalFlashCacheInPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorage">highCapacityDatabaseStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList">DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.vmClusterCount">vmClusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.vmClusterIds">vmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput">exascaleDbStorageVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `additionalFlashCacheInPercent`<sup>Required</sup> <a name="additionalFlashCacheInPercent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercent"></a>

```typescript
public readonly additionalFlashCacheInPercent: number;
```

- *Type:* number

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `highCapacityDatabaseStorage`<sup>Required</sup> <a name="highCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorage"></a>

```typescript
public readonly highCapacityDatabaseStorage: DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList">DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `vmClusterCount`<sup>Required</sup> <a name="vmClusterCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.vmClusterCount"></a>

```typescript
public readonly vmClusterCount: number;
```

- *Type:* number

---

##### `vmClusterIds`<sup>Required</sup> <a name="vmClusterIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.vmClusterIds"></a>

```typescript
public readonly vmClusterIds: string[];
```

- *Type:* string[]

---

##### `exascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="exascaleDbStorageVaultIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput"></a>

```typescript
public readonly exascaleDbStorageVaultIdInput: string;
```

- *Type:* string

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId"></a>

```typescript
public readonly exascaleDbStorageVaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExascaleDbStorageVaultConfig <a name="DataOciDatabaseExascaleDbStorageVaultConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExascaleDbStorageVault } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExascaleDbStorageVaultConfig: dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vault#exascale_db_storage_vault_id DataOciDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId"></a>

```typescript
public readonly exascaleDbStorageVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vault#exascale_db_storage_vault_id DataOciDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}.

---

### DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage <a name="DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```typescript
import { dataOciDatabaseExascaleDbStorageVault } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage: dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList <a name="DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.Initializer"></a>

```typescript
import { dataOciDatabaseExascaleDbStorageVault } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExascaleDbStorageVault } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs">availableSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs">totalSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableSizeInGbs`<sup>Required</sup> <a name="availableSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs"></a>

```typescript
public readonly availableSizeInGbs: number;
```

- *Type:* number

---

##### `totalSizeInGbs`<sup>Required</sup> <a name="totalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs"></a>

```typescript
public readonly totalSizeInGbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVault.DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DataOciDatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

---



