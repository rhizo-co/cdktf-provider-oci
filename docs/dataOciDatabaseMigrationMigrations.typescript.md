# `dataOciDatabaseMigrationMigrations` Submodule <a name="`dataOciDatabaseMigrationMigrations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationMigrations <a name="DataOciDatabaseMigrationMigrations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migrations oci_database_migration_migrations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations(scope: Construct, id: string, config: DataOciDatabaseMigrationMigrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig">DataOciDatabaseMigrationMigrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig">DataOciDatabaseMigrationMigrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationMigrations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isConstruct"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformElement"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseMigrationMigrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseMigrationMigrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseMigrationMigrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationMigrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.advancedParameters">advancedParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList">DataOciDatabaseMigrationMigrationsAdvancedParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.advisorSettings">advisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList">DataOciDatabaseMigrationMigrationsAdvisorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.bulkIncludeExcludeData">bulkIncludeExcludeData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.databaseCombination">databaseCombination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.dataTransferMediumDetails">dataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.excludeObjects">excludeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList">DataOciDatabaseMigrationMigrationsExcludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.executingJobId">executingJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.ggsDetails">ggsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList">DataOciDatabaseMigrationMigrationsGgsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.hubDetails">hubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList">DataOciDatabaseMigrationMigrationsHubDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.includeObjects">includeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList">DataOciDatabaseMigrationMigrationsIncludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.initialLoadSettings">initialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.sourceContainerDatabaseConnectionId">sourceContainerDatabaseConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.sourceDatabaseConnectionId">sourceDatabaseConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.targetDatabaseConnectionId">targetDatabaseConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeLastMigration">timeLastMigration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.waitAfter">waitAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.migrationIdInput">migrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.migrationId">migrationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `advancedParameters`<sup>Required</sup> <a name="advancedParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.advancedParameters"></a>

```typescript
public readonly advancedParameters: DataOciDatabaseMigrationMigrationsAdvancedParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList">DataOciDatabaseMigrationMigrationsAdvancedParametersList</a>

---

##### `advisorSettings`<sup>Required</sup> <a name="advisorSettings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.advisorSettings"></a>

```typescript
public readonly advisorSettings: DataOciDatabaseMigrationMigrationsAdvisorSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList">DataOciDatabaseMigrationMigrationsAdvisorSettingsList</a>

---

##### `bulkIncludeExcludeData`<sup>Required</sup> <a name="bulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.bulkIncludeExcludeData"></a>

```typescript
public readonly bulkIncludeExcludeData: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseCombination`<sup>Required</sup> <a name="databaseCombination" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.databaseCombination"></a>

```typescript
public readonly databaseCombination: string;
```

- *Type:* string

---

##### `dataTransferMediumDetails`<sup>Required</sup> <a name="dataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.dataTransferMediumDetails"></a>

```typescript
public readonly dataTransferMediumDetails: DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `excludeObjects`<sup>Required</sup> <a name="excludeObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.excludeObjects"></a>

```typescript
public readonly excludeObjects: DataOciDatabaseMigrationMigrationsExcludeObjectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList">DataOciDatabaseMigrationMigrationsExcludeObjectsList</a>

---

##### `executingJobId`<sup>Required</sup> <a name="executingJobId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.executingJobId"></a>

```typescript
public readonly executingJobId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ggsDetails`<sup>Required</sup> <a name="ggsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.ggsDetails"></a>

```typescript
public readonly ggsDetails: DataOciDatabaseMigrationMigrationsGgsDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList">DataOciDatabaseMigrationMigrationsGgsDetailsList</a>

---

##### `hubDetails`<sup>Required</sup> <a name="hubDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.hubDetails"></a>

```typescript
public readonly hubDetails: DataOciDatabaseMigrationMigrationsHubDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList">DataOciDatabaseMigrationMigrationsHubDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeObjects`<sup>Required</sup> <a name="includeObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.includeObjects"></a>

```typescript
public readonly includeObjects: DataOciDatabaseMigrationMigrationsIncludeObjectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList">DataOciDatabaseMigrationMigrationsIncludeObjectsList</a>

---

##### `initialLoadSettings`<sup>Required</sup> <a name="initialLoadSettings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.initialLoadSettings"></a>

```typescript
public readonly initialLoadSettings: DataOciDatabaseMigrationMigrationsInitialLoadSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `sourceContainerDatabaseConnectionId`<sup>Required</sup> <a name="sourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.sourceContainerDatabaseConnectionId"></a>

