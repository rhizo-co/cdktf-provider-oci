# `dataOciDatabaseExternalPluggableDatabases` Submodule <a name="`dataOciDatabaseExternalPluggableDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExternalPluggableDatabases <a name="DataOciDatabaseExternalPluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases oci_database_external_pluggable_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases(scope: Construct, id: string, config: DataOciDatabaseExternalPluggableDatabasesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig">DataOciDatabaseExternalPluggableDatabasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig">DataOciDatabaseExternalPluggableDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetExternalContainerDatabaseId">resetExternalContainerDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseExternalPluggableDatabasesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExternalContainerDatabaseId` <a name="resetExternalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetExternalContainerDatabaseId"></a>

```typescript
public resetExternalContainerDatabaseId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExternalPluggableDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isConstruct"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformElement"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseExternalPluggableDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExternalPluggableDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExternalPluggableDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExternalPluggableDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalPluggableDatabases">externalPluggableDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList">DataOciDatabaseExternalPluggableDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalContainerDatabaseIdInput">externalContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalContainerDatabaseId">externalContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `externalPluggableDatabases`<sup>Required</sup> <a name="externalPluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalPluggableDatabases"></a>

```typescript
public readonly externalPluggableDatabases: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseExternalPluggableDatabasesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList">DataOciDatabaseExternalPluggableDatabasesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalContainerDatabaseIdInput`<sup>Optional</sup> <a name="externalContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalContainerDatabaseIdInput"></a>

```typescript
public readonly externalContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseExternalPluggableDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalContainerDatabaseId`<sup>Required</sup> <a name="externalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.externalContainerDatabaseId"></a>

```typescript
public readonly externalContainerDatabaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabases.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExternalPluggableDatabasesConfig <a name="DataOciDatabaseExternalPluggableDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalPluggableDatabasesConfig: dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#compartment_id DataOciDatabaseExternalPluggableDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#display_name DataOciDatabaseExternalPluggableDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.externalContainerDatabaseId">externalContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#external_container_database_id DataOciDatabaseExternalPluggableDatabases#external_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#id DataOciDatabaseExternalPluggableDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#state DataOciDatabaseExternalPluggableDatabases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#compartment_id DataOciDatabaseExternalPluggableDatabases#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#display_name DataOciDatabaseExternalPluggableDatabases#display_name}.

---

##### `externalContainerDatabaseId`<sup>Optional</sup> <a name="externalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.externalContainerDatabaseId"></a>

```typescript
public readonly externalContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#external_container_database_id DataOciDatabaseExternalPluggableDatabases#external_container_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseExternalPluggableDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#filter DataOciDatabaseExternalPluggableDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#id DataOciDatabaseExternalPluggableDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#state DataOciDatabaseExternalPluggableDatabases#state}.

---

### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases: dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases = { ... }
```


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig: dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig = { ... }
```


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig: dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig = { ... }
```


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig: dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig = { ... }
```


### DataOciDatabaseExternalPluggableDatabasesFilter <a name="DataOciDatabaseExternalPluggableDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExternalPluggableDatabasesFilter: dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#name DataOciDatabaseExternalPluggableDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#values DataOciDatabaseExternalPluggableDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#regex DataOciDatabaseExternalPluggableDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#name DataOciDatabaseExternalPluggableDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#values DataOciDatabaseExternalPluggableDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_pluggable_databases#regex DataOciDatabaseExternalPluggableDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId">databaseManagementConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementStatus">databaseManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseManagementConnectionId`<sup>Required</sup> <a name="databaseManagementConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId"></a>

```typescript
public readonly databaseManagementConnectionId: string;
```

- *Type:* string

---

##### `databaseManagementStatus`<sup>Required</sup> <a name="databaseManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementStatus"></a>

```typescript
public readonly databaseManagementStatus: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfig</a>

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId">operationsInsightsConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsStatus">operationsInsightsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationsInsightsConnectorId`<sup>Required</sup> <a name="operationsInsightsConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId"></a>

```typescript
public readonly operationsInsightsConnectorId: string;
```

- *Type:* string

---

##### `operationsInsightsStatus`<sup>Required</sup> <a name="operationsInsightsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsStatus"></a>

```typescript
public readonly operationsInsightsStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfig</a>

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseConfiguration">databaseConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseEdition">databaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseManagementConfig">databaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbId">dbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbPacks">dbPacks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.externalContainerDatabaseId">externalContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.operationsInsightsConfig">operationsInsightsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.stackMonitoringConfig">stackMonitoringConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseConfiguration`<sup>Required</sup> <a name="databaseConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseConfiguration"></a>

```typescript
public readonly databaseConfiguration: string;
```

- *Type:* string

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseEdition"></a>

```typescript
public readonly databaseEdition: string;
```

- *Type:* string

---

##### `databaseManagementConfig`<sup>Required</sup> <a name="databaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseManagementConfig"></a>

```typescript
public readonly databaseManagementConfig: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesDatabaseManagementConfigList</a>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `dbId`<sup>Required</sup> <a name="dbId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbId"></a>

```typescript
public readonly dbId: string;
```

- *Type:* string

---

##### `dbPacks`<sup>Required</sup> <a name="dbPacks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbPacks"></a>

```typescript
public readonly dbPacks: string;
```

- *Type:* string

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalContainerDatabaseId`<sup>Required</sup> <a name="externalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.externalContainerDatabaseId"></a>

```typescript
public readonly externalContainerDatabaseId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

---

##### `operationsInsightsConfig`<sup>Required</sup> <a name="operationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.operationsInsightsConfig"></a>

```typescript
public readonly operationsInsightsConfig: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOperationsInsightsConfigList</a>

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `stackMonitoringConfig`<sup>Required</sup> <a name="stackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.stackMonitoringConfig"></a>

```typescript
public readonly stackMonitoringConfig: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabases</a>

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference <a name="DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId">stackMonitoringConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringStatus">stackMonitoringStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stackMonitoringConnectorId`<sup>Required</sup> <a name="stackMonitoringConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId"></a>

```typescript
public readonly stackMonitoringConnectorId: string;
```

- *Type:* string

---

##### `stackMonitoringStatus`<sup>Required</sup> <a name="stackMonitoringStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringStatus"></a>

```typescript
public readonly stackMonitoringStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig">DataOciDatabaseExternalPluggableDatabasesExternalPluggableDatabasesStackMonitoringConfig</a>

---


### DataOciDatabaseExternalPluggableDatabasesFilterList <a name="DataOciDatabaseExternalPluggableDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExternalPluggableDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseExternalPluggableDatabasesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>[]

---


### DataOciDatabaseExternalPluggableDatabasesFilterOutputReference <a name="DataOciDatabaseExternalPluggableDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExternalPluggableDatabases } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseExternalPluggableDatabasesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalPluggableDatabases.DataOciDatabaseExternalPluggableDatabasesFilter">DataOciDatabaseExternalPluggableDatabasesFilter</a>

---



