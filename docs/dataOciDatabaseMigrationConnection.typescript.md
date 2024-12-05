# `dataOciDatabaseMigrationConnection` Submodule <a name="`dataOciDatabaseMigrationConnection` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationConnection <a name="DataOciDatabaseMigrationConnection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_connection oci_database_migration_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection(scope: Construct, id: string, config: DataOciDatabaseMigrationConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig">DataOciDatabaseMigrationConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig">DataOciDatabaseMigrationConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isConstruct"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isTerraformElement"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseMigrationConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseMigrationConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseMigrationConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.additionalAttributes">additionalAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList">DataOciDatabaseMigrationConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.ingressIps">ingressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList">DataOciDatabaseMigrationConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.replicationPassword">replicationPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.replicationUsername">replicationUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sshHost">sshHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sshKey">sshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sshSudoLocation">sshSudoLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sshUser">sshUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sslCa">sslCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sslCert">sslCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sslCrl">sslCrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sslKey">sslKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.technologyType">technologyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.wallet">wallet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `additionalAttributes`<sup>Required</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.additionalAttributes"></a>

```typescript
public readonly additionalAttributes: DataOciDatabaseMigrationConnectionAdditionalAttributesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList">DataOciDatabaseMigrationConnectionAdditionalAttributesList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.ingressIps"></a>

```typescript
public readonly ingressIps: DataOciDatabaseMigrationConnectionIngressIpsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList">DataOciDatabaseMigrationConnectionIngressIpsList</a>

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `replicationPassword`<sup>Required</sup> <a name="replicationPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.replicationPassword"></a>

```typescript
public readonly replicationPassword: string;
```

- *Type:* string

---

##### `replicationUsername`<sup>Required</sup> <a name="replicationUsername" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.replicationUsername"></a>

```typescript
public readonly replicationUsername: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

---

##### `sshHost`<sup>Required</sup> <a name="sshHost" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sshHost"></a>

```typescript
public readonly sshHost: string;
```

- *Type:* string

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* string

---

##### `sshSudoLocation`<sup>Required</sup> <a name="sshSudoLocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sshSudoLocation"></a>

```typescript
public readonly sshSudoLocation: string;
```

- *Type:* string

---

##### `sshUser`<sup>Required</sup> <a name="sshUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sshUser"></a>

```typescript
public readonly sshUser: string;
```

- *Type:* string

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

---

##### `sslCert`<sup>Required</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sslCert"></a>

```typescript
public readonly sslCert: string;
```

- *Type:* string

---

##### `sslCrl`<sup>Required</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sslCrl"></a>

```typescript
public readonly sslCrl: string;
```

- *Type:* string

---

##### `sslKey`<sup>Required</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sslKey"></a>

```typescript
public readonly sslKey: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.technologyType"></a>

```typescript
public readonly technologyType: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.wallet"></a>

```typescript
public readonly wallet: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationConnectionAdditionalAttributes <a name="DataOciDatabaseMigrationConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributes.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationConnectionAdditionalAttributes: dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributes = { ... }
```


### DataOciDatabaseMigrationConnectionConfig <a name="DataOciDatabaseMigrationConnectionConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationConnectionConfig: dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_connection#connection_id DataOciDatabaseMigrationConnection#connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_connection#connection_id DataOciDatabaseMigrationConnection#connection_id}.

---

### DataOciDatabaseMigrationConnectionIngressIps <a name="DataOciDatabaseMigrationConnectionIngressIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIps.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationConnectionIngressIps: dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIps = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationConnectionAdditionalAttributesList <a name="DataOciDatabaseMigrationConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference <a name="DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributes">DataOciDatabaseMigrationConnectionAdditionalAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationConnectionAdditionalAttributes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionAdditionalAttributes">DataOciDatabaseMigrationConnectionAdditionalAttributes</a>

---


### DataOciDatabaseMigrationConnectionIngressIpsList <a name="DataOciDatabaseMigrationConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationConnectionIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationConnectionIngressIpsOutputReference <a name="DataOciDatabaseMigrationConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.property.ingressIp">ingressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIps">DataOciDatabaseMigrationConnectionIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressIp`<sup>Required</sup> <a name="ingressIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.property.ingressIp"></a>

```typescript
public readonly ingressIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationConnectionIngressIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationConnection.DataOciDatabaseMigrationConnectionIngressIps">DataOciDatabaseMigrationConnectionIngressIps</a>

---