```typescript
public readonly sourceContainerDatabaseConnectionId: string;
```

- *Type:* string

---

##### `sourceDatabaseConnectionId`<sup>Required</sup> <a name="sourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.sourceDatabaseConnectionId"></a>

```typescript
public readonly sourceDatabaseConnectionId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetDatabaseConnectionId`<sup>Required</sup> <a name="targetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.targetDatabaseConnectionId"></a>

```typescript
public readonly targetDatabaseConnectionId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastMigration`<sup>Required</sup> <a name="timeLastMigration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeLastMigration"></a>

```typescript
public readonly timeLastMigration: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `waitAfter`<sup>Required</sup> <a name="waitAfter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.waitAfter"></a>

```typescript
public readonly waitAfter: string;
```

- *Type:* string

---

##### `migrationIdInput`<sup>Optional</sup> <a name="migrationIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.migrationIdInput"></a>

```typescript
public readonly migrationIdInput: string;
```

- *Type:* string

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.migrationId"></a>

```typescript
public readonly migrationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationMigrationsAdvancedParameters <a name="DataOciDatabaseMigrationMigrationsAdvancedParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParameters.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsAdvancedParameters: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParameters = { ... }
```


### DataOciDatabaseMigrationMigrationsAdvisorSettings <a name="DataOciDatabaseMigrationMigrationsAdvisorSettings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettings.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsAdvisorSettings: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettings = { ... }
```


### DataOciDatabaseMigrationMigrationsConfig <a name="DataOciDatabaseMigrationMigrationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsConfig: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.migrationId">migrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migrations#migration_id DataOciDatabaseMigrationMigrations#migration_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.migrationId"></a>

```typescript
public readonly migrationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migrations#migration_id DataOciDatabaseMigrationMigrations#migration_id}.

---

### DataOciDatabaseMigrationMigrationsDataTransferMediumDetails <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetails.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsDataTransferMediumDetails: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetails = { ... }
```


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket = { ... }
```


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource = { ... }
```


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget = { ... }
```


### DataOciDatabaseMigrationMigrationsExcludeObjects <a name="DataOciDatabaseMigrationMigrationsExcludeObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjects.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsExcludeObjects: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjects = { ... }
```


### DataOciDatabaseMigrationMigrationsGgsDetails <a name="DataOciDatabaseMigrationMigrationsGgsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetails.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsGgsDetails: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetails = { ... }
```


### DataOciDatabaseMigrationMigrationsGgsDetailsExtract <a name="DataOciDatabaseMigrationMigrationsGgsDetailsExtract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtract.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsGgsDetailsExtract: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtract = { ... }
```


### DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment <a name="DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment = { ... }
```


### DataOciDatabaseMigrationMigrationsGgsDetailsReplicat <a name="DataOciDatabaseMigrationMigrationsGgsDetailsReplicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicat.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsGgsDetailsReplicat: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicat = { ... }
```


### DataOciDatabaseMigrationMigrationsHubDetails <a name="DataOciDatabaseMigrationMigrationsHubDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetails.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsHubDetails: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetails = { ... }
```


### DataOciDatabaseMigrationMigrationsHubDetailsExtract <a name="DataOciDatabaseMigrationMigrationsHubDetailsExtract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtract.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsHubDetailsExtract: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtract = { ... }
```


### DataOciDatabaseMigrationMigrationsHubDetailsReplicat <a name="DataOciDatabaseMigrationMigrationsHubDetailsReplicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicat.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsHubDetailsReplicat: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicat = { ... }
```


### DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials <a name="DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials = { ... }
```


### DataOciDatabaseMigrationMigrationsIncludeObjects <a name="DataOciDatabaseMigrationMigrationsIncludeObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjects.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsIncludeObjects: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjects = { ... }
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettings <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettings.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsInitialLoadSettings: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettings = { ... }
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters = { ... }
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject = { ... }
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject = { ... }
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps = { ... }
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails: dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationMigrationsAdvancedParametersList <a name="DataOciDatabaseMigrationMigrationsAdvancedParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference <a name="DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParameters">DataOciDatabaseMigrationMigrationsAdvancedParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsAdvancedParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParameters">DataOciDatabaseMigrationMigrationsAdvancedParameters</a>

---


