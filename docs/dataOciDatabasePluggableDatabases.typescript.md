# `dataOciDatabasePluggableDatabases` Submodule <a name="`dataOciDatabasePluggableDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabasePluggableDatabases <a name="DataOciDatabasePluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases oci_database_pluggable_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases(scope: Construct, id: string, config?: DataOciDatabasePluggableDatabasesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig">DataOciDatabasePluggableDatabasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig">DataOciDatabasePluggableDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetPdbName">resetPdbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabasePluggableDatabasesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetDatabaseId"></a>

```typescript
public resetDatabaseId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPdbName` <a name="resetPdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetPdbName"></a>

```typescript
public resetPdbName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabasePluggableDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isConstruct"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformElement"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformDataSource"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabasePluggableDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabasePluggableDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabasePluggableDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabasePluggableDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList">DataOciDatabasePluggableDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pluggableDatabases">pluggableDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList">DataOciDatabasePluggableDatabasesPluggableDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbNameInput">pdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbName">pdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filter"></a>

```typescript
public readonly filter: DataOciDatabasePluggableDatabasesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList">DataOciDatabasePluggableDatabasesFilterList</a>

---

##### `pluggableDatabases`<sup>Required</sup> <a name="pluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pluggableDatabases"></a>

```typescript
public readonly pluggableDatabases: DataOciDatabasePluggableDatabasesPluggableDatabasesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList">DataOciDatabasePluggableDatabasesPluggableDatabasesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabasePluggableDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pdbNameInput`<sup>Optional</sup> <a name="pdbNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbNameInput"></a>

```typescript
public readonly pdbNameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbName"></a>

```typescript
public readonly pdbName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabasePluggableDatabasesConfig <a name="DataOciDatabasePluggableDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasesConfig: dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#compartment_id DataOciDatabasePluggableDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#database_id DataOciDatabasePluggableDatabases#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#id DataOciDatabasePluggableDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.pdbName">pdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#pdb_name DataOciDatabasePluggableDatabases#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#state DataOciDatabasePluggableDatabases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#compartment_id DataOciDatabasePluggableDatabases#compartment_id}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#database_id DataOciDatabasePluggableDatabases#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabasePluggableDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#filter DataOciDatabasePluggableDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#id DataOciDatabasePluggableDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdbName`<sup>Optional</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.pdbName"></a>

```typescript
public readonly pdbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#pdb_name DataOciDatabasePluggableDatabases#pdb_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#state DataOciDatabasePluggableDatabases#state}.

---

### DataOciDatabasePluggableDatabasesFilter <a name="DataOciDatabasePluggableDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasesFilter: dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#name DataOciDatabasePluggableDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#values DataOciDatabasePluggableDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#regex DataOciDatabasePluggableDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#name DataOciDatabasePluggableDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#values DataOciDatabasePluggableDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#regex DataOciDatabasePluggableDatabases#regex}.

---

### DataOciDatabasePluggableDatabasesPluggableDatabases <a name="DataOciDatabasePluggableDatabasesPluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasesPluggableDatabases: dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases = { ... }
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings: dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings = { ... }
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails: dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails = { ... }
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails: dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails = { ... }
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails: dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails = { ... }
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig: dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig = { ... }
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig: dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabasePluggableDatabasesFilterList <a name="DataOciDatabasePluggableDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabasePluggableDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>[]

---


### DataOciDatabasePluggableDatabasesFilterOutputReference <a name="DataOciDatabasePluggableDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabasePluggableDatabasesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbDefault">pdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbIpDefault">pdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```typescript
public readonly allConnectionStrings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `pdbDefault`<sup>Required</sup> <a name="pdbDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbDefault"></a>

```typescript
public readonly pdbDefault: string;
```

- *Type:* string

---

##### `pdbIpDefault`<sup>Required</sup> <a name="pdbIpDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbIpDefault"></a>

