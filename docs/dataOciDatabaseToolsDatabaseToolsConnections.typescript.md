# `dataOciDatabaseToolsDatabaseToolsConnections` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsConnections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsConnections <a name="DataOciDatabaseToolsDatabaseToolsConnections" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections oci_database_tools_database_tools_connections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections(scope: Construct, id: string, config: DataOciDatabaseToolsDatabaseToolsConnectionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig">DataOciDatabaseToolsDatabaseToolsConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig">DataOciDatabaseToolsDatabaseToolsConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRelatedResourceIdentifier">resetRelatedResourceIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRuntimeSupport">resetRuntimeSupport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseToolsDatabaseToolsConnectionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRelatedResourceIdentifier` <a name="resetRelatedResourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRelatedResourceIdentifier"></a>

```typescript
public resetRelatedResourceIdentifier(): void
```

##### `resetRuntimeSupport` <a name="resetRuntimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRuntimeSupport"></a>

```typescript
public resetRuntimeSupport(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetState"></a>

```typescript
public resetState(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsConnections resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseToolsDatabaseToolsConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.databaseToolsConnectionCollection">databaseToolsConnectionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList">DataOciDatabaseToolsDatabaseToolsConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifierInput">relatedResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupportInput">runtimeSupportInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.typeInput">typeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifier">relatedResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupport">runtimeSupport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.type">type</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `databaseToolsConnectionCollection`<sup>Required</sup> <a name="databaseToolsConnectionCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.databaseToolsConnectionCollection"></a>

```typescript
public readonly databaseToolsConnectionCollection: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseToolsDatabaseToolsConnectionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList">DataOciDatabaseToolsDatabaseToolsConnectionsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseToolsDatabaseToolsConnectionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `relatedResourceIdentifierInput`<sup>Optional</sup> <a name="relatedResourceIdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifierInput"></a>

```typescript
public readonly relatedResourceIdentifierInput: string;
```

- *Type:* string

---

##### `runtimeSupportInput`<sup>Optional</sup> <a name="runtimeSupportInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupportInput"></a>

```typescript
public readonly runtimeSupportInput: string[];
```

- *Type:* string[]

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.typeInput"></a>

```typescript
public readonly typeInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `relatedResourceIdentifier`<sup>Required</sup> <a name="relatedResourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifier"></a>

```typescript
public readonly relatedResourceIdentifier: string;
```

- *Type:* string

---

##### `runtimeSupport`<sup>Required</sup> <a name="runtimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupport"></a>

```typescript
public readonly runtimeSupport: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsConnectionsConfig <a name="DataOciDatabaseToolsDatabaseToolsConnectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsConfig: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#compartment_id DataOciDatabaseToolsDatabaseToolsConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#display_name DataOciDatabaseToolsDatabaseToolsConnections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#id DataOciDatabaseToolsDatabaseToolsConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.relatedResourceIdentifier">relatedResourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#related_resource_identifier DataOciDatabaseToolsDatabaseToolsConnections#related_resource_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.runtimeSupport">runtimeSupport</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#runtime_support DataOciDatabaseToolsDatabaseToolsConnections#runtime_support}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#state DataOciDatabaseToolsDatabaseToolsConnections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.type">type</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#type DataOciDatabaseToolsDatabaseToolsConnections#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#compartment_id DataOciDatabaseToolsDatabaseToolsConnections#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#display_name DataOciDatabaseToolsDatabaseToolsConnections#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseToolsDatabaseToolsConnectionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#filter DataOciDatabaseToolsDatabaseToolsConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#id DataOciDatabaseToolsDatabaseToolsConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `relatedResourceIdentifier`<sup>Optional</sup> <a name="relatedResourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.relatedResourceIdentifier"></a>

```typescript
public readonly relatedResourceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#related_resource_identifier DataOciDatabaseToolsDatabaseToolsConnections#related_resource_identifier}.

---

##### `runtimeSupport`<sup>Optional</sup> <a name="runtimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.runtimeSupport"></a>

```typescript
public readonly runtimeSupport: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#runtime_support DataOciDatabaseToolsDatabaseToolsConnections#runtime_support}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#state DataOciDatabaseToolsDatabaseToolsConnections#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#type DataOciDatabaseToolsDatabaseToolsConnections#type}.

---

### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword = { ... }
```


### DataOciDatabaseToolsDatabaseToolsConnectionsFilter <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsConnectionsFilter: dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#name DataOciDatabaseToolsDatabaseToolsConnections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#values DataOciDatabaseToolsDatabaseToolsConnections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#regex DataOciDatabaseToolsDatabaseToolsConnections#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#name DataOciDatabaseToolsDatabaseToolsConnections#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#values DataOciDatabaseToolsDatabaseToolsConnections#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#regex DataOciDatabaseToolsDatabaseToolsConnections#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreContent">keyStoreContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStorePassword">keyStorePassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreType">keyStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyStoreContent`<sup>Required</sup> <a name="keyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreContent"></a>

```typescript
public readonly keyStoreContent: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList</a>

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList</a>

---

##### `keyStoreType`<sup>Required</sup> <a name="keyStoreType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreType"></a>

```typescript
public readonly keyStoreType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.advancedProperties">advancedProperties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.keyStores">keyStores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.proxyClient">proxyClient</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.relatedResource">relatedResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.runtimeSupport">runtimeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userPassword">userPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedProperties`<sup>Required</sup> <a name="advancedProperties" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.advancedProperties"></a>

```typescript
public readonly advancedProperties: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyStores`<sup>Required</sup> <a name="keyStores" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.keyStores"></a>

```typescript
public readonly keyStores: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.locks"></a>

```typescript
public readonly locks: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList</a>

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `proxyClient`<sup>Required</sup> <a name="proxyClient" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.proxyClient"></a>

```typescript
public readonly proxyClient: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList</a>

---

##### `relatedResource`<sup>Required</sup> <a name="relatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.relatedResource"></a>

```typescript
public readonly relatedResource: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList</a>

---

##### `runtimeSupport`<sup>Required</sup> <a name="runtimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.runtimeSupport"></a>

```typescript
public readonly runtimeSupport: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userPassword`<sup>Required</sup> <a name="userPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userPassword"></a>

```typescript
public readonly userPassword: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.proxyAuthenticationType">proxyAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userPassword">userPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `proxyAuthenticationType`<sup>Required</sup> <a name="proxyAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.proxyAuthenticationType"></a>

```typescript
public readonly proxyAuthenticationType: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userPassword`<sup>Required</sup> <a name="userPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userPassword"></a>

```typescript
public readonly userPassword: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsFilterList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseToolsDatabaseToolsConnectionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>[]

---


### DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsConnections } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseToolsDatabaseToolsConnectionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter">DataOciDatabaseToolsDatabaseToolsConnectionsFilter</a>

---