### DataOciDatabaseMigrationMigrationsAdvisorSettingsList <a name="DataOciDatabaseMigrationMigrationsAdvisorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference <a name="DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.isIgnoreErrors">isIgnoreErrors</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.isSkipAdvisor">isSkipAdvisor</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettings">DataOciDatabaseMigrationMigrationsAdvisorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isIgnoreErrors`<sup>Required</sup> <a name="isIgnoreErrors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.isIgnoreErrors"></a>

```typescript
public readonly isIgnoreErrors: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSkipAdvisor`<sup>Required</sup> <a name="isSkipAdvisor" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.isSkipAdvisor"></a>

```typescript
public readonly isSkipAdvisor: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsAdvisorSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettings">DataOciDatabaseMigrationMigrationsAdvisorSettings</a>

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket</a>

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.objectStorageBucket">objectStorageBucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId">sharedStorageMountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetails">DataOciDatabaseMigrationMigrationsDataTransferMediumDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectStorageBucket`<sup>Required</sup> <a name="objectStorageBucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.objectStorageBucket"></a>

```typescript
public readonly objectStorageBucket: DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `sharedStorageMountTargetId`<sup>Required</sup> <a name="sharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId"></a>

```typescript
public readonly sharedStorageMountTargetId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.source"></a>

```typescript
public readonly source: DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.target"></a>

```typescript
public readonly target: DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsDataTransferMediumDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetails">DataOciDatabaseMigrationMigrationsDataTransferMediumDetails</a>

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.ociHome">ociHome</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.walletLocation">walletLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `ociHome`<sup>Required</sup> <a name="ociHome" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.ociHome"></a>

```typescript
public readonly ociHome: string;
```

- *Type:* string

---

##### `walletLocation`<sup>Required</sup> <a name="walletLocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.walletLocation"></a>

```typescript
public readonly walletLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource</a>

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.ociHome">ociHome</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.walletLocation">walletLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `ociHome`<sup>Required</sup> <a name="ociHome" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.ociHome"></a>

```typescript
public readonly ociHome: string;
```

- *Type:* string

---

##### `walletLocation`<sup>Required</sup> <a name="walletLocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.walletLocation"></a>

```typescript
public readonly walletLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget</a>

---


### DataOciDatabaseMigrationMigrationsExcludeObjectsList <a name="DataOciDatabaseMigrationMigrationsExcludeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference <a name="DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">isOmitExcludedTableFromReplication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjects">DataOciDatabaseMigrationMigrationsExcludeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOmitExcludedTableFromReplication`<sup>Required</sup> <a name="isOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```typescript
public readonly isOmitExcludedTableFromReplication: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsExcludeObjects;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjects">DataOciDatabaseMigrationMigrationsExcludeObjects</a>

---


### DataOciDatabaseMigrationMigrationsGgsDetailsExtractList <a name="DataOciDatabaseMigrationMigrationsGgsDetailsExtractList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference <a name="DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.longTransDuration">longTransDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtract">DataOciDatabaseMigrationMigrationsGgsDetailsExtract</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `longTransDuration`<sup>Required</sup> <a name="longTransDuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.longTransDuration"></a>

```typescript
public readonly longTransDuration: number;
```

- *Type:* number

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsGgsDetailsExtract;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtract">DataOciDatabaseMigrationMigrationsGgsDetailsExtract</a>

---


### DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList <a name="DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference <a name="DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId">ggsAdminCredentialsSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment">DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `ggsAdminCredentialsSecretId`<sup>Required</sup> <a name="ggsAdminCredentialsSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId"></a>

```typescript
public readonly ggsAdminCredentialsSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment">DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment</a>

---


### DataOciDatabaseMigrationMigrationsGgsDetailsList <a name="DataOciDatabaseMigrationMigrationsGgsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.acceptableLag">acceptableLag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList">DataOciDatabaseMigrationMigrationsGgsDetailsExtractList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.ggsDeployment">ggsDeployment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList">DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList">DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetails">DataOciDatabaseMigrationMigrationsGgsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceptableLag`<sup>Required</sup> <a name="acceptableLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.acceptableLag"></a>

```typescript
public readonly acceptableLag: number;
```

- *Type:* number

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.extract"></a>

```typescript
public readonly extract: DataOciDatabaseMigrationMigrationsGgsDetailsExtractList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList">DataOciDatabaseMigrationMigrationsGgsDetailsExtractList</a>

---

##### `ggsDeployment`<sup>Required</sup> <a name="ggsDeployment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.ggsDeployment"></a>

```typescript
public readonly ggsDeployment: DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList">DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList</a>

