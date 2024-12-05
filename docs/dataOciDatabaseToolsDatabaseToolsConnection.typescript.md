# `dataOciDatabaseToolsDatabaseToolsConnection` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsConnection` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsConnection <a name="DataOciDatabaseToolsDatabaseToolsConnection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connection oci_database_tools_database_tools_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection(scope: Construct, id: string, config: DataOciDatabaseToolsDatabaseToolsConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig">DataOciDatabaseToolsDatabaseToolsConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig">DataOciDatabaseToolsDatabaseToolsConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isConstruct"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isTerraformElement"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseToolsDatabaseToolsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.advancedProperties">advancedProperties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.keyStores">keyStores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList">DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList">DataOciDatabaseToolsDatabaseToolsConnectionLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.proxyClient">proxyClient</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList">DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.relatedResource">relatedResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList">DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.runtimeSupport">runtimeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.userPassword">userPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.databaseToolsConnectionIdInput">databaseToolsConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.databaseToolsConnectionId">databaseToolsConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `advancedProperties`<sup>Required</sup> <a name="advancedProperties" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.advancedProperties"></a>

```typescript
public readonly advancedProperties: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyStores`<sup>Required</sup> <a name="keyStores" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.keyStores"></a>

```typescript
public readonly keyStores: DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList">DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.locks"></a>

```typescript
public readonly locks: DataOciDatabaseToolsDatabaseToolsConnectionLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList">DataOciDatabaseToolsDatabaseToolsConnectionLocksList</a>

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `proxyClient`<sup>Required</sup> <a name="proxyClient" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.proxyClient"></a>

```typescript
public readonly proxyClient: DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList">DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList</a>

---

##### `relatedResource`<sup>Required</sup> <a name="relatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.relatedResource"></a>

```typescript
public readonly relatedResource: DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList">DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList</a>

---

##### `runtimeSupport`<sup>Required</sup> <a name="runtimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.runtimeSupport"></a>

```typescript
public readonly runtimeSupport: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userPassword`<sup>Required</sup> <a name="userPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.userPassword"></a>

```typescript
public readonly userPassword: DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList</a>

---

##### `databaseToolsConnectionIdInput`<sup>Optional</sup> <a name="databaseToolsConnectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.databaseToolsConnectionIdInput"></a>

```typescript
public readonly databaseToolsConnectionIdInput: string;
```

- *Type:* string

---

##### `databaseToolsConnectionId`<sup>Required</sup> <a name="databaseToolsConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.databaseToolsConnectionId"></a>

```typescript
public readonly databaseToolsConnectionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsConnectionConfig <a name="DataOciDatabaseToolsDatabaseToolsConnectionConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionConfig: dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.databaseToolsConnectionId">databaseToolsConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connection#database_tools_connection_id DataOciDatabaseToolsDatabaseToolsConnection#database_tools_connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseToolsConnectionId`<sup>Required</sup> <a name="databaseToolsConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionConfig.property.databaseToolsConnectionId"></a>

```typescript
public readonly databaseToolsConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connection#database_tools_connection_id DataOciDatabaseToolsDatabaseToolsConnection#database_tools_connection_id}.

---

### DataOciDatabaseToolsDatabaseToolsConnectionKeyStores <a name="DataOciDatabaseToolsDatabaseToolsConnectionKeyStores" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStores.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionKeyStores: dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStores = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent <a name="DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent: dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword: dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionLocks <a name="DataOciDatabaseToolsDatabaseToolsConnectionLocks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocks.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionLocks: dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocks = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionProxyClient <a name="DataOciDatabaseToolsDatabaseToolsConnectionProxyClient" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClient"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClient.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionProxyClient: dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClient = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword: dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionRelatedResource <a name="DataOciDatabaseToolsDatabaseToolsConnectionRelatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResource.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionRelatedResource: dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResource = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionUserPassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPassword.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionUserPassword: dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPassword = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList <a name="DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList <a name="DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreContent">keyStoreContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList">DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStorePassword">keyStorePassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList">DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreType">keyStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStores">DataOciDatabaseToolsDatabaseToolsConnectionKeyStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyStoreContent`<sup>Required</sup> <a name="keyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreContent"></a>

```typescript
public readonly keyStoreContent: DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList">DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList</a>

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList">DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList</a>

---

##### `keyStoreType`<sup>Required</sup> <a name="keyStoreType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreType"></a>

```typescript
public readonly keyStoreType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionKeyStores;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionKeyStores">DataOciDatabaseToolsDatabaseToolsConnectionKeyStores</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionLocksList <a name="DataOciDatabaseToolsDatabaseToolsConnectionLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocks">DataOciDatabaseToolsDatabaseToolsConnectionLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionLocks">DataOciDatabaseToolsDatabaseToolsConnectionLocks</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList <a name="DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.proxyAuthenticationType">proxyAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userPassword">userPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClient">DataOciDatabaseToolsDatabaseToolsConnectionProxyClient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `proxyAuthenticationType`<sup>Required</sup> <a name="proxyAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.proxyAuthenticationType"></a>

```typescript
public readonly proxyAuthenticationType: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userPassword`<sup>Required</sup> <a name="userPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userPassword"></a>

```typescript
public readonly userPassword: DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionProxyClient;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClient">DataOciDatabaseToolsDatabaseToolsConnectionProxyClient</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList <a name="DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResource">DataOciDatabaseToolsDatabaseToolsConnectionRelatedResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionRelatedResource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionRelatedResource">DataOciDatabaseToolsDatabaseToolsConnectionRelatedResource</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnection } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionUserPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionUserPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnection.DataOciDatabaseToolsDatabaseToolsConnectionUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionUserPassword</a>

---



