# `dataOciRecoveryProtectedDatabase` Submodule <a name="`dataOciRecoveryProtectedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryProtectedDatabase <a name="DataOciRecoveryProtectedDatabase" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database oci_recovery_protected_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase(scope: Construct, id: string, config: DataOciRecoveryProtectedDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig">DataOciRecoveryProtectedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig">DataOciRecoveryProtectedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isConstruct"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformElement"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformDataSource"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciRecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciRecoveryProtectedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciRecoveryProtectedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryProtectedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.databaseSize">databaseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.deletionSchedule">deletionSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.healthDetails">healthDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.isReadOnlyResource">isReadOnlyResource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.isRedoLogsShipped">isRedoLogsShipped</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList">DataOciRecoveryProtectedDatabaseMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.policyLockedDateTime">policyLockedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectionPolicyId">protectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.recoveryServiceSubnets">recoveryServiceSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.vpcUserName">vpcUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectedDatabaseIdInput">protectedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectedDatabaseId">protectedDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseSize`<sup>Required</sup> <a name="databaseSize" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.databaseSize"></a>

```typescript
public readonly databaseSize: string;
```

- *Type:* string

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deletionSchedule`<sup>Required</sup> <a name="deletionSchedule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.deletionSchedule"></a>

```typescript
public readonly deletionSchedule: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `health`<sup>Required</sup> <a name="health" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `healthDetails`<sup>Required</sup> <a name="healthDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.healthDetails"></a>

```typescript
public readonly healthDetails: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isReadOnlyResource`<sup>Required</sup> <a name="isReadOnlyResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.isReadOnlyResource"></a>

```typescript
public readonly isReadOnlyResource: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRedoLogsShipped`<sup>Required</sup> <a name="isRedoLogsShipped" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.isRedoLogsShipped"></a>

```typescript
public readonly isRedoLogsShipped: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.metrics"></a>

```typescript
public readonly metrics: DataOciRecoveryProtectedDatabaseMetricsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList">DataOciRecoveryProtectedDatabaseMetricsList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `policyLockedDateTime`<sup>Required</sup> <a name="policyLockedDateTime" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.policyLockedDateTime"></a>

```typescript
public readonly policyLockedDateTime: string;
```

- *Type:* string

---

##### `protectionPolicyId`<sup>Required</sup> <a name="protectionPolicyId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectionPolicyId"></a>

```typescript
public readonly protectionPolicyId: string;
```

- *Type:* string

---

##### `recoveryServiceSubnets`<sup>Required</sup> <a name="recoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.recoveryServiceSubnets"></a>

```typescript
public readonly recoveryServiceSubnets: DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList">DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vpcUserName`<sup>Required</sup> <a name="vpcUserName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.vpcUserName"></a>

```typescript
public readonly vpcUserName: string;
```

- *Type:* string

---

##### `protectedDatabaseIdInput`<sup>Optional</sup> <a name="protectedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectedDatabaseIdInput"></a>

```typescript
public readonly protectedDatabaseIdInput: string;
```

- *Type:* string

---

##### `protectedDatabaseId`<sup>Required</sup> <a name="protectedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.protectedDatabaseId"></a>

```typescript
public readonly protectedDatabaseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryProtectedDatabaseConfig <a name="DataOciRecoveryProtectedDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryProtectedDatabaseConfig: dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.protectedDatabaseId">protectedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database#protected_database_id DataOciRecoveryProtectedDatabase#protected_database_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `protectedDatabaseId`<sup>Required</sup> <a name="protectedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseConfig.property.protectedDatabaseId"></a>

```typescript
public readonly protectedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database#protected_database_id DataOciRecoveryProtectedDatabase#protected_database_id}.

---

### DataOciRecoveryProtectedDatabaseMetrics <a name="DataOciRecoveryProtectedDatabaseMetrics" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetrics.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryProtectedDatabaseMetrics: dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetrics = { ... }
```


### DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets <a name="DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

const dataOciRecoveryProtectedDatabaseRecoveryServiceSubnets: dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRecoveryProtectedDatabaseMetricsList <a name="DataOciRecoveryProtectedDatabaseMetricsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.get"></a>

```typescript
public get(index: number): DataOciRecoveryProtectedDatabaseMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciRecoveryProtectedDatabaseMetricsOutputReference <a name="DataOciRecoveryProtectedDatabaseMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceEstimateInGbs">backupSpaceEstimateInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceUsedInGbs">backupSpaceUsedInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.currentRetentionPeriodInSeconds">currentRetentionPeriodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.dbSizeInGbs">dbSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.isRedoLogsEnabled">isRedoLogsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.minimumRecoveryNeededInDays">minimumRecoveryNeededInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.unprotectedWindowInSeconds">unprotectedWindowInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetrics">DataOciRecoveryProtectedDatabaseMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupSpaceEstimateInGbs`<sup>Required</sup> <a name="backupSpaceEstimateInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceEstimateInGbs"></a>

```typescript
public readonly backupSpaceEstimateInGbs: number;
```

- *Type:* number

---

##### `backupSpaceUsedInGbs`<sup>Required</sup> <a name="backupSpaceUsedInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceUsedInGbs"></a>

```typescript
public readonly backupSpaceUsedInGbs: number;
```

- *Type:* number

---

##### `currentRetentionPeriodInSeconds`<sup>Required</sup> <a name="currentRetentionPeriodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.currentRetentionPeriodInSeconds"></a>

```typescript
public readonly currentRetentionPeriodInSeconds: number;
```

- *Type:* number

---

##### `dbSizeInGbs`<sup>Required</sup> <a name="dbSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.dbSizeInGbs"></a>

```typescript
public readonly dbSizeInGbs: number;
```

- *Type:* number

---

##### `isRedoLogsEnabled`<sup>Required</sup> <a name="isRedoLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.isRedoLogsEnabled"></a>

```typescript
public readonly isRedoLogsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `minimumRecoveryNeededInDays`<sup>Required</sup> <a name="minimumRecoveryNeededInDays" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.minimumRecoveryNeededInDays"></a>

```typescript
public readonly minimumRecoveryNeededInDays: number;
```

- *Type:* number

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `unprotectedWindowInSeconds`<sup>Required</sup> <a name="unprotectedWindowInSeconds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.unprotectedWindowInSeconds"></a>

```typescript
public readonly unprotectedWindowInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciRecoveryProtectedDatabaseMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseMetrics">DataOciRecoveryProtectedDatabaseMetrics</a>

---


### DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList <a name="DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.get"></a>

```typescript
public get(index: number): DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference <a name="DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer"></a>

```typescript
import { dataOciRecoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets">DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recoveryServiceSubnetId`<sup>Required</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId"></a>

```typescript
public readonly recoveryServiceSubnetId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabase.DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets">DataOciRecoveryProtectedDatabaseRecoveryServiceSubnets</a>

---