---

##### `replicat`<sup>Required</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.replicat"></a>

```typescript
public readonly replicat: DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList">DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsGgsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetails">DataOciDatabaseMigrationMigrationsGgsDetails</a>

---


### DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList <a name="DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference <a name="DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicat">DataOciDatabaseMigrationMigrationsGgsDetailsReplicat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsGgsDetailsReplicat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicat">DataOciDatabaseMigrationMigrationsGgsDetailsReplicat</a>

---


### DataOciDatabaseMigrationMigrationsHubDetailsExtractList <a name="DataOciDatabaseMigrationMigrationsHubDetailsExtractList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference <a name="DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.longTransDuration">longTransDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtract">DataOciDatabaseMigrationMigrationsHubDetailsExtract</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `longTransDuration`<sup>Required</sup> <a name="longTransDuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.longTransDuration"></a>

```typescript
public readonly longTransDuration: number;
```

- *Type:* number

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsHubDetailsExtract;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtract">DataOciDatabaseMigrationMigrationsHubDetailsExtract</a>

---


### DataOciDatabaseMigrationMigrationsHubDetailsList <a name="DataOciDatabaseMigrationMigrationsHubDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsHubDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsHubDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationsHubDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.acceptableLag">acceptableLag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.computeId">computeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList">DataOciDatabaseMigrationMigrationsHubDetailsExtractList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList">DataOciDatabaseMigrationMigrationsHubDetailsReplicatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.restAdminCredentials">restAdminCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList">DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetails">DataOciDatabaseMigrationMigrationsHubDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceptableLag`<sup>Required</sup> <a name="acceptableLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.acceptableLag"></a>

```typescript
public readonly acceptableLag: number;
```

- *Type:* number

---

##### `computeId`<sup>Required</sup> <a name="computeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.computeId"></a>

```typescript
public readonly computeId: string;
```

- *Type:* string

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.extract"></a>

```typescript
public readonly extract: DataOciDatabaseMigrationMigrationsHubDetailsExtractList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList">DataOciDatabaseMigrationMigrationsHubDetailsExtractList</a>

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `replicat`<sup>Required</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.replicat"></a>

```typescript
public readonly replicat: DataOciDatabaseMigrationMigrationsHubDetailsReplicatList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList">DataOciDatabaseMigrationMigrationsHubDetailsReplicatList</a>

---

##### `restAdminCredentials`<sup>Required</sup> <a name="restAdminCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.restAdminCredentials"></a>

```typescript
public readonly restAdminCredentials: DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList">DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsHubDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetails">DataOciDatabaseMigrationMigrationsHubDetails</a>

---


### DataOciDatabaseMigrationMigrationsHubDetailsReplicatList <a name="DataOciDatabaseMigrationMigrationsHubDetailsReplicatList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference <a name="DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicat">DataOciDatabaseMigrationMigrationsHubDetailsReplicat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsHubDetailsReplicat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicat">DataOciDatabaseMigrationMigrationsHubDetailsReplicat</a>

---


### DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList <a name="DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference <a name="DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials">DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials">DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials</a>

---


### DataOciDatabaseMigrationMigrationsIncludeObjectsList <a name="DataOciDatabaseMigrationMigrationsIncludeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference <a name="DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">isOmitExcludedTableFromReplication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjects">DataOciDatabaseMigrationMigrationsIncludeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOmitExcludedTableFromReplication`<sup>Required</sup> <a name="isOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```typescript
public readonly isOmitExcludedTableFromReplication: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsIncludeObjects;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjects">DataOciDatabaseMigrationMigrationsIncludeObjects</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.estimate">estimate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters">excludeParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree">exportParallelismDegree</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree">importParallelismDegree</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster">isCluster</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction">tableExistsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters">DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimate`<sup>Required</sup> <a name="estimate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.estimate"></a>

```typescript
public readonly estimate: string;
```

- *Type:* string

---

##### `excludeParameters`<sup>Required</sup> <a name="excludeParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters"></a>

```typescript
public readonly excludeParameters: string[];
```

- *Type:* string[]

---

##### `exportParallelismDegree`<sup>Required</sup> <a name="exportParallelismDegree" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree"></a>

```typescript
public readonly exportParallelismDegree: number;
```

- *Type:* number

---

##### `importParallelismDegree`<sup>Required</sup> <a name="importParallelismDegree" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree"></a>

```typescript
public readonly importParallelismDegree: number;
```

- *Type:* number

---

##### `isCluster`<sup>Required</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster"></a>

```typescript
public readonly isCluster: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tableExistsAction`<sup>Required</sup> <a name="tableExistsAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction"></a>

```typescript
public readonly tableExistsAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters">DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject">DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject">DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject">DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject">DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.newValue">newValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue">oldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps">DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `newValue`<sup>Required</sup> <a name="newValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.newValue"></a>

