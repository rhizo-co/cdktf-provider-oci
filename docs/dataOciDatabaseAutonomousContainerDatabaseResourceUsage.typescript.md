# `dataOciDatabaseAutonomousContainerDatabaseResourceUsage` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabaseResourceUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabaseResourceUsage <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage oci_database_autonomous_container_database_resource_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseResourceUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage(scope: Construct, id: string, config: DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig">DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig">DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseResourceUsage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseResourceUsage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseResourceUsage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseResourceUsage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseResourceUsage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseResourceUsage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabaseResourceUsage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousContainerDatabaseResourceUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabaseResourceUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseVmUsage">autonomousContainerDatabaseVmUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.availableCpus">availableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.largestProvisionableAutonomousDatabaseInCpus">largestProvisionableAutonomousDatabaseInCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionableCpus">provisionableCpus</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.usedCpus">usedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseIdInput">autonomousContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousContainerDatabaseVmUsage`<sup>Required</sup> <a name="autonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseVmUsage"></a>

```typescript
public readonly autonomousContainerDatabaseVmUsage: DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList</a>

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.availableCpus"></a>

```typescript
public readonly availableCpus: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `largestProvisionableAutonomousDatabaseInCpus`<sup>Required</sup> <a name="largestProvisionableAutonomousDatabaseInCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```typescript
public readonly largestProvisionableAutonomousDatabaseInCpus: number;
```

- *Type:* number

---

##### `provisionableCpus`<sup>Required</sup> <a name="provisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionableCpus"></a>

```typescript
public readonly provisionableCpus: number[];
```

- *Type:* number[]

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `usedCpus`<sup>Required</sup> <a name="usedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.usedCpus"></a>

```typescript
public readonly usedCpus: number;
```

- *Type:* number

---

##### `autonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseIdInput"></a>

```typescript
public readonly autonomousContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseResourceUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage: dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseResourceUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig: dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#autonomous_container_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseResourceUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseResourceUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus">usedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `usedCpus`<sup>Required</sup> <a name="usedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus"></a>

```typescript
public readonly usedCpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage</a>

---



