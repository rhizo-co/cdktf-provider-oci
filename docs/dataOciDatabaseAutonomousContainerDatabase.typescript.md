# `dataOciDatabaseAutonomousContainerDatabase` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabase <a name="DataOciDatabaseAutonomousContainerDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database oci_database_autonomous_container_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase(scope: Construct, id: string, config: DataOciDatabaseAutonomousContainerDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig">DataOciDatabaseAutonomousContainerDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig">DataOciDatabaseAutonomousContainerDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousContainerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.autonomousExadataInfrastructureId">autonomousExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.availableCpus">availableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.backupConfig">backupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dbSplitThreshold">dbSplitThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.distributionAffinity">distributionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dstFileVersion">dstFileVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.fastStartFailOverLagLimitInSeconds">fastStartFailOverLagLimitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.infrastructureType">infrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.isAutomaticFailoverEnabled">isAutomaticFailoverEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.keyHistoryEntry">keyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList">DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.keyStoreId">keyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.keyStoreWalletName">keyStoreWalletName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.largestProvisionableAutonomousDatabaseInCpus">largestProvisionableAutonomousDatabaseInCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.lastMaintenanceRunId">lastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.listOneOffPatches">listOneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.memoryPerOracleComputeUnitInGbs">memoryPerOracleComputeUnitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.netServicesArchitecture">netServicesArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.patchId">patchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.patchModel">patchModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseBackupConfig">peerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseCompartmentId">peerAutonomousContainerDatabaseCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseDisplayName">peerAutonomousContainerDatabaseDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerAutonomousExadataInfrastructureId">peerAutonomousExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerAutonomousVmClusterId">peerAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.protectionMode">protectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.provisionableCpus">provisionableCpus</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.serviceLevelAgreementType">serviceLevelAgreementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.standbyMaintenanceBufferInDays">standbyMaintenanceBufferInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.timeOfLastBackup">timeOfLastBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.timeSnapshotStandbyRevert">timeSnapshotStandbyRevert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.totalCpus">totalCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.versionPreference">versionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.vmFailoverReservation">vmFailoverReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.autonomousContainerDatabaseIdInput">autonomousContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousExadataInfrastructureId`<sup>Required</sup> <a name="autonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.autonomousExadataInfrastructureId"></a>

```typescript
public readonly autonomousExadataInfrastructureId: string;
```

- *Type:* string

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.autonomousVmClusterId"></a>

```typescript
public readonly autonomousVmClusterId: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.availableCpus"></a>

```typescript
public readonly availableCpus: number;
```

- *Type:* number

---

##### `backupConfig`<sup>Required</sup> <a name="backupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.backupConfig"></a>

```typescript
public readonly backupConfig: DataOciDatabaseAutonomousContainerDatabaseBackupConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabaseBackupConfigList</a>

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `dbSplitThreshold`<sup>Required</sup> <a name="dbSplitThreshold" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dbSplitThreshold"></a>

```typescript
public readonly dbSplitThreshold: number;
```

- *Type:* number

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `distributionAffinity`<sup>Required</sup> <a name="distributionAffinity" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.distributionAffinity"></a>

```typescript
public readonly distributionAffinity: string;
```

- *Type:* string

---

##### `dstFileVersion`<sup>Required</sup> <a name="dstFileVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.dstFileVersion"></a>

```typescript
public readonly dstFileVersion: string;
```

- *Type:* string

---

##### `fastStartFailOverLagLimitInSeconds`<sup>Required</sup> <a name="fastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.fastStartFailOverLagLimitInSeconds"></a>

```typescript
public readonly fastStartFailOverLagLimitInSeconds: number;
```

- *Type:* number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureType`<sup>Required</sup> <a name="infrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.infrastructureType"></a>

```typescript
public readonly infrastructureType: string;
```

- *Type:* string

---

##### `isAutomaticFailoverEnabled`<sup>Required</sup> <a name="isAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.isAutomaticFailoverEnabled"></a>

```typescript
public readonly isAutomaticFailoverEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDstFileUpdateEnabled`<sup>Required</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.isDstFileUpdateEnabled"></a>

```typescript
public readonly isDstFileUpdateEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keyHistoryEntry`<sup>Required</sup> <a name="keyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.keyHistoryEntry"></a>

```typescript
public readonly keyHistoryEntry: DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList">DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList</a>

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.keyStoreId"></a>

```typescript
public readonly keyStoreId: string;
```

- *Type:* string

---

##### `keyStoreWalletName`<sup>Required</sup> <a name="keyStoreWalletName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.keyStoreWalletName"></a>

```typescript
public readonly keyStoreWalletName: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `largestProvisionableAutonomousDatabaseInCpus`<sup>Required</sup> <a name="largestProvisionableAutonomousDatabaseInCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```typescript
public readonly largestProvisionableAutonomousDatabaseInCpus: number;
```

- *Type:* number

---

##### `lastMaintenanceRunId`<sup>Required</sup> <a name="lastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.lastMaintenanceRunId"></a>

```typescript
public readonly lastMaintenanceRunId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `listOneOffPatches`<sup>Required</sup> <a name="listOneOffPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.listOneOffPatches"></a>

```typescript
public readonly listOneOffPatches: string[];
```

- *Type:* string[]

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList</a>

---

##### `maintenanceWindowDetails`<sup>Required</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.maintenanceWindowDetails"></a>