```typescript
public readonly newValue: string;
```

- *Type:* string

---

##### `oldValue`<sup>Required</sup> <a name="oldValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue"></a>

```typescript
public readonly oldValue: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps">DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.compatibility">compatibility</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.dataPumpParameters">dataPumpParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.exportDirectoryObject">exportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.handleGrantErrors">handleGrantErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.importDirectoryObject">importDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isConsistent">isConsistent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects">isIgnoreExistingObjects</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isTzUtc">isTzUtc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.jobMode">jobMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.metadataRemaps">metadataRemaps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.primaryKeyCompatibility">primaryKeyCompatibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.tablespaceDetails">tablespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettings">DataOciDatabaseMigrationMigrationsInitialLoadSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.compatibility"></a>

```typescript
public readonly compatibility: string[];
```

- *Type:* string[]

---

##### `dataPumpParameters`<sup>Required</sup> <a name="dataPumpParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.dataPumpParameters"></a>

```typescript
public readonly dataPumpParameters: DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList</a>

---

##### `exportDirectoryObject`<sup>Required</sup> <a name="exportDirectoryObject" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.exportDirectoryObject"></a>

```typescript
public readonly exportDirectoryObject: DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList</a>

---

##### `handleGrantErrors`<sup>Required</sup> <a name="handleGrantErrors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.handleGrantErrors"></a>

```typescript
public readonly handleGrantErrors: string;
```

- *Type:* string

---

##### `importDirectoryObject`<sup>Required</sup> <a name="importDirectoryObject" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.importDirectoryObject"></a>

```typescript
public readonly importDirectoryObject: DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList</a>

---

##### `isConsistent`<sup>Required</sup> <a name="isConsistent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isConsistent"></a>

```typescript
public readonly isConsistent: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isIgnoreExistingObjects`<sup>Required</sup> <a name="isIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects"></a>

```typescript
public readonly isIgnoreExistingObjects: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isTzUtc`<sup>Required</sup> <a name="isTzUtc" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isTzUtc"></a>

```typescript
public readonly isTzUtc: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `jobMode`<sup>Required</sup> <a name="jobMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.jobMode"></a>

```typescript
public readonly jobMode: string;
```

- *Type:* string

---

##### `metadataRemaps`<sup>Required</sup> <a name="metadataRemaps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.metadataRemaps"></a>

```typescript
public readonly metadataRemaps: DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList</a>

---

##### `primaryKeyCompatibility`<sup>Required</sup> <a name="primaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.primaryKeyCompatibility"></a>

```typescript
public readonly primaryKeyCompatibility: string;
```

- *Type:* string

---

##### `tablespaceDetails`<sup>Required</sup> <a name="tablespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.tablespaceDetails"></a>

```typescript
public readonly tablespaceDetails: DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsInitialLoadSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettings">DataOciDatabaseMigrationMigrationsInitialLoadSettings</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrations } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs">blockSizeInKbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs">extendSizeInMbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate">isAutoCreate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile">isBigFile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget">remapTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails">DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockSizeInKbs`<sup>Required</sup> <a name="blockSizeInKbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs"></a>

```typescript
public readonly blockSizeInKbs: string;
```

- *Type:* string

---

##### `extendSizeInMbs`<sup>Required</sup> <a name="extendSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs"></a>

```typescript
public readonly extendSizeInMbs: number;
```

- *Type:* number

---

##### `isAutoCreate`<sup>Required</sup> <a name="isAutoCreate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate"></a>

```typescript
public readonly isAutoCreate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBigFile`<sup>Required</sup> <a name="isBigFile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile"></a>

```typescript
public readonly isBigFile: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `remapTarget`<sup>Required</sup> <a name="remapTarget" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget"></a>

```typescript
public readonly remapTarget: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails">DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails</a>

---



