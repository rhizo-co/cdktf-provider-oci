# `dataOciDatabaseAutonomousVirtualMachines` Submodule <a name="`dataOciDatabaseAutonomousVirtualMachines` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousVirtualMachines <a name="DataOciDatabaseAutonomousVirtualMachines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines oci_database_autonomous_virtual_machines}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines(scope: Construct, id: string, config: DataOciDatabaseAutonomousVirtualMachinesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig">DataOciDatabaseAutonomousVirtualMachinesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig">DataOciDatabaseAutonomousVirtualMachinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseAutonomousVirtualMachinesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter">DataOciDatabaseAutonomousVirtualMachinesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousVirtualMachines resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousVirtualMachines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousVirtualMachines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousVirtualMachines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousVirtualMachines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.autonomousVirtualMachines">autonomousVirtualMachines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList">DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList">DataOciDatabaseAutonomousVirtualMachinesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.autonomousVmClusterIdInput">autonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter">DataOciDatabaseAutonomousVirtualMachinesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousVirtualMachines`<sup>Required</sup> <a name="autonomousVirtualMachines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.autonomousVirtualMachines"></a>

```typescript
public readonly autonomousVirtualMachines: DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList">DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseAutonomousVirtualMachinesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList">DataOciDatabaseAutonomousVirtualMachinesFilterList</a>

---

##### `autonomousVmClusterIdInput`<sup>Optional</sup> <a name="autonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.autonomousVmClusterIdInput"></a>

```typescript
public readonly autonomousVmClusterIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseAutonomousVirtualMachinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter">DataOciDatabaseAutonomousVirtualMachinesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.autonomousVmClusterId"></a>

```typescript
public readonly autonomousVmClusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachines.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines <a name="DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines: dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines = { ... }
```


### DataOciDatabaseAutonomousVirtualMachinesConfig <a name="DataOciDatabaseAutonomousVirtualMachinesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousVirtualMachinesConfig: dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#autonomous_vm_cluster_id DataOciDatabaseAutonomousVirtualMachines#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#compartment_id DataOciDatabaseAutonomousVirtualMachines#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter">DataOciDatabaseAutonomousVirtualMachinesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#id DataOciDatabaseAutonomousVirtualMachines#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#state DataOciDatabaseAutonomousVirtualMachines#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.autonomousVmClusterId"></a>

```typescript
public readonly autonomousVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#autonomous_vm_cluster_id DataOciDatabaseAutonomousVirtualMachines#autonomous_vm_cluster_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#compartment_id DataOciDatabaseAutonomousVirtualMachines#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseAutonomousVirtualMachinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter">DataOciDatabaseAutonomousVirtualMachinesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#filter DataOciDatabaseAutonomousVirtualMachines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#id DataOciDatabaseAutonomousVirtualMachines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#state DataOciDatabaseAutonomousVirtualMachines#state}.

---

### DataOciDatabaseAutonomousVirtualMachinesFilter <a name="DataOciDatabaseAutonomousVirtualMachinesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousVirtualMachinesFilter: dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#name DataOciDatabaseAutonomousVirtualMachines#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#values DataOciDatabaseAutonomousVirtualMachines#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#regex DataOciDatabaseAutonomousVirtualMachines#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#name DataOciDatabaseAutonomousVirtualMachines#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#values DataOciDatabaseAutonomousVirtualMachines#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_virtual_machines#regex DataOciDatabaseAutonomousVirtualMachines#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList <a name="DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference <a name="DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.clientIpAddress">clientIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.dbServerDisplayName">dbServerDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.dbServerId">dbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.vmName">vmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines">DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.autonomousVmClusterId"></a>

```typescript
public readonly autonomousVmClusterId: string;
```

- *Type:* string

---

##### `clientIpAddress`<sup>Required</sup> <a name="clientIpAddress" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.clientIpAddress"></a>

```typescript
public readonly clientIpAddress: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dbServerDisplayName`<sup>Required</sup> <a name="dbServerDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.dbServerDisplayName"></a>

```typescript
public readonly dbServerDisplayName: string;
```

- *Type:* string

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.dbServerId"></a>

```typescript
public readonly dbServerId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vmName`<sup>Required</sup> <a name="vmName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.vmName"></a>

```typescript
public readonly vmName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachinesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines">DataOciDatabaseAutonomousVirtualMachinesAutonomousVirtualMachines</a>

---


### DataOciDatabaseAutonomousVirtualMachinesFilterList <a name="DataOciDatabaseAutonomousVirtualMachinesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter">DataOciDatabaseAutonomousVirtualMachinesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousVirtualMachinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter">DataOciDatabaseAutonomousVirtualMachinesFilter</a>[]

---


### DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference <a name="DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousVirtualMachines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter">DataOciDatabaseAutonomousVirtualMachinesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousVirtualMachinesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVirtualMachines.DataOciDatabaseAutonomousVirtualMachinesFilter">DataOciDatabaseAutonomousVirtualMachinesFilter</a>

---