```typescript
public readonly maintenanceWindowDetails: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList</a>

---

##### `memoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGbs: number;
```

- *Type:* number

---

##### `netServicesArchitecture`<sup>Required</sup> <a name="netServicesArchitecture" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.netServicesArchitecture"></a>

```typescript
public readonly netServicesArchitecture: string;
```

- *Type:* string

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.nextMaintenanceRunId"></a>

```typescript
public readonly nextMaintenanceRunId: string;
```

- *Type:* string

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.patchId"></a>

```typescript
public readonly patchId: string;
```

- *Type:* string

---

##### `patchModel`<sup>Required</sup> <a name="patchModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.patchModel"></a>

```typescript
public readonly patchModel: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseBackupConfig`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```typescript
public readonly peerAutonomousContainerDatabaseBackupConfig: DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList">DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList</a>

---

##### `peerAutonomousContainerDatabaseCompartmentId`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```typescript
public readonly peerAutonomousContainerDatabaseCompartmentId: string;
```

- *Type:* string

---

##### `peerAutonomousContainerDatabaseDisplayName`<sup>Required</sup> <a name="peerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerAutonomousContainerDatabaseDisplayName"></a>

```typescript
public readonly peerAutonomousContainerDatabaseDisplayName: string;
```

- *Type:* string

---

##### `peerAutonomousExadataInfrastructureId`<sup>Required</sup> <a name="peerAutonomousExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerAutonomousExadataInfrastructureId"></a>

```typescript
public readonly peerAutonomousExadataInfrastructureId: string;
```

- *Type:* string

---

##### `peerAutonomousVmClusterId`<sup>Required</sup> <a name="peerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerAutonomousVmClusterId"></a>

```typescript
public readonly peerAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `peerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerCloudAutonomousVmClusterId"></a>

```typescript
public readonly peerCloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `peerDbUniqueName`<sup>Required</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.peerDbUniqueName"></a>

```typescript
public readonly peerDbUniqueName: string;
```

- *Type:* string

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.protectionMode"></a>

```typescript
public readonly protectionMode: string;
```

- *Type:* string

---

##### `provisionableCpus`<sup>Required</sup> <a name="provisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.provisionableCpus"></a>

```typescript
public readonly provisionableCpus: number[];
```

- *Type:* number[]

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `rotateKeyTrigger`<sup>Required</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.rotateKeyTrigger"></a>

```typescript
public readonly rotateKeyTrigger: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serviceLevelAgreementType`<sup>Required</sup> <a name="serviceLevelAgreementType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.serviceLevelAgreementType"></a>

```typescript
public readonly serviceLevelAgreementType: string;
```

- *Type:* string

---

##### `standbyMaintenanceBufferInDays`<sup>Required</sup> <a name="standbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.standbyMaintenanceBufferInDays"></a>

```typescript
public readonly standbyMaintenanceBufferInDays: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfLastBackup`<sup>Required</sup> <a name="timeOfLastBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.timeOfLastBackup"></a>

```typescript
public readonly timeOfLastBackup: string;
```

- *Type:* string

---

##### `timeSnapshotStandbyRevert`<sup>Required</sup> <a name="timeSnapshotStandbyRevert" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.timeSnapshotStandbyRevert"></a>

```typescript
public readonly timeSnapshotStandbyRevert: string;
```

- *Type:* string

---

##### `totalCpus`<sup>Required</sup> <a name="totalCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.totalCpus"></a>

```typescript
public readonly totalCpus: number;
```

- *Type:* number

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `versionPreference`<sup>Required</sup> <a name="versionPreference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.versionPreference"></a>

```typescript
public readonly versionPreference: string;
```

- *Type:* string

---

##### `vmFailoverReservation`<sup>Required</sup> <a name="vmFailoverReservation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.vmFailoverReservation"></a>

```typescript
public readonly vmFailoverReservation: number;
```

- *Type:* number

---

##### `autonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.autonomousContainerDatabaseIdInput"></a>

```typescript
public readonly autonomousContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseBackupConfig <a name="DataOciDatabaseAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseBackupConfig: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfig = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseConfig <a name="DataOciDatabaseAutonomousContainerDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseConfig: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabase#autonomous_container_database_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseConfig.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabase#autonomous_container_database_id}.

---

### DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry <a name="DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths = { ... }
```


### DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig <a name="DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig = { ... }
```


### DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails: dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internetProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpcPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetProxy`<sup>Required</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```typescript
public readonly internetProxy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcPassword`<sup>Required</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```typescript
public readonly vpcPassword: string;
```

- *Type:* string

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```typescript
public readonly vpcUser: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---


### DataOciDatabaseAutonomousContainerDatabaseBackupConfigList <a name="DataOciDatabaseAutonomousContainerDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabaseBackupConfig</a>

---


### DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList <a name="DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.timeActivated">timeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry">DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.timeActivated"></a>

```typescript
public readonly timeActivated: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry">DataOciDatabaseAutonomousContainerDatabaseKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek</a>

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek</a>

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths</a>

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.skipRu">skipRu</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.months"></a>

```typescript
public readonly months: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```typescript
public readonly skipRu: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails</a>

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths</a>

---


### DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.skipRu">skipRu</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.skipRu"></a>

```typescript
public readonly skipRu: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow">DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow</a>

---


### DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internetProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpcPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetProxy`<sup>Required</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```typescript
public readonly internetProxy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcPassword`<sup>Required</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```typescript
public readonly vpcPassword: string;
```

- *Type:* string

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```typescript
public readonly vpcUser: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>

---


### DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList <a name="DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference <a name="DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabase.DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig">DataOciDatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig</a>

---



