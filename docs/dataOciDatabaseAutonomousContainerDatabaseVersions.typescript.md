# `dataOciDatabaseAutonomousContainerDatabaseVersions` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabaseVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabaseVersions <a name="DataOciDatabaseAutonomousContainerDatabaseVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions oci_database_autonomous_container_database_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions(scope: Construct, id: string, config: DataOciDatabaseAutonomousContainerDatabaseVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig">DataOciDatabaseAutonomousContainerDatabaseVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig">DataOciDatabaseAutonomousContainerDatabaseVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseAutonomousContainerDatabaseVersionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabaseVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousContainerDatabaseVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabaseVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.autonomousContainerDatabaseVersions">autonomousContainerDatabaseVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList">DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponentInput">serviceComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponent">serviceComponent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousContainerDatabaseVersions`<sup>Required</sup> <a name="autonomousContainerDatabaseVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.autonomousContainerDatabaseVersions"></a>

```typescript
public readonly autonomousContainerDatabaseVersions: DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList">DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseAutonomousContainerDatabaseVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceComponentInput`<sup>Optional</sup> <a name="serviceComponentInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponentInput"></a>

```typescript
public readonly serviceComponentInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceComponent`<sup>Required</sup> <a name="serviceComponent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.serviceComponent"></a>

```typescript
public readonly serviceComponent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions: dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps: dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps = { ... }
```


### DataOciDatabaseAutonomousContainerDatabaseVersionsConfig <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseVersionsConfig: dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#compartment_id DataOciDatabaseAutonomousContainerDatabaseVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.serviceComponent">serviceComponent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#service_component DataOciDatabaseAutonomousContainerDatabaseVersions#service_component}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#id DataOciDatabaseAutonomousContainerDatabaseVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#compartment_id DataOciDatabaseAutonomousContainerDatabaseVersions#compartment_id}.

---

##### `serviceComponent`<sup>Required</sup> <a name="serviceComponent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.serviceComponent"></a>

```typescript
public readonly serviceComponent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#service_component DataOciDatabaseAutonomousContainerDatabaseVersions#service_component}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseAutonomousContainerDatabaseVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#filter DataOciDatabaseAutonomousContainerDatabaseVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#id DataOciDatabaseAutonomousContainerDatabaseVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousContainerDatabaseVersionsFilter <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousContainerDatabaseVersionsFilter: dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#name DataOciDatabaseAutonomousContainerDatabaseVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#values DataOciDatabaseAutonomousContainerDatabaseVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#regex DataOciDatabaseAutonomousContainerDatabaseVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#name DataOciDatabaseAutonomousContainerDatabaseVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#values DataOciDatabaseAutonomousContainerDatabaseVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_versions#regex DataOciDatabaseAutonomousContainerDatabaseVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.supportedApps">supportedApps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `supportedApps`<sup>Required</sup> <a name="supportedApps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.supportedApps"></a>

```typescript
public readonly supportedApps: DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersions</a>

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.endOfSupport">endOfSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.isCertified">isCertified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.releaseDate">releaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.supportedAppName">supportedAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endOfSupport`<sup>Required</sup> <a name="endOfSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.endOfSupport"></a>

```typescript
public readonly endOfSupport: string;
```

- *Type:* string

---

##### `isCertified`<sup>Required</sup> <a name="isCertified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.isCertified"></a>

```typescript
public readonly isCertified: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.releaseDate"></a>

```typescript
public readonly releaseDate: string;
```

- *Type:* string

---

##### `supportedAppName`<sup>Required</sup> <a name="supportedAppName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.supportedAppName"></a>

```typescript
public readonly supportedAppName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedAppsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps">DataOciDatabaseAutonomousContainerDatabaseVersionsAutonomousContainerDatabaseVersionsSupportedApps</a>

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousContainerDatabaseVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>[]

---


### DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousContainerDatabaseVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousContainerDatabaseVersionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseVersions.DataOciDatabaseAutonomousContainerDatabaseVersionsFilter">DataOciDatabaseAutonomousContainerDatabaseVersionsFilter</a>

---



