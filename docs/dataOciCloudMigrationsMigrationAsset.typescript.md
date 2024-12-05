# `dataOciCloudMigrationsMigrationAsset` Submodule <a name="`dataOciCloudMigrationsMigrationAsset` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationAsset <a name="DataOciCloudMigrationsMigrationAsset" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_asset oci_cloud_migrations_migration_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAsset } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset(scope: Construct, id: string, config: DataOciCloudMigrationsMigrationAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig">DataOciCloudMigrationsMigrationAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig">DataOciCloudMigrationsMigrationAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isConstruct"></a>

```typescript
import { dataOciCloudMigrationsMigrationAsset } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformElement"></a>

```typescript
import { dataOciCloudMigrationsMigrationAsset } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformDataSource"></a>

```typescript
import { dataOciCloudMigrationsMigrationAsset } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport"></a>

```typescript
import { dataOciCloudMigrationsMigrationAsset } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudMigrationsMigrationAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudMigrationsMigrationAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.dependedOnBy">dependedOnBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.inventoryAssetId">inventoryAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetDependsOn">migrationAssetDependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationId">migrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.notifications">notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.parentSnapshot">parentSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.replicationCompartmentId">replicationCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.replicationScheduleId">replicationScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.snapShotBucketName">snapShotBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.snapshots">snapshots</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.sourceAssetId">sourceAssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetIdInput">migrationAssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetId">migrationAssetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dependedOnBy`<sup>Required</sup> <a name="dependedOnBy" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.dependedOnBy"></a>

```typescript
public readonly dependedOnBy: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inventoryAssetId`<sup>Required</sup> <a name="inventoryAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.inventoryAssetId"></a>

```typescript
public readonly inventoryAssetId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `migrationAssetDependsOn`<sup>Required</sup> <a name="migrationAssetDependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetDependsOn"></a>

```typescript
public readonly migrationAssetDependsOn: string[];
```

- *Type:* string[]

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationId"></a>

```typescript
public readonly migrationId: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

---

##### `parentSnapshot`<sup>Required</sup> <a name="parentSnapshot" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.parentSnapshot"></a>

```typescript
public readonly parentSnapshot: string;
```

- *Type:* string

---

##### `replicationCompartmentId`<sup>Required</sup> <a name="replicationCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.replicationCompartmentId"></a>

```typescript
public readonly replicationCompartmentId: string;
```

- *Type:* string

---

##### `replicationScheduleId`<sup>Required</sup> <a name="replicationScheduleId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.replicationScheduleId"></a>

```typescript
public readonly replicationScheduleId: string;
```

- *Type:* string

---

##### `snapShotBucketName`<sup>Required</sup> <a name="snapShotBucketName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.snapShotBucketName"></a>

```typescript
public readonly snapShotBucketName: string;
```

- *Type:* string

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.snapshots"></a>

```typescript
public readonly snapshots: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `sourceAssetId`<sup>Required</sup> <a name="sourceAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.sourceAssetId"></a>

```typescript
public readonly sourceAssetId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `migrationAssetIdInput`<sup>Optional</sup> <a name="migrationAssetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetIdInput"></a>

```typescript
public readonly migrationAssetIdInput: string;
```

- *Type:* string

---

##### `migrationAssetId`<sup>Required</sup> <a name="migrationAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.migrationAssetId"></a>

```typescript
public readonly migrationAssetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationAssetConfig <a name="DataOciCloudMigrationsMigrationAssetConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationAsset } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationAssetConfig: dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.migrationAssetId">migrationAssetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_asset#migration_asset_id DataOciCloudMigrationsMigrationAsset#migration_asset_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `migrationAssetId`<sup>Required</sup> <a name="migrationAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationAsset.DataOciCloudMigrationsMigrationAssetConfig.property.migrationAssetId"></a>

```typescript
public readonly migrationAssetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_asset#migration_asset_id DataOciCloudMigrationsMigrationAsset#migration_asset_id}.

---



