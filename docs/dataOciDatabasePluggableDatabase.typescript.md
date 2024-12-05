# `dataOciDatabasePluggableDatabase` Submodule <a name="`dataOciDatabasePluggableDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabasePluggableDatabase <a name="DataOciDatabasePluggableDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database oci_database_pluggable_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase(scope: Construct, id: string, config: DataOciDatabasePluggableDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig">DataOciDatabasePluggableDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig">DataOciDatabasePluggableDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabasePluggableDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isConstruct"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformElement"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformDataSource"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabasePluggableDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabasePluggableDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabasePluggableDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabasePluggableDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList">DataOciDatabasePluggableDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseAdminPassword">containerDatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseId">containerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.convertToRegularTrigger">convertToRegularTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.isRestricted">isRestricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbAdminPassword">pdbAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbCreationTypeDetails">pdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbName">pdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbNodeLevelDetails">pdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseManagementConfig">pluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshableCloneConfig">refreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList">DataOciDatabasePluggableDatabaseRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshTrigger">refreshTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldCreatePdbBackup">shouldCreatePdbBackup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked">shouldPdbAdminAccountBeLocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseIdInput">pluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DataOciDatabasePluggableDatabaseConnectionStringsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList">DataOciDatabasePluggableDatabaseConnectionStringsList</a>

---

##### `containerDatabaseAdminPassword`<sup>Required</sup> <a name="containerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseAdminPassword"></a>

```typescript
public readonly containerDatabaseAdminPassword: string;
```

- *Type:* string

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.containerDatabaseId"></a>

```typescript
public readonly containerDatabaseId: string;
```

- *Type:* string

---

##### `convertToRegularTrigger`<sup>Required</sup> <a name="convertToRegularTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.convertToRegularTrigger"></a>

```typescript
public readonly convertToRegularTrigger: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRestricted`<sup>Required</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.isRestricted"></a>

```typescript
public readonly isRestricted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `pdbAdminPassword`<sup>Required</sup> <a name="pdbAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbAdminPassword"></a>

```typescript
public readonly pdbAdminPassword: string;
```

- *Type:* string

---

##### `pdbCreationTypeDetails`<sup>Required</sup> <a name="pdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbCreationTypeDetails"></a>

```typescript
public readonly pdbCreationTypeDetails: DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList</a>

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbName"></a>

```typescript
public readonly pdbName: string;
```

- *Type:* string

---

##### `pdbNodeLevelDetails`<sup>Required</sup> <a name="pdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pdbNodeLevelDetails"></a>

```typescript
public readonly pdbNodeLevelDetails: DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList</a>

---

##### `pluggableDatabaseManagementConfig`<sup>Required</sup> <a name="pluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseManagementConfig"></a>

```typescript
public readonly pluggableDatabaseManagementConfig: DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList</a>

---

##### `refreshableCloneConfig`<sup>Required</sup> <a name="refreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshableCloneConfig"></a>

```typescript
public readonly refreshableCloneConfig: DataOciDatabasePluggableDatabaseRefreshableCloneConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList">DataOciDatabasePluggableDatabaseRefreshableCloneConfigList</a>

---

##### `refreshTrigger`<sup>Required</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.refreshTrigger"></a>

```typescript
public readonly refreshTrigger: number;
```

- *Type:* number

---

##### `rotateKeyTrigger`<sup>Required</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.rotateKeyTrigger"></a>

```typescript
public readonly rotateKeyTrigger: number;
```

- *Type:* number

---

##### `shouldCreatePdbBackup`<sup>Required</sup> <a name="shouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldCreatePdbBackup"></a>

```typescript
public readonly shouldCreatePdbBackup: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `shouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="shouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked"></a>

```typescript
public readonly shouldPdbAdminAccountBeLocked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tdeWalletPassword`<sup>Required</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tdeWalletPassword"></a>

```typescript
public readonly tdeWalletPassword: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `pluggableDatabaseIdInput`<sup>Optional</sup> <a name="pluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseIdInput"></a>

```typescript
public readonly pluggableDatabaseIdInput: string;
```

- *Type:* string

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.pluggableDatabaseId"></a>

