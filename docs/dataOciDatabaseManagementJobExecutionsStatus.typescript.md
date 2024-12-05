# `dataOciDatabaseManagementJobExecutionsStatus` Submodule <a name="`dataOciDatabaseManagementJobExecutionsStatus` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementJobExecutionsStatus <a name="DataOciDatabaseManagementJobExecutionsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status oci_database_management_job_executions_status}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer"></a>

```typescript
import { dataOciDatabaseManagementJobExecutionsStatus } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus(scope: Construct, id: string, config: DataOciDatabaseManagementJobExecutionsStatusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig">DataOciDatabaseManagementJobExecutionsStatusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig">DataOciDatabaseManagementJobExecutionsStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetManagedDatabaseGroupId">resetManagedDatabaseGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetManagedDatabaseId">resetManagedDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagedDatabaseGroupId` <a name="resetManagedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetManagedDatabaseGroupId"></a>

```typescript
public resetManagedDatabaseGroupId(): void
```

##### `resetManagedDatabaseId` <a name="resetManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetManagedDatabaseId"></a>

```typescript
public resetManagedDatabaseId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementJobExecutionsStatus resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementJobExecutionsStatus } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementJobExecutionsStatus } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementJobExecutionsStatus } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementJobExecutionsStatus } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementJobExecutionsStatus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementJobExecutionsStatus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementJobExecutionsStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementJobExecutionsStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList">DataOciDatabaseManagementJobExecutionsStatusItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseGroupIdInput">managedDatabaseGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseGroupId">managedDatabaseGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementJobExecutionsStatusItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList">DataOciDatabaseManagementJobExecutionsStatusItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseGroupIdInput`<sup>Optional</sup> <a name="managedDatabaseGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseGroupIdInput"></a>

```typescript
public readonly managedDatabaseGroupIdInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseGroupId`<sup>Required</sup> <a name="managedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseGroupId"></a>

```typescript
public readonly managedDatabaseGroupId: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementJobExecutionsStatusConfig <a name="DataOciDatabaseManagementJobExecutionsStatusConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementJobExecutionsStatus } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementJobExecutionsStatusConfig: dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#compartment_id DataOciDatabaseManagementJobExecutionsStatus#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#end_time DataOciDatabaseManagementJobExecutionsStatus#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#start_time DataOciDatabaseManagementJobExecutionsStatus#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#id DataOciDatabaseManagementJobExecutionsStatus#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.managedDatabaseGroupId">managedDatabaseGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#name DataOciDatabaseManagementJobExecutionsStatus#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#compartment_id DataOciDatabaseManagementJobExecutionsStatus#compartment_id}.

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#end_time DataOciDatabaseManagementJobExecutionsStatus#end_time}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#start_time DataOciDatabaseManagementJobExecutionsStatus#start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#id DataOciDatabaseManagementJobExecutionsStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedDatabaseGroupId`<sup>Optional</sup> <a name="managedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.managedDatabaseGroupId"></a>

```typescript
public readonly managedDatabaseGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_group_id}.

---

##### `managedDatabaseId`<sup>Optional</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#name DataOciDatabaseManagementJobExecutionsStatus#name}.

---

### DataOciDatabaseManagementJobExecutionsStatusItems <a name="DataOciDatabaseManagementJobExecutionsStatusItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementJobExecutionsStatus } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementJobExecutionsStatusItems: dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementJobExecutionsStatusItemsList <a name="DataOciDatabaseManagementJobExecutionsStatusItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementJobExecutionsStatus } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementJobExecutionsStatus } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItems">DataOciDatabaseManagementJobExecutionsStatusItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementJobExecutionsStatusItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItems">DataOciDatabaseManagementJobExecutionsStatusItems</a>

---



