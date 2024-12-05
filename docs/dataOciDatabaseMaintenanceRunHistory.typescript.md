# `dataOciDatabaseMaintenanceRunHistory` Submodule <a name="`dataOciDatabaseMaintenanceRunHistory` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMaintenanceRunHistory <a name="DataOciDatabaseMaintenanceRunHistory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history oci_database_maintenance_run_history}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory(scope: Construct, id: string, config: DataOciDatabaseMaintenanceRunHistoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig">DataOciDatabaseMaintenanceRunHistoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig">DataOciDatabaseMaintenanceRunHistoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistory resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isConstruct"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformElement"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseMaintenanceRunHistory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseMaintenanceRunHistory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMaintenanceRunHistory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.dbServersHistoryDetails">dbServersHistoryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunDetails">maintenanceRunDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunHistoryIdInput">maintenanceRunHistoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunHistoryId">maintenanceRunHistoryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbServersHistoryDetails`<sup>Required</sup> <a name="dbServersHistoryDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.dbServersHistoryDetails"></a>

```typescript
public readonly dbServersHistoryDetails: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList</a>

---

##### `maintenanceRunDetails`<sup>Required</sup> <a name="maintenanceRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunDetails"></a>

```typescript
public readonly maintenanceRunDetails: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceRunHistoryIdInput`<sup>Optional</sup> <a name="maintenanceRunHistoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunHistoryIdInput"></a>

```typescript
public readonly maintenanceRunHistoryIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceRunHistoryId`<sup>Required</sup> <a name="maintenanceRunHistoryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.maintenanceRunHistoryId"></a>

```typescript
public readonly maintenanceRunHistoryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMaintenanceRunHistoryConfig <a name="DataOciDatabaseMaintenanceRunHistoryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMaintenanceRunHistoryConfig: dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.maintenanceRunHistoryId">maintenanceRunHistoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#maintenance_run_history_id DataOciDatabaseMaintenanceRunHistory#maintenance_run_history_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#id DataOciDatabaseMaintenanceRunHistory#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maintenanceRunHistoryId`<sup>Required</sup> <a name="maintenanceRunHistoryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.maintenanceRunHistoryId"></a>

```typescript
public readonly maintenanceRunHistoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#maintenance_run_history_id DataOciDatabaseMaintenanceRunHistory#maintenance_run_history_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_history#id DataOciDatabaseMaintenanceRunHistory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails: dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails = { ... }
```


### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails: dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails = { ... }
```


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails: dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails = { ... }
```


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime: dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration">estimatedPatchDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.patchingStatus">patchingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingEnded">timePatchingEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingStarted">timePatchingStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedPatchDuration`<sup>Required</sup> <a name="estimatedPatchDuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration"></a>

```typescript
public readonly estimatedPatchDuration: number;
```

- *Type:* number

---

##### `patchingStatus`<sup>Required</sup> <a name="patchingStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.patchingStatus"></a>

```typescript
public readonly patchingStatus: string;
```

- *Type:* string

---

##### `timePatchingEnded`<sup>Required</sup> <a name="timePatchingEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingEnded"></a>

```typescript
public readonly timePatchingEnded: string;
```

- *Type:* string

---

##### `timePatchingStarted`<sup>Required</sup> <a name="timePatchingStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingStarted"></a>

```typescript
public readonly timePatchingStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.dbServerPatchingDetails">dbServerPatchingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbServerPatchingDetails`<sup>Required</sup> <a name="dbServerPatchingDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.dbServerPatchingDetails"></a>