```typescript
public readonly pdbIpDefault: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseAdminPassword">containerDatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseId">containerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.convertToRegularTrigger">convertToRegularTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.isRestricted">isRestricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbAdminPassword">pdbAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbCreationTypeDetails">pdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbName">pdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbNodeLevelDetails">pdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pluggableDatabaseManagementConfig">pluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshableCloneConfig">refreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshTrigger">refreshTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldCreatePdbBackup">shouldCreatePdbBackup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldPdbAdminAccountBeLocked">shouldPdbAdminAccountBeLocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases">DataOciDatabasePluggableDatabasesPluggableDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList</a>

---

##### `containerDatabaseAdminPassword`<sup>Required</sup> <a name="containerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseAdminPassword"></a>

```typescript
public readonly containerDatabaseAdminPassword: string;
```

- *Type:* string

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseId"></a>

```typescript
public readonly containerDatabaseId: string;
```

- *Type:* string

---

##### `convertToRegularTrigger`<sup>Required</sup> <a name="convertToRegularTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.convertToRegularTrigger"></a>

```typescript
public readonly convertToRegularTrigger: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRestricted`<sup>Required</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.isRestricted"></a>

```typescript
public readonly isRestricted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `pdbAdminPassword`<sup>Required</sup> <a name="pdbAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbAdminPassword"></a>

```typescript
public readonly pdbAdminPassword: string;
```

- *Type:* string

---

##### `pdbCreationTypeDetails`<sup>Required</sup> <a name="pdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbCreationTypeDetails"></a>

```typescript
public readonly pdbCreationTypeDetails: DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList</a>

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbName"></a>

```typescript
public readonly pdbName: string;
```

- *Type:* string

---

##### `pdbNodeLevelDetails`<sup>Required</sup> <a name="pdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbNodeLevelDetails"></a>

```typescript
public readonly pdbNodeLevelDetails: DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList</a>

---

##### `pluggableDatabaseManagementConfig`<sup>Required</sup> <a name="pluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pluggableDatabaseManagementConfig"></a>

```typescript
public readonly pluggableDatabaseManagementConfig: DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList</a>

---

##### `refreshableCloneConfig`<sup>Required</sup> <a name="refreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshableCloneConfig"></a>

```typescript
public readonly refreshableCloneConfig: DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList</a>

---

##### `refreshTrigger`<sup>Required</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshTrigger"></a>

```typescript
public readonly refreshTrigger: number;
```

- *Type:* number

---

##### `rotateKeyTrigger`<sup>Required</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.rotateKeyTrigger"></a>

```typescript
public readonly rotateKeyTrigger: number;
```

- *Type:* number

---

##### `shouldCreatePdbBackup`<sup>Required</sup> <a name="shouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldCreatePdbBackup"></a>

```typescript
public readonly shouldCreatePdbBackup: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `shouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="shouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldPdbAdminAccountBeLocked"></a>

```typescript
public readonly shouldPdbAdminAccountBeLocked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tdeWalletPassword`<sup>Required</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.tdeWalletPassword"></a>

```typescript
public readonly tdeWalletPassword: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasesPluggableDatabases;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases">DataOciDatabasePluggableDatabasesPluggableDatabases</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationType">creationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUsername">dblinkUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUserPassword">dblinkUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.isThinClone">isThinClone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails">refreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword">sourceContainerDatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId">sourcePluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* string

---

##### `dblinkUsername`<sup>Required</sup> <a name="dblinkUsername" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUsername"></a>

```typescript
public readonly dblinkUsername: string;
```

- *Type:* string

---

##### `dblinkUserPassword`<sup>Required</sup> <a name="dblinkUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUserPassword"></a>

```typescript
public readonly dblinkUserPassword: string;
```

- *Type:* string

---

##### `isThinClone`<sup>Required</sup> <a name="isThinClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.isThinClone"></a>

```typescript
public readonly isThinClone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `refreshableCloneDetails`<sup>Required</sup> <a name="refreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails"></a>

```typescript
public readonly refreshableCloneDetails: DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList</a>

---

##### `sourceContainerDatabaseAdminPassword`<sup>Required</sup> <a name="sourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword"></a>

```typescript
public readonly sourceContainerDatabaseAdminPassword: string;
```

- *Type:* string

---

##### `sourcePluggableDatabaseId`<sup>Required</sup> <a name="sourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId"></a>

```typescript
public readonly sourcePluggableDatabaseId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone">isRefreshableClone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.nodeName">nodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```typescript
public readonly nodeName: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.managementStatus">managementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managementStatus`<sup>Required</sup> <a name="managementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```typescript
public readonly managementStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabasePluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.isRefreshableClone">isRefreshableClone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig</a>

---