```typescript
public readonly pluggableDatabaseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabasePluggableDatabaseConfig <a name="DataOciDatabasePluggableDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabaseConfig: dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#pluggable_database_id DataOciDatabasePluggableDatabase#pluggable_database_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConfig.property.pluggableDatabaseId"></a>

```typescript
public readonly pluggableDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_database#pluggable_database_id DataOciDatabasePluggableDatabase#pluggable_database_id}.

---

### DataOciDatabasePluggableDatabaseConnectionStrings <a name="DataOciDatabasePluggableDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabaseConnectionStrings: dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings = { ... }
```


### DataOciDatabasePluggableDatabasePdbCreationTypeDetails <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasePdbCreationTypeDetails: dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails = { ... }
```


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails: dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails = { ... }
```


### DataOciDatabasePluggableDatabasePdbNodeLevelDetails <a name="DataOciDatabasePluggableDatabasePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasePdbNodeLevelDetails: dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails = { ... }
```


### DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig <a name="DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig: dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig = { ... }
```


### DataOciDatabasePluggableDatabaseRefreshableCloneConfig <a name="DataOciDatabasePluggableDatabaseRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabaseRefreshableCloneConfig: dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabasePluggableDatabaseConnectionStringsList <a name="DataOciDatabasePluggableDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabaseConnectionStringsOutputReference <a name="DataOciDatabasePluggableDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault">pdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault">pdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings">DataOciDatabasePluggableDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```typescript
public readonly allConnectionStrings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `pdbDefault`<sup>Required</sup> <a name="pdbDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault"></a>

```typescript
public readonly pdbDefault: string;
```

- *Type:* string

---

##### `pdbIpDefault`<sup>Required</sup> <a name="pdbIpDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault"></a>

```typescript
public readonly pdbIpDefault: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabaseConnectionStrings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseConnectionStrings">DataOciDatabasePluggableDatabaseConnectionStrings</a>

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType">creationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername">dblinkUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword">dblinkUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone">isThinClone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails">refreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword">sourceContainerDatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId">sourcePluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* string

---

##### `dblinkUsername`<sup>Required</sup> <a name="dblinkUsername" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername"></a>

```typescript
public readonly dblinkUsername: string;
```

- *Type:* string

---

##### `dblinkUserPassword`<sup>Required</sup> <a name="dblinkUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword"></a>

```typescript
public readonly dblinkUserPassword: string;
```

- *Type:* string

---

##### `isThinClone`<sup>Required</sup> <a name="isThinClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone"></a>

```typescript
public readonly isThinClone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `refreshableCloneDetails`<sup>Required</sup> <a name="refreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails"></a>

```typescript
public readonly refreshableCloneDetails: DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList</a>

---

##### `sourceContainerDatabaseAdminPassword`<sup>Required</sup> <a name="sourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword"></a>

```typescript
public readonly sourceContainerDatabaseAdminPassword: string;
```

- *Type:* string

---

##### `sourcePluggableDatabaseId`<sup>Required</sup> <a name="sourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId"></a>

```typescript
public readonly sourcePluggableDatabaseId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasePdbCreationTypeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetails</a>

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference <a name="DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone">isRefreshableClone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---


### DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList <a name="DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference <a name="DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName">nodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails">DataOciDatabasePluggableDatabasePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```typescript
public readonly nodeName: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasePdbNodeLevelDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePdbNodeLevelDetails">DataOciDatabasePluggableDatabasePdbNodeLevelDetails</a>

---


### DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList <a name="DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference <a name="DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus">managementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managementStatus`<sup>Required</sup> <a name="managementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```typescript
public readonly managementStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasePluggableDatabaseManagementConfig</a>

---


### DataOciDatabasePluggableDatabaseRefreshableCloneConfigList <a name="DataOciDatabasePluggableDatabaseRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference <a name="DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone">isRefreshableClone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig">DataOciDatabasePluggableDatabaseRefreshableCloneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabaseRefreshableCloneConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabase.DataOciDatabasePluggableDatabaseRefreshableCloneConfig">DataOciDatabasePluggableDatabaseRefreshableCloneConfig</a>

---



