# `dataOciCloudMigrationsMigrationAssets` Submodule <a name="`dataOciCloudMigrationsMigrationAssets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationAssets <a name="DataOciCloudMigrationsMigrationAssets" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets oci_cloud_migrations_migration_assets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets(scope: Construct, id: string, config?: DataOciCloudMigrationsMigrationAssetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig">DataOciCloudMigrationsMigrationAssetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig">DataOciCloudMigrationsMigrationAssetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetMigrationAssetId">resetMigrationAssetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetMigrationId">resetMigrationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCloudMigrationsMigrationAssetsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMigrationAssetId` <a name="resetMigrationAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetMigrationAssetId"></a>

```typescript
public resetMigrationAssetId(): void
```

##### `resetMigrationId` <a name="resetMigrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetMigrationId"></a>

```typescript
public resetMigrationId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationAssets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isConstruct"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformElement"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformDataSource"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationAssets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudMigrationsMigrationAssets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudMigrationsMigrationAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList">DataOciCloudMigrationsMigrationAssetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetCollection">migrationAssetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetIdInput">migrationAssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationIdInput">migrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetId">migrationAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationId">migrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.filter"></a>

```typescript
public readonly filter: DataOciCloudMigrationsMigrationAssetsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList">DataOciCloudMigrationsMigrationAssetsFilterList</a>

---

##### `migrationAssetCollection`<sup>Required</sup> <a name="migrationAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetCollection"></a>

```typescript
public readonly migrationAssetCollection: DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCloudMigrationsMigrationAssetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `migrationAssetIdInput`<sup>Optional</sup> <a name="migrationAssetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetIdInput"></a>

```typescript
public readonly migrationAssetIdInput: string;
```

- *Type:* string

---

##### `migrationIdInput`<sup>Optional</sup> <a name="migrationIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationIdInput"></a>

```typescript
public readonly migrationIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `migrationAssetId`<sup>Required</sup> <a name="migrationAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationAssetId"></a>

```typescript
public readonly migrationAssetId: string;
```

- *Type:* string

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.migrationId"></a>

```typescript
public readonly migrationId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationAssetsConfig <a name="DataOciCloudMigrationsMigrationAssetsConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationAssetsConfig: dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#display_name DataOciCloudMigrationsMigrationAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#id DataOciCloudMigrationsMigrationAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.migrationAssetId">migrationAssetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_asset_id DataOciCloudMigrationsMigrationAssets#migration_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.migrationId">migrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_id DataOciCloudMigrationsMigrationAssets#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#state DataOciCloudMigrationsMigrationAssets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#display_name DataOciCloudMigrationsMigrationAssets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCloudMigrationsMigrationAssetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#filter DataOciCloudMigrationsMigrationAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#id DataOciCloudMigrationsMigrationAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrationAssetId`<sup>Optional</sup> <a name="migrationAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.migrationAssetId"></a>

```typescript
public readonly migrationAssetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_asset_id DataOciCloudMigrationsMigrationAssets#migration_asset_id}.

---

##### `migrationId`<sup>Optional</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.migrationId"></a>

```typescript
public readonly migrationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#migration_id DataOciCloudMigrationsMigrationAssets#migration_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#state DataOciCloudMigrationsMigrationAssets#state}.

---

### DataOciCloudMigrationsMigrationAssetsFilter <a name="DataOciCloudMigrationsMigrationAssetsFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationAssetsFilter: dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#name DataOciCloudMigrationsMigrationAssets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#values DataOciCloudMigrationsMigrationAssets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#regex DataOciCloudMigrationsMigrationAssets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#name DataOciCloudMigrationsMigrationAssets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#values DataOciCloudMigrationsMigrationAssets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_assets#regex DataOciCloudMigrationsMigrationAssets#regex}.

---

### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationAssetsMigrationAssetCollection: dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection = { ... }
```


### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems: dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationAssetsFilterList <a name="DataOciCloudMigrationsMigrationAssetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationAssetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudMigrationsMigrationAssetsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>[]

---


### DataOciCloudMigrationsMigrationAssetsFilterOutputReference <a name="DataOciCloudMigrationsMigrationAssetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudMigrationsMigrationAssetsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsFilter">DataOciCloudMigrationsMigrationAssetsFilter</a>

---


### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.dependedOnBy">dependedOnBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.inventoryAssetId">inventoryAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.migrationAssetDependsOn">migrationAssetDependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.migrationId">migrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.notifications">notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.parentSnapshot">parentSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.replicationCompartmentId">replicationCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.replicationScheduleId">replicationScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.snapShotBucketName">snapShotBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.snapshots">snapshots</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.sourceAssetId">sourceAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dependedOnBy`<sup>Required</sup> <a name="dependedOnBy" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.dependedOnBy"></a>

```typescript
public readonly dependedOnBy: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inventoryAssetId`<sup>Required</sup> <a name="inventoryAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.inventoryAssetId"></a>

```typescript
public readonly inventoryAssetId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `migrationAssetDependsOn`<sup>Required</sup> <a name="migrationAssetDependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.migrationAssetDependsOn"></a>

```typescript
public readonly migrationAssetDependsOn: string[];
```

- *Type:* string[]

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.migrationId"></a>

```typescript
public readonly migrationId: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

---

##### `parentSnapshot`<sup>Required</sup> <a name="parentSnapshot" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.parentSnapshot"></a>

```typescript
public readonly parentSnapshot: string;
```

- *Type:* string

---

##### `replicationCompartmentId`<sup>Required</sup> <a name="replicationCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.replicationCompartmentId"></a>

```typescript
public readonly replicationCompartmentId: string;
```

- *Type:* string

---

##### `replicationScheduleId`<sup>Required</sup> <a name="replicationScheduleId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.replicationScheduleId"></a>

```typescript
public readonly replicationScheduleId: string;
```

- *Type:* string

---

##### `snapShotBucketName`<sup>Required</sup> <a name="snapShotBucketName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.snapShotBucketName"></a>

```typescript
public readonly snapShotBucketName: string;
```

- *Type:* string

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.snapshots"></a>

```typescript
public readonly snapshots: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `sourceAssetId`<sup>Required</sup> <a name="sourceAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.sourceAssetId"></a>

```typescript
public readonly sourceAssetId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItems</a>

---


### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference <a name="DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAssets } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAssets.DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection">DataOciCloudMigrationsMigrationAssetsMigrationAssetCollection</a>

---



