# `dataOciDatabaseExternalPluggableDatabase` Submodule <a name="`dataOciDatabaseExternalPluggableDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExternalPluggableDatabase <a name="DataOciDatabaseExternalPluggableDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_database oci_database_external_pluggable_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase(scope: Construct, id: string, config: DataOciDatabaseExternalPluggableDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig">DataOciDatabaseExternalPluggableDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig">DataOciDatabaseExternalPluggableDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExternalPluggableDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isConstruct"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isTerraformElement"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseExternalPluggableDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExternalPluggableDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExternalPluggableDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExternalPluggableDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.databaseConfiguration">databaseConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.databaseEdition">databaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.databaseManagementConfig">databaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList">DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.dbId">dbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.dbPacks">dbPacks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.externalContainerDatabaseId">externalContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.operationsInsightsConfig">operationsInsightsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList">DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.stackMonitoringConfig">stackMonitoringConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList">DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.externalPluggableDatabaseIdInput">externalPluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.externalPluggableDatabaseId">externalPluggableDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseConfiguration`<sup>Required</sup> <a name="databaseConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.databaseConfiguration"></a>

```typescript
public readonly databaseConfiguration: string;
```

- *Type:* string

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.databaseEdition"></a>

```typescript
public readonly databaseEdition: string;
```

- *Type:* string

---

##### `databaseManagementConfig`<sup>Required</sup> <a name="databaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.databaseManagementConfig"></a>

```typescript
public readonly databaseManagementConfig: DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList">DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList</a>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `dbId`<sup>Required</sup> <a name="dbId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.dbId"></a>

```typescript
public readonly dbId: string;
```

- *Type:* string

---

##### `dbPacks`<sup>Required</sup> <a name="dbPacks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.dbPacks"></a>

```typescript
public readonly dbPacks: string;
```

- *Type:* string

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalContainerDatabaseId`<sup>Required</sup> <a name="externalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.externalContainerDatabaseId"></a>

```typescript
public readonly externalContainerDatabaseId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

---

##### `operationsInsightsConfig`<sup>Required</sup> <a name="operationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.operationsInsightsConfig"></a>

```typescript
public readonly operationsInsightsConfig: DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList">DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList</a>

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `stackMonitoringConfig`<sup>Required</sup> <a name="stackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.stackMonitoringConfig"></a>

```typescript
public readonly stackMonitoringConfig: DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList">DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `externalPluggableDatabaseIdInput`<sup>Optional</sup> <a name="externalPluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.externalPluggableDatabaseIdInput"></a>

```typescript
public readonly externalPluggableDatabaseIdInput: string;
```

- *Type:* string

---

##### `externalPluggableDatabaseId`<sup>Required</sup> <a name="externalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.externalPluggableDatabaseId"></a>

```typescript
public readonly externalPluggableDatabaseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExternalPluggableDatabaseConfig <a name="DataOciDatabaseExternalPluggableDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalPluggableDatabaseConfig: dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.externalPluggableDatabaseId">externalPluggableDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_database#external_pluggable_database_id DataOciDatabaseExternalPluggableDatabase#external_pluggable_database_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalPluggableDatabaseId`<sup>Required</sup> <a name="externalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseConfig.property.externalPluggableDatabaseId"></a>

```typescript
public readonly externalPluggableDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_database#external_pluggable_database_id DataOciDatabaseExternalPluggableDatabase#external_pluggable_database_id}.

---

### DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig <a name="DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig: dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig = { ... }
```


### DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig <a name="DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig: dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig = { ... }
```


### DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig <a name="DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig: dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList <a name="DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference <a name="DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId">databaseManagementConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus">databaseManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig">DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseManagementConnectionId`<sup>Required</sup> <a name="databaseManagementConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId"></a>

```typescript
public readonly databaseManagementConnectionId: string;
```

- *Type:* string

---

##### `databaseManagementStatus`<sup>Required</sup> <a name="databaseManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus"></a>

```typescript
public readonly databaseManagementStatus: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig">DataOciDatabaseExternalPluggableDatabaseDatabaseManagementConfig</a>

---


### DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList <a name="DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference <a name="DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId">operationsInsightsConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsStatus">operationsInsightsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig">DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationsInsightsConnectorId`<sup>Required</sup> <a name="operationsInsightsConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId"></a>

```typescript
public readonly operationsInsightsConnectorId: string;
```

- *Type:* string

---

##### `operationsInsightsStatus`<sup>Required</sup> <a name="operationsInsightsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsStatus"></a>

```typescript
public readonly operationsInsightsStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig">DataOciDatabaseExternalPluggableDatabaseOperationsInsightsConfig</a>

---


### DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList <a name="DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference <a name="DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId">stackMonitoringConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus">stackMonitoringStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig">DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stackMonitoringConnectorId`<sup>Required</sup> <a name="stackMonitoringConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId"></a>

```typescript
public readonly stackMonitoringConnectorId: string;
```

- *Type:* string

---

##### `stackMonitoringStatus`<sup>Required</sup> <a name="stackMonitoringStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus"></a>

```typescript
public readonly stackMonitoringStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabase.DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig">DataOciDatabaseExternalPluggableDatabaseStackMonitoringConfig</a>

---