```typescript
public readonly dbServerPatchingDetails: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsDbServerPatchingDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails">DataOciDatabaseMaintenanceRunHistoryDbServersHistoryDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">estimatedDbServerPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">estimatedNetworkSwitchesPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">estimatedStorageServerPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">totalEstimatedPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedDbServerPatchingTime`<sup>Required</sup> <a name="estimatedDbServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```typescript
public readonly estimatedDbServerPatchingTime: number;
```

- *Type:* number

---

##### `estimatedNetworkSwitchesPatchingTime`<sup>Required</sup> <a name="estimatedNetworkSwitchesPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```typescript
public readonly estimatedNetworkSwitchesPatchingTime: number;
```

- *Type:* number

---

##### `estimatedStorageServerPatchingTime`<sup>Required</sup> <a name="estimatedStorageServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```typescript
public readonly estimatedStorageServerPatchingTime: number;
```

- *Type:* number

---

##### `totalEstimatedPatchingTime`<sup>Required</sup> <a name="totalEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```typescript
public readonly totalEstimatedPatchingTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTime</a>

---


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMaintenanceRunHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.currentCustomActionTimeoutInMins">currentCustomActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.currentPatchingComponent">currentPatchingComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.estimatedComponentPatchingStartTime">estimatedComponentPatchingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.estimatedPatchingTime">estimatedPatchingTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.maintenanceSubtype">maintenanceSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.maintenanceType">maintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchFailureCount">patchFailureCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchId">patchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingEndTime">patchingEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingStartTime">patchingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingStatus">patchingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.peerMaintenanceRunId">peerMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetDbServerVersion">targetDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetStorageServerVersion">targetStorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeScheduled">timeScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `currentCustomActionTimeoutInMins`<sup>Required</sup> <a name="currentCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.currentCustomActionTimeoutInMins"></a>

```typescript
public readonly currentCustomActionTimeoutInMins: number;
```

- *Type:* number

---

##### `currentPatchingComponent`<sup>Required</sup> <a name="currentPatchingComponent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.currentPatchingComponent"></a>

```typescript
public readonly currentPatchingComponent: string;
```

- *Type:* string

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `estimatedComponentPatchingStartTime`<sup>Required</sup> <a name="estimatedComponentPatchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.estimatedComponentPatchingStartTime"></a>

```typescript
public readonly estimatedComponentPatchingStartTime: string;
```

- *Type:* string

---

##### `estimatedPatchingTime`<sup>Required</sup> <a name="estimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.estimatedPatchingTime"></a>

```typescript
public readonly estimatedPatchingTime: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsEstimatedPatchingTimeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDstFileUpdateEnabled`<sup>Required</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.isDstFileUpdateEnabled"></a>

```typescript
public readonly isDstFileUpdateEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maintenanceSubtype`<sup>Required</sup> <a name="maintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.maintenanceSubtype"></a>

```typescript
public readonly maintenanceSubtype: string;
```

- *Type:* string

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.maintenanceType"></a>

```typescript
public readonly maintenanceType: string;
```

- *Type:* string

---

##### `patchFailureCount`<sup>Required</sup> <a name="patchFailureCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchFailureCount"></a>

```typescript
public readonly patchFailureCount: number;
```

- *Type:* number

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchId"></a>

```typescript
public readonly patchId: string;
```

- *Type:* string

---

##### `patchingEndTime`<sup>Required</sup> <a name="patchingEndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingEndTime"></a>

```typescript
public readonly patchingEndTime: string;
```

- *Type:* string

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `patchingStartTime`<sup>Required</sup> <a name="patchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingStartTime"></a>

```typescript
public readonly patchingStartTime: string;
```

- *Type:* string

---

##### `patchingStatus`<sup>Required</sup> <a name="patchingStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.patchingStatus"></a>

```typescript
public readonly patchingStatus: string;
```

- *Type:* string

---

##### `peerMaintenanceRunId`<sup>Required</sup> <a name="peerMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.peerMaintenanceRunId"></a>

```typescript
public readonly peerMaintenanceRunId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetDbServerVersion`<sup>Required</sup> <a name="targetDbServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetDbServerVersion"></a>

```typescript
public readonly targetDbServerVersion: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

##### `targetStorageServerVersion`<sup>Required</sup> <a name="targetStorageServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.targetStorageServerVersion"></a>

```typescript
public readonly targetStorageServerVersion: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeScheduled"></a>

```typescript
public readonly timeScheduled: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistory.DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails">DataOciDatabaseMaintenanceRunHistoryMaintenanceRunDetails</a>

---



